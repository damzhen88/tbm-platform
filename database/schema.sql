-- TBM Platform Database Schema
-- Full-scale database design for 100k+ concurrent users

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- USERS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    full_name VARCHAR(255),
    user_type VARCHAR(50) DEFAULT 'investor', -- 'investor', 'founder', 'advisor'
    avatar_url TEXT,
    bio TEXT,
    company VARCHAR(255),
    position VARCHAR(255),
    linkedin_url TEXT,
    
    -- Investment preferences
    preferred_industries TEXT[], -- Array of industries
    preferred_locations TEXT[], -- Array of locations
    preferred_stages TEXT[], -- Array of stages (seed, series_a, etc.)
    min_investment DECIMAL(15,2),
    max_investment DECIMAL(15,2),
    investor_type VARCHAR(50), -- 'individual', 'institutional', 'angel'
    
    -- Verification
    kyc_status VARCHAR(50) DEFAULT 'pending', -- 'pending', 'verified', 'rejected'
    kyc_verified_at TIMESTAMP,
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Constraints
    CONSTRAINT user_type CHECK (user_type IN ('investor', 'founder', 'advisor'))
);

-- Index for user lookups
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_user_type ON users(user_type);
CREATE INDEX IF NOT EXISTS idx_users_kyc_status ON users(kyc_status);

-- ============================================
-- LISTINGS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS listings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    owner_id UUID REFERENCES users(id) ON DELETE CASCADE,
    
    -- Basic info
    title VARCHAR(500) NOT NULL,
    description TEXT,
    industry VARCHAR(100),
    stage VARCHAR(50), -- 'seed', 'series_a', 'series_b', 'growth', 'mature'
    location VARCHAR(255),
    
    -- Financial details
    target_amount DECIMAL(15,2),
    equity_offered DECIMAL(5,2),
    valuation DECIMAL(15,2),
    revenue DECIMAL(15,2),
    ebitda DECIMAL(10,2),
    
    -- Status
    status VARCHAR(50) DEFAULT 'pending', -- 'pending', 'active', 'under_review', 'closed'
    
    -- Analytics
    view_count INTEGER DEFAULT 0,
    inquiry_count INTEGER DEFAULT 0,
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for listings
CREATE INDEX IF NOT EXISTS idx_listings_owner ON listings(owner_id);
CREATE INDEX IF NOT EXISTS idx_listings_status ON listings(status);
CREATE INDEX IF NOT EXISTS idx_listings_industry ON listings(industry);
CREATE INDEX IF NOT EXISTS idx_listings_stage ON listings(stage);
CREATE INDEX IF NOT EXISTS idx_listings_created ON listings(created_at DESC);

-- ============================================
-- CONVERSATIONS TABLE (Messaging)
-- ============================================
CREATE TABLE IF NOT EXISTS conversations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    
    participant1_id UUID REFERENCES users(id) ON DELETE CASCADE,
    participant2_id UUID REFERENCES users(id) ON DELETE CASCADE,
    
    listing_id UUID REFERENCES listings(id) ON DELETE SET NULL,
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Constraints
    CONSTRAINT different_participants CHECK (participant1_id != participant2_id)
);

-- Index for conversations
CREATE INDEX IF NOT EXISTS idx_conversations_participant1 ON conversations(participant1_id);
CREATE INDEX IF NOT EXISTS idx_conversations_participant2 ON conversations(participant2_id);
CREATE INDEX IF NOT EXISTS idx_conversations_listing ON conversations(listing_id);
CREATE INDEX IF NOT EXISTS idx_conversations_updated ON conversations(updated_at DESC);

-- ============================================
-- MESSAGES TABLE (Real-time Messaging)
-- ============================================
CREATE TABLE IF NOT EXISTS messages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    
    conversation_id UUID REFERENCES conversations(id) ON DELETE CASCADE,
    sender_id UUID REFERENCES users(id) ON DELETE SET NULL,
    
    content TEXT NOT NULL,
    message_type VARCHAR(50) DEFAULT 'text', -- 'text', 'file', 'system'
    attachments JSONB DEFAULT '[]',
    
    -- Read status
    read_at TIMESTAMP WITH TIME ZONE,
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for messages (critical for 100k users)
CREATE INDEX IF NOT EXISTS idx_messages_conversation ON messages(conversation_id);
CREATE INDEX IF NOT EXISTS idx_messages_sender ON messages(sender_id);
CREATE INDEX IF NOT EXISTS idx_messages_created ON messages(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_messages_unread ON messages(conversation_id, read_at) WHERE read_at IS NULL;

-- ============================================
-- NDA TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS ndas (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    
    listing_id UUID REFERENCES listings(id) ON DELETE CASCADE,
    requester_id UUID REFERENCES users(id) ON DELETE CASCADE,
    recipient_id UUID REFERENCES users(id) ON DELETE CASCADE,
    
    -- Status
    status VARCHAR(50) DEFAULT 'pending', -- 'pending', 'active', 'rejected', 'expired'
    
    -- Messages
    message TEXT,
    response_message TEXT,
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    signed_at TIMESTAMP WITH TIME ZONE,
    expires_at TIMESTAMP WITH TIME ZONE,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for NDAs
CREATE INDEX IF NOT EXISTS idx_ndas_listing ON ndas(listing_id);
CREATE INDEX IF NOT EXISTS idx_ndas_requester ON ndas(requester_id);
CREATE INDEX IF NOT EXISTS idx_ndas_recipient ON ndas(recipient_id);
CREATE INDEX IF NOT EXISTS idx_ndas_status ON ndas(status);

-- ============================================
-- MATCHES TABLE (AI Matching)
-- ============================================
CREATE TABLE IF NOT EXISTS matches (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    listing_id UUID REFERENCES listings(id) ON DELETE CASCADE,
    
    -- Match details
    match_score INTEGER DEFAULT 0, -- 0-100
    status VARCHAR(50) DEFAULT 'pending', -- 'pending', 'shown', 'interested', 'not_interested'
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Constraints
    CONSTRAINT unique_user_listing UNIQUE (user_id, listing_id),
    CONSTRAINT match_score CHECK (match_score >= 0 AND match_score <= 100)
);

-- Index for matches
CREATE INDEX IF NOT EXISTS idx_matches_user ON matches(user_id);
CREATE INDEX IF NOT EXISTS idx_matches_listing ON matches(listing_id);
CREATE INDEX IF NOT EXISTS idx_matches_score ON matches(match_score DESC);
CREATE INDEX IF NOT EXISTS idx_matches_status ON matches(status);

-- ============================================
-- DOCUMENTS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS documents (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    
    listing_id UUID REFERENCES listings(id) ON DELETE CASCADE,
    uploaded_by UUID REFERENCES users(id) ON DELETE SET NULL,
    
    -- File info
    file_name VARCHAR(500) NOT NULL,
    file_type VARCHAR(100),
    file_size BIGINT,
    storage_path TEXT,
    
    -- Category
    category VARCHAR(50), -- 'financials', 'legal', 'operations', 'marketing', 'other'
    
    -- Status
    status VARCHAR(50) DEFAULT 'active', -- 'active', 'deleted'
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for documents
CREATE INDEX IF NOT EXISTS idx_documents_listing ON documents(listing_id);
CREATE INDEX IF NOT EXISTS idx_documents_category ON documents(category);
CREATE INDEX IF NOT EXISTS idx_documents_status ON documents(status);

-- ============================================
-- REAL-TIME SUBSCRIPTIONS
-- Enable Realtime for messaging
-- ============================================
ALTER PUBLICATION supabase_realtime ADD TABLE messages;
ALTER PUBLICATION supabase_realtime ADD TABLE conversations;

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================

-- Enable RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE listings ENABLE ROW LEVEL SECURITY;
ALTER TABLE conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE ndas ENABLE ROW LEVEL SECURITY;
ALTER TABLE matches ENABLE ROW LEVEL SECURITY;
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;

-- Users: Read own profile, read others' public info
CREATE POLICY "Users can view own profile" ON users FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON users FOR UPDATE USING (auth.uid() = id);

-- Listings: Read active listings, create own, update/delete own
CREATE POLICY "Anyone can view active listings" ON listings FOR SELECT USING (status = 'active' OR owner_id = auth.uid());
CREATE POLICY "Users can create listings" ON listings FOR INSERT WITH CHECK (auth.uid() = owner_id);
CREATE POLICY "Users can update own listings" ON listings FOR UPDATE USING (auth.uid() = owner_id);
CREATE POLICY "Users can delete own listings" ON listings FOR DELETE USING (auth.uid() = owner_id);

-- Messages: Only participants can read/write
CREATE POLICY "Participants can view messages" ON messages FOR SELECT 
    USING (sender_id = auth.uid() OR conversation_id IN (
        SELECT id FROM conversations WHERE participant1_id = auth.uid() OR participant2_id = auth.uid()
    ));
CREATE POLICY "Users can send messages" ON messages FOR INSERT WITH CHECK (auth.uid() = sender_id);

-- NDAs: Only involved parties
CREATE POLICY "Involved parties can view NDAs" ON ndas FOR SELECT 
    USING (requester_id = auth.uid() OR recipient_id = auth.uid());
CREATE POLICY "Users can request NDAs" ON ndas FOR INSERT WITH CHECK (requester_id = auth.uid());
CREATE POLICY "Recipients can respond to NDAs" ON ndas FOR UPDATE USING (recipient_id = auth.uid());

-- ============================================
-- TRIGGERS
-- ============================================

-- Update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_listings_updated_at BEFORE UPDATE ON listings
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_conversations_updated_at BEFORE UPDATE ON conversations
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_matches_updated_at BEFORE UPDATE ON matches
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_ndas_updated_at BEFORE UPDATE ON ndas
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

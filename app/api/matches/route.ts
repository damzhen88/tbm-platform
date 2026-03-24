import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Get matches for a user
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = Math.min(parseInt(searchParams.get('limit') || '20'), 50);

    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      );
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://ejzglzvcfhnhebaowjjd.supabase.co';
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqezdsenZjZmhuaGViYW93ampkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQyNjg1OTYsImV4cCI6MjA4OTg0NDU5Nn0.qMtfn3z4FHOCBlsUCE4AjOtpHCUz8gT_cZ1AVdOB74Q';
    
    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    const from = (page - 1) * limit;
    const to = from + limit - 1;

    // Get user preferences for matching
    const { data: userProfile } = await supabase
      .from('users')
      .select('*')
      .eq('id', userId)
      .single();

    // Build matching query
    let query = supabase
      .from('matches')
      .select(`
        *,
        listing:listings!matches_listing_id_fkey(*),
        matched_user:users!matches_user_id_fkey(id, full_name, email, user_type)
      `)
      .eq('user_id', userId)
      .order('match_score', { ascending: false })
      .range(from, to);

    const { data, error, count } = await query;

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      data,
      pagination: {
        page,
        limit,
        total: count || 0,
        totalPages: Math.ceil((count || 0) / limit),
      },
    });
  } catch (error) {
    console.error('Get matches error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Generate matches for a user (admin/background job)
export async function POST(request: NextRequest) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://ejzglzvcfhnhebaowjjd.supabase.co';
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqezdsenZjZmhuaGViYW93ampkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQyNjg1OTYsImV4cCI6MjA4OTg0NDU5Nn0.qMtfn3z4FHOCBlsUCE4AjOtpHCUz8gT_cZ1AVdOB74Q';
    
    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    // Verify authentication
    const { data: { session }, error: sessionError } = await supabase.auth.getSession();
    
    if (sessionError || !session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { userId } = await request.json();
    const targetUserId = userId || session.user.id;

    // Get user preferences
    const { data: userProfile } = await supabase
      .from('users')
      .select('*')
      .eq('id', targetUserId)
      .single();

    if (!userProfile) {
      return NextResponse.json(
        { error: 'User profile not found' },
        { status: 404 }
      );
    }

    // Get all active listings
    const { data: listings } = await supabase
      .from('listings')
      .select('*')
      .eq('status', 'active')
      .neq('owner_id', targetUserId);

    if (!listings || listings.length === 0) {
      return NextResponse.json({
        success: true,
        message: 'No listings available for matching',
        matches: [],
      });
    }

    // Calculate match scores (simplified algorithm)
    const matches = listings.map(listing => {
      let score = 50; // Base score

      // Industry match
      if (userProfile.preferred_industries?.includes(listing.industry)) {
        score += 20;
      }

      // Location match
      if (userProfile.preferred_locations?.includes(listing.location)) {
        score += 15;
      }

      // Stage match
      if (userProfile.preferred_stages?.includes(listing.stage)) {
        score += 10;
      }

      // Valuation range match
      if (listing.target_amount >= (userProfile.min_investment || 0) && 
          listing.target_amount <= (userProfile.max_investment || Infinity)) {
        score += 5;
      }

      return {
        user_id: targetUserId,
        listing_id: listing.id,
        match_score: Math.min(score, 100),
        status: 'pending',
        created_at: new Date().toISOString(),
      };
    });

    // Sort by score and take top 50
    const topMatches = matches
      .sort((a, b) => b.match_score - a.match_score)
      .slice(0, 50);

    // Insert matches (upsert to avoid duplicates)
    if (topMatches.length > 0) {
      const { error: insertError } = await supabase
        .from('matches')
        .upsert(topMatches, { 
          onConflict: 'user_id,listing_id',
          ignoreDuplicates: true 
        });

      if (insertError) {
        console.error('Match insertion error:', insertError);
      }
    }

    return NextResponse.json({
      success: true,
      matches_generated: topMatches.length,
      message: `Generated ${topMatches.length} matches`,
    });
  } catch (error) {
    console.error('Generate matches error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

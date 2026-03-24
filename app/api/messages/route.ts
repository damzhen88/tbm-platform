import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Get all conversations for a user
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      );
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://ejzglzvcfhnhebaowjjd.supabase.co';
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqemdsenZjZmhuaGViYW93ampkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQyNjg1OTYsImV4cCI6MjA4OTg0NDU5Nn0.qMtfn3z4FHOCBlsUCE4AjOtpHCUz8gT_cZ1AVdOB74Q';
    
    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    // Get all conversations where user is participant
    const { data: conversations, error } = await supabase
      .from('conversations')
      .select(`
        *,
        participant1:users!conversations_participant1_id_fkey(id, full_name, email, user_type),
        participant2:users!conversations_participant2_id_fkey(id, full_name, email, user_type),
        messages(messages(*)
      )`)
      .or(`participant1_id.eq.${userId},participant2_id.eq.${userId}`)
      .order('updated_at', { ascending: false });

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }

    // Get latest message for each conversation
    const { data: latestMessages } = await supabase
      .from('messages')
      .select('*, sender:users(id, full_name)')
      .in('conversation_id', conversations?.map(c => c.id) || [])
      .order('created_at', { ascending: false });

    // Map latest messages to conversations
    const enrichedConversations = conversations?.map(conv => {
      const convMessages = latestMessages?.filter(m => m.conversation_id === conv.id) || [];
      const lastMessage = convMessages[0];
      const unreadCount = convMessages.filter(m => !m.read_at && m.sender_id !== userId).length;
      
      const otherParticipant = conv.participant1_id === userId ? conv.participant2 : conv.participant1;
      
      return {
        ...conv,
        other_participant: otherParticipant,
        last_message: lastMessage,
        unread_count: unreadCount,
      };
    });

    return NextResponse.json({
      success: true,
      data: enrichedConversations,
    });
  } catch (error) {
    console.error('Get conversations error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Create a new conversation or get existing one
export async function POST(request: NextRequest) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://ejzglzvcfhnhebaowjjd.supabase.co';
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqemdsenZjZmhuaGViYW93ampkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQyNjg1OTYsImV4cCI6MjA4OTg0NDU5Nn0.qMtfn3z4FHOCBlsUCE4AjOtpHCUz8gT_cZ1AVdOB74Q';
    
    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    // Verify authentication
    const { data: { session }, error: sessionError } = await supabase.auth.getSession();
    
    if (sessionError || !session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { participantId, initialMessage, listingId } = await request.json();

    if (!participantId) {
      return NextResponse.json(
        { error: 'Participant ID is required' },
        { status: 400 }
      );
    }

    // Check if conversation already exists
    const { data: existingConv } = await supabase
      .from('conversations')
      .select('*')
      .or(`and(participant1_id.eq.${session.user.id},participant2_id.eq.${participantId}),and(participant1_id.eq.${participantId},participant2_id.eq.${session.user.id})`)
      .single();

    let conversation = existingConv;

    // Create new conversation if doesn't exist
    if (!existingConv) {
      const { data: newConv, error: convError } = await supabase
        .from('conversations')
        .insert({
          participant1_id: session.user.id,
          participant2_id: participantId,
          listing_id: listingId,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        })
        .select()
        .single();

      if (convError) {
        return NextResponse.json(
          { error: convError.message },
          { status: 400 }
        );
      }

      conversation = newConv;
    }

    // Send initial message if provided
    if (initialMessage) {
      const { error: msgError } = await supabase
        .from('messages')
        .insert({
          conversation_id: conversation.id,
          sender_id: session.user.id,
          content: initialMessage,
          created_at: new Date().toISOString(),
        });

      if (msgError) {
        console.error('Send message error:', msgError);
      }
    }

    return NextResponse.json({
      success: true,
      data: conversation,
    });
  } catch (error) {
    console.error('Create conversation error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

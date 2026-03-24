import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://ejzglzvcfhnhebaowjjd.supabase.co';
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqemdsenZjZmhuaGViYW93ampkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQyNjg1OTYsImV4cCI6MjA4OTg0NDU5Nn0.qMtfn3z4FHOCBlsUCE4AjOtpHCUz8gT_cZ1AVdOB74Q';
    
    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    // Get listing
    const { data: listing, error } = await supabase
      .from('listings')
      .select('*')
      .eq('id', id)
      .single();

    if (error || !listing) {
      return NextResponse.json(
        { error: 'Listing not found' },
        { status: 404 }
      );
    }

    // Increment view count (async, don't wait)
    supabase
      .from('listings')
      .update({ view_count: (listing.view_count || 0) + 1 })
      .eq('id', id)
      .then();

    // Get owner info
    const { data: owner } = await supabase
      .from('users')
      .select('id, full_name, email, user_type')
      .eq('id', listing.owner_id)
      .single();

    return NextResponse.json({
      success: true,
      data: {
        ...listing,
        owner,
      },
    });
  } catch (error) {
    console.error('Get listing error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

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

    // Check if user owns the listing
    const { data: existingListing } = await supabase
      .from('listings')
      .select('owner_id')
      .eq('id', id)
      .single();

    if (!existingListing || existingListing.owner_id !== session.user.id) {
      return NextResponse.json(
        { error: 'You can only edit your own listings' },
        { status: 403 }
      );
    }

    const body = await request.json();

    // Update listing
    const { data, error } = await supabase
      .from('listings')
      .update({
        ...body,
        updated_at: new Date().toISOString(),
      })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error('Update listing error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

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

    // Check if user owns the listing
    const { data: existingListing } = await supabase
      .from('listings')
      .select('owner_id')
      .eq('id', id)
      .single();

    if (!existingListing || existingListing.owner_id !== session.user.id) {
      return NextResponse.json(
        { error: 'You can only delete your own listings' },
        { status: 403 }
      );
    }

    // Delete listing
    const { error } = await supabase
      .from('listings')
      .delete()
      .eq('id', id);

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Listing deleted successfully',
    });
  } catch (error) {
    console.error('Delete listing error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

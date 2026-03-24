import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Get documents for a listing
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const listingId = searchParams.get('listingId');

    if (!listingId) {
      return NextResponse.json(
        { error: 'Listing ID is required' },
        { status: 400 }
      );
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://ejzglzvcfhnhebaowjjd.supabase.co';
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqezdsenZjZmhuaGViYW93ampkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQyNjg1OTYsImV4cCI6MjA4OTg0NDU5Nn0.qMtfn3z4FHOCBlsUCE4AjOtpHCUz8gT_cZ1AVdOB74Q';
    
    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    const { data, error } = await supabase
      .from('documents')
      .select('*')
      .eq('listing_id', listingId)
      .eq('status', 'active')
      .order('created_at', { ascending: false });

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
    console.error('Get documents error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Upload document (returns presigned URL)
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

    const { listingId, fileName, fileType, fileSize, category } = await request.json();

    if (!listingId || !fileName) {
      return NextResponse.json(
        { error: 'Listing ID and file name are required' },
        { status: 400 }
      );
    }

    // Verify user owns the listing
    const { data: listing } = await supabase
      .from('listings')
      .select('owner_id')
      .eq('id', listingId)
      .single();

    if (!listing || listing.owner_id !== session.user.id) {
      return NextResponse.json(
        { error: 'You can only upload documents to your own listings' },
        { status: 403 }
      );
    }

    // Generate presigned URL for upload
    const filePath = `listings/${listingId}/${Date.now()}-${fileName}`;
    
    const { data: uploadData, error: uploadError } = await supabase
      .storage
      .from('documents')
      .createSignedUploadUrl(filePath);

    if (uploadError) {
      return NextResponse.json(
        { error: uploadError.message },
        { status: 400 }
      );
    }

    // Create document record
    const { data: document, error: docError } = await supabase
      .from('documents')
      .insert({
        listing_id: listingId,
        file_name: fileName,
        file_type: fileType,
        file_size: fileSize,
        category: category || 'other',
        storage_path: filePath,
        uploaded_by: session.user.id,
        status: 'active',
      })
      .select()
      .single();

    if (docError) {
      return NextResponse.json(
        { error: docError.message },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      data: {
        document,
        uploadUrl: uploadData.signedUrl,
      },
    });
  } catch (error) {
    console.error('Upload document error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Delete document
export async function DELETE(request: NextRequest) {
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

    const { searchParams } = new URL(request.url);
    const documentId = searchParams.get('documentId');

    if (!documentId) {
      return NextResponse.json(
        { error: 'Document ID is required' },
        { status: 400 }
      );
    }

    // Get document and verify ownership
    const { data: document } = await supabase
      .from('documents')
      .select('*, listing:listings(owner_id)')
      .eq('id', documentId)
      .single();

    if (!document) {
      return NextResponse.json(
        { error: 'Document not found' },
        { status: 404 }
      );
    }

    // Only listing owner can delete
    if (document.listing?.owner_id !== session.user.id) {
      return NextResponse.json(
        { error: 'You can only delete documents from your own listings' },
        { status: 403 }
      );
    }

    // Soft delete (mark as inactive)
    const { error: deleteError } = await supabase
      .from('documents')
      .update({ status: 'deleted' })
      .eq('id', documentId);

    if (deleteError) {
      return NextResponse.json(
        { error: deleteError.message },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Document deleted successfully',
    });
  } catch (error) {
    console.error('Delete document error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

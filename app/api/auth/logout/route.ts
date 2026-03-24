import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(request: NextRequest) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://ejzglzvcfhnhebaowjjd.supabase.co';
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqemdsenZjZmhuaGViYW93ampkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQyNjg1OTYsImV4cCI6MjA4OTg0NDU5Nn0.qMtfn3z4FHOCBlsUCE4AjOtpHCUz8gT_cZ1AVdOB74Q';
    
    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    const { error } = await supabase.auth.signOut();

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Logged out successfully',
    });
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Supabase Client Configuration
import { createClient } from '@supabase/supabase-js'

const getSupabaseUrl = () => {
  if (typeof window !== 'undefined') {
    return (window as any).__NEXT_DATA__?.props?.pageProps?.supabaseUrl || process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://ejzglzvcfhnhebaowjjd.supabase.co'
  }
  return process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://ejzglzvcfhnhebaowjjd.supabase.co'
}

const getSupabaseAnonKey = () => {
  if (typeof window !== 'undefined') {
    return (window as any).__NEXT_DATA__?.props?.pageProps?.supabaseAnonKey || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqemdsenZjZmhuaGViYW93ampkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQyNjg1OTYsImV4cCI6MjA4OTg0NDU5Nn0.qMtfn3z4FHOCBlsUCE4AjOtpHCUz8gT_cZ1AVdOB74Q'
  }
  return process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqemdsenZjZmhuaGViYW93ampkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQyNjg1OTYsImV4cCI6MjA4OTg0NDU5Nn0.qMtfn3z4FHOCBlsUCE4AjOtpHCUz8gT_cZ1AVdOB74Q'
}

let supabaseInstance: ReturnType<typeof createClient> | null = null

export const supabase = (() => {
  if (supabaseInstance) return supabaseInstance
  
  const supabaseUrl = getSupabaseUrl()
  const supabaseAnonKey = getSupabaseAnonKey()
  
  if (!supabaseUrl || supabaseUrl === 'https://your-project.supabase.co') {
    // Return a mock client for development
    return {
      auth: {
        getSession: async () => ({ data: { session: null }, error: null }),
        onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } }, error: null }),
        signInWithPassword: async () => ({ data: { user: null, session: null }, error: { message: 'Configure Supabase' } }),
        signUp: async () => ({ data: { user: null, session: null }, error: { message: 'Configure Supabase' } }),
        signOut: async () => ({ error: null }),
      },
    } as any
  }
  
  supabaseInstance = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
    }
  })
  
  return supabaseInstance
})()

// Auth helpers
export const authApi = {
  async signUp(email: string, password: string) {
    const { data, error } = await supabase.auth.signUp({ email, password });
    return { data, error };
  },

  async signIn(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    return { data, error };
  },

  async signOut() {
    const { error } = await supabase.auth.signOut();
    return { error };
  },

  async getSession() {
    const { data, error } = await supabase.auth.getSession();
    return { session: data?.session, error };
  },

  async getUser() {
    const { data, error } = await supabase.auth.getUser();
    return { user: data?.user, error };
  },
};

// Listings API
export const listingsApi = {
  async getAll(filters?: { status?: string; industry?: string }) {
    let query = supabase.from('listings').select('*');
    if (filters?.status) query = query.eq('status', filters.status);
    if (filters?.industry) query = query.eq('industry', filters.industry);
    const { data, error } = await query.order('created_at', { ascending: false });
    return { data, error };
  },

  async getById(id: string) {
    const { data, error } = await supabase
      .from('listings')
      .select('*')
      .eq('id', id)
      .single();
    return { data, error };
  },

  async create(listing: any) {
    const { data, error } = await supabase.from('listings').insert(listing).select().single();
    return { data, error };
  },

  async update(id: string, updates: any) {
    const { data, error } = await supabase
      .from('listings')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    return { data, error };
  },

  async delete(id: string) {
    const { error } = await supabase.from('listings').delete().eq('id', id);
    return { error };
  },
};

// Users API
export const usersApi = {
  async getProfile(userId: string) {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', userId)
      .single();
    return { data, error };
  },

  async updateProfile(userId: string, updates: any) {
    const { data, error } = await supabase
      .from('users')
      .update(updates)
      .eq('id', userId)
      .select()
      .single();
    return { data, error };
  },

  async create(userData: any) {
    const { data, error } = await supabase.from('users').insert(userData).select().single();
    return { data, error };
  },
};

// For server-side operations
export const getSupabaseAdmin = () => {
  const supabaseUrl = getSupabaseUrl()
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
  
  if (!supabaseUrl || supabaseUrl === 'https://your-project.supabase.co') {
    return null
  }
  
  return createClient(supabaseUrl, serviceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    }
  })
}

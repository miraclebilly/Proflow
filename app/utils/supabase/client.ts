import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}

export function signInWithGoogle() {
    const supabase = createClient()
    supabase.auth.signInWithOAuth({ provider: "google" });
}

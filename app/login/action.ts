'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '../utils/supabase/server'

export async function login(formData: FormData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs

  if (!supabase) {
    console.log("Supabase or Supabase auth doesn't exist")
    redirect('/error')
  }
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await (await supabase).auth.signInWithPassword(data)

  if (error) {
      console.log("Error", error)
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/dashboard')
}
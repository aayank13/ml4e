import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export function createClient() {
  const cookieStore = cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        async get(name: string) {
          return (await cookieStore).get(name)?.value;
        },
        /* eslint-disable @typescript-eslint/no-explicit-any */
        async set(name: string, value: string, options: any) {
          try {
            (await cookieStore).set({ name, value, ...options });
          } catch (error) {
            // Handle cookie errors
          }
        },
        async remove(name: string, options: any) {
          try {
            (await cookieStore).set({ name, value: '', ...options });
          } catch (error) {
            // Handle cookie errors
          }
        },
      },
    }
  );
}
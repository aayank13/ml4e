import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export async function GET(request: Request) {
  try {
    const requestUrl = new URL(request.url);
    const code = requestUrl.searchParams.get('code');

    if (code) {
      const cookieStore = cookies();
      const supabase = createRouteHandlerClient({ cookies: () => cookieStore });
      await supabase.auth.exchangeCodeForSession(code);
    }

    // Force a hard redirect to ensure session is updated
    return new Response(null, {
      status: 302,
      headers: {
        Location: '/dashboard',
      },
    });
  } catch (error) {
    console.error('Auth callback error:', error);
    return new Response(null, {
      status: 302,
      headers: {
        Location: '/auth?error=Unable to authenticate',
      },
    });
  }
}
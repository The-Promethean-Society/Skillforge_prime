
'use client';

import { SessionProvider, useSession, signIn, signOut } from 'next-auth/react';
import type { ReactNode } from 'react';

// The new AuthProvider that wraps the app in NextAuth's SessionProvider
export function AuthProvider({ children }: { children: ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}

// The new useAuth hook that provides session data and sign-in/sign-out functions
export function useAuth() {
  const { data: session, status } = useSession();
  const loading = status === 'loading';
  const user = session?.user || null;

  return {
    user,
    loading,
    signInWithGoogle: () => signIn('google', { callbackUrl: '/dashboard' }),
    signOut: () => signOut({ callbackUrl: '/dashboard' }),
  };
}

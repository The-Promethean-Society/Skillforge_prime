
'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import { User } from 'next-auth';

// This is a custom hook that simplifies accessing session data and auth functions.
// It acts as a client to our NextAuth.js "Session & Profile Service".

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}

export const useAuth = (): AuthContextType => {
  const { data: session, status } = useSession();
  const loading = status === 'loading';

  const signInWithGoogle = async () => {
    // This function simply tells NextAuth to start the Google sign-in flow.
    // It will redirect to Google and then handle the callback automatically.
    await signIn('google', { callbackUrl: '/dashboard' });
  };

  const signOutUser = async () => {
    // This tells NextAuth to destroy the session and signs the user out.
    await signOut({ callbackUrl: '/dashboard' });
  };
  
  const user = session?.user ?? null;

  return {
    user,
    loading,
    signInWithGoogle,
    signOut: signOutUser,
  };
};

// The actual AuthProvider is now the SessionProvider from next-auth,
// which we've placed in a separate file for clarity and to wrap the root layout.
// See src/hooks/auth-provider.tsx

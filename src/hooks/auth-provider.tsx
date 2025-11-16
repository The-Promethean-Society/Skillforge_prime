
'use client';

import { SessionProvider } from 'next-auth/react';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  // The SessionProvider from NextAuth.js is the new "AuthProvider".
  // It handles fetching the session from our backend API route
  // and makes it available globally via the `useSession` hook.
  return <SessionProvider>{children}</SessionProvider>;
}

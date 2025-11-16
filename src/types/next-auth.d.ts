
import NextAuth, { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  /**
   * Extends the built-in session to include the user's ID,
   * which we are adding in the `session` callback.
   */
  interface Session {
    user: {
      id: string;
    } & DefaultSession['user'];
  }
}

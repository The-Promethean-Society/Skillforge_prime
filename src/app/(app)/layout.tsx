'use client';

import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { SidebarNav } from '@/components/app/sidebar-nav';
import { useAuth } from '@/hooks/use-auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return <div>Loading...</div>; // Or a proper loading spinner
  }

  return (
    <SidebarProvider>
      <SidebarNav />
      <SidebarInset>
        <div className="flex min-h-screen w-full flex-col">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}

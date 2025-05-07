'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { getAuthStatus } from "@/lib/auth"; 

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const isAuthenticated = getAuthStatus();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/auth/signin'); 
    }
  }, [isAuthenticated, router]);

  return isAuthenticated ? <>{children}</> : null;
}
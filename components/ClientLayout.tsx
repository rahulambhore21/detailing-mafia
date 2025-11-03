"use client";

import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useRouter, usePathname } from "next/navigation";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export function ClientLayout({ children }: ClientLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigate = (page: string) => {
    const routes: { [key: string]: string } = {
      'home': '/',
      'about': '/about',
      'services': '/services',
      'service-detail': '/service',
      'experience': '/experience',
      'blog': '/blog',
      'contact': '/contact',
      'booking': '/booking'
    };

    const route = routes[page];
    if (route) {
      router.push(route);
    }
  };

  const getCurrentPage = () => {
    const pageMap: { [key: string]: string } = {
      '/': 'home',
      '/home': 'home',
      '/about': 'about',
      '/services': 'services',
      '/service': 'service-detail',
      '/experience': 'experience',
      '/blog': 'blog',
      '/contact': 'contact',
      '/booking': 'booking'
    };
    return pageMap[pathname] || 'home';
  };

  return (
    <>
      <Navbar currentPage={getCurrentPage() as any} onNavigate={handleNavigate} />
      {children}
      <Footer onNavigate={handleNavigate} />
    </>
  );
}
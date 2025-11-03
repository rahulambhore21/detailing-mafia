"use client";

import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export function ClientLayout({ children }: ClientLayoutProps) {
  const handleNavigate = (page: string) => {
    // Navigation logic would go here
    console.log('Navigate to:', page);
  };

  return (
    <>
      <Navbar currentPage="home" onNavigate={handleNavigate} />
      {children}
      <Footer onNavigate={handleNavigate} />
    </>
  );
}
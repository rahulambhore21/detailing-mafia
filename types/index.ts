import { LucideIcon } from 'lucide-react';

export interface ServiceData {
  icon: LucideIcon;
  title: string;
  description: string;
  aboutTitle: string;
  aboutDescription: string;
  whatsIncluded: string[];
  benefits: string[];
  ctaTitle?: string;
  ctaDescription?: string;
  isEmergency?: boolean;
}

export interface ServicesDataType {
  [key: string]: ServiceData;
}

export type NavigationPage = 'home' | 'about' | 'services' | 'service-detail' | 'experience' | 'blog' | 'contact' | 'booking';
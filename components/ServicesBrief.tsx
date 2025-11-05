'use client'
import React from 'react'
import Image from 'next/image';
import { Skiper52 } from '@/components/ui/skiper-ui/skiper52';
import { useRouter } from 'next/navigation';
import { titleToSlug } from '../lib/utils';

function ServicesBrief() {
  const router = useRouter();

  const handleServiceClick = (serviceTitle: string) => {
    const slug = titleToSlug(serviceTitle);
    router.push(`/service/${slug}`);
  };

  return (
    <div>
      <div className='w-full relative min-h-screen'>
        <Image 
          src="/bg1.svg" 
          alt="Background" 
          fill
          className="object-cover"
        />
        <div className="relative z-10">
          <Skiper52 onServiceClick={handleServiceClick} />
        </div>
      </div>
    </div>
  )
}

export default ServicesBrief
import { Hero } from '../components/Hero';
import { Skiper17 } from '../components/ui/skiper-ui/skiper17';
import ReactLenis from "lenis/react";

import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import AboutBrief from '@/components/AboutBrief';
import ServicesBrief from '@/components/ServicesBrief';


export default function Home() {
	return (
		<ReactLenis root>
			{/* Hero Section */}
			<Hero />

			{/* About Section */}
			<AboutBrief/>

			{/* Services Section */}
			<ServicesBrief/>


			{/* Why Choose Us Section */}
			<section className='w-full min-h-screen'>
				<WhyChooseUs/>
			</section>
			
			{/* Testimonials Section */}
			<Testimonials />
		</ReactLenis>
	);
}

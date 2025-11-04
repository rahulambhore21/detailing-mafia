import { Hero } from '../components/Hero';
import { FeatureCard } from '../components/FeatureCard';
import { TestimonialCard } from '../components/TestimonialCard';
import { Shield, Clock, Award } from 'lucide-react';
import { Skiper52 } from '@/components/ui/skiper-ui/skiper52';
import Image from 'next/image';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';

const features = [
	{
		icon: Award,
		title: 'Certified Mechanics',
		description: 'All our technicians are ASE certified with years of experience',
	},
	{
		icon: Clock,
		title: '24/7 Support',
		description: 'Round-the-clock emergency roadside assistance available',
	},
	{
		icon: Shield,
		title: 'Quality Guarantee',
		description: '12-month warranty on all parts and labor',
	},
];

const testimonials = [
	{
		name: 'John Smith',
		location: 'Car Owner',
		rating: 5,
		text: 'Outstanding service! They fixed my engine problem quickly and the price was very reasonable. Highly recommend!',
	},
	{
		name: 'Sarah Johnson',
		location: 'Business Owner',
		rating: 5,
		text: "I've been bringing my fleet here for 3 years. Always professional, efficient, and trustworthy.",
	},
	{
		name: 'Mike Davis',
		location: 'Local Resident',
		rating: 5,
		text: 'Best auto shop in town. They explain everything clearly and never try to upsell unnecessary services.',
	},
];

export default function Home() {
	return (
		<>
			<Hero />
			<div className='w-full h-screen relative'>
				<Image 
					src="/about.svg" 
					alt="Example Image" 
					fill
					className="object-cover"
				/>
				<div className="absolute inset-0 flex items-end pb-32">
					<div className="max-w-7xl mx-auto px-4 w-full">
						<div className="max-w-2xl">
							<div className="text-black space-y-8">
								<p className="text-lg md:text-xl leading-relaxed">
									At Shri Krishna Automobile, we bring premium care and precision to every vehicle. With skilled technicians, modern tools, and a commitment to honest service, we ensure your car gets the attention it deserves.
								</p>
								<p className="text-lg md:text-xl font-semibold text-blue-900">
									Quality, trust, and performance — that's our promise. Drive with confidence, always.
								</p>
								<div className="flex flex-col sm:flex-row gap-4 pt-4">
									<button className="bg-blue-900 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-colors font-semibold">
										Learn More About Us
									</button>
									<button className="border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-lg hover:bg-blue-900 hover:text-white transition-colors font-semibold">
										Our Services
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='w-full relative'>
				<Image 
					src="/bg1.svg" 
					alt="Background" 
					fill
					className="object-cover"
				/>
				<div className="relative z-10">
					<Skiper52 />
				</div>
			</div>

			{/* Why Choose Us Section */}
			<section className='w-full h-screen'>
				<WhyChooseUs/>
			</section>
			
			{/* Testimonials Section */}
			<Testimonials />
		</>
	);
}

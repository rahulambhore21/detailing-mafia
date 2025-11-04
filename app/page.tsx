import { Hero } from '../components/Hero';
import { FeatureCard } from '../components/FeatureCard';
import { TestimonialCard } from '../components/TestimonialCard';
import { Shield, Clock, Award } from 'lucide-react';
import { Skiper52 } from '@/components/ui/skiper-ui/skiper52';
import Image from 'next/image';
import WhyChooseUs from '@/components/WhyChooseUs';
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
				<div className="absolute inset-0 flex items-center">
					<div className="max-w-7xl mx-auto px-4 w-full">
						<div className="max-w-lg">
							<div className="text-black space-y-6">
								<p className="text-lg md:text-xl leading-relaxed">
									At Shri Krishna Automobile, we bring premium care and precision to every vehicle. With skilled technicians, modern tools, and a commitment to honest service, we ensure your car gets the attention it deserves.
								</p>
								<p className="text-lg md:text-xl font-semibold">
									Quality, trust, and performance — that's our promise. Drive with confidence, always.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Skiper52 />

			{/* Why Choose Us Section */}
			<section className='w-full h-screen'>
				<WhyChooseUs/>
			</section>
			{/* <section className="py-20 bg-gradient-to-b from-white to-gray-50">
				<div className="max-w-7xl mx-auto px-4">
					<div className="text-center mb-16">
						<div className="inline-block bg-blue-900 text-white px-4 py-2 rounded-full mb-4">
							Why Choose Us
						</div>
						<h2 className="text-4xl md:text-5xl mb-4">
							Excellence in every aspect of{' '}
							<span className="text-blue-900">automotive care</span>
						</h2>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						{features.map((feature, index) => (
							<FeatureCard key={index} {...feature} />
						))}
					</div>
				</div>
			</section> */}

			{/* Testimonials Section */}
			<section className="py-20 bg-gradient-to-b from-gray-50 to-white">
				<div className="max-w-7xl mx-auto px-4">
					<div className="text-center mb-16">
						<div className="inline-block bg-blue-900 text-white px-4 py-2 rounded-full mb-4">
							Testimonials
						</div>
						<h2 className="text-4xl md:text-5xl mb-4">
							What Our <span className="text-blue-900">Clients Say</span>
						</h2>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						{testimonials.map((testimonial, index) => (
							<TestimonialCard key={index} {...testimonial} />
						))}
					</div>
				</div>
			</section>
		</>
	);
}

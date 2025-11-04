import { Hero } from '../components/Hero';
import { Skiper52 } from '@/components/ui/skiper-ui/skiper52';
import Image from 'next/image';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';


export default function Home() {
	return (
		<>
			{/* Hero Section */}
			<Hero />

			{/* About Section */}
			<div className='w-full min-h-screen sm:h-screen relative'>
				<Image 
					src="/about.svg" 
					alt="Example Image" 
					fill
					className="object-cover"
				/>
				<div className="absolute inset-0 flex items-end pb-16 sm:pb-32">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
						<div className="max-w-2xl">
							<div className="text-black space-y-6 sm:space-y-8">
								<p className="text-base sm:text-lg md:text-xl leading-relaxed">
									At Shri Krishna Automobile, we bring premium care and precision to every vehicle. With skilled technicians, modern tools, and a commitment to honest service, we ensure your car gets the attention it deserves.
								</p>
								<p className="text-base sm:text-lg md:text-xl font-semibold text-blue-900">
									Quality, trust, and performance — that's our promise. Drive with confidence, always.
								</p>
								<div className="flex flex-col sm:flex-row gap-4 pt-4">
									<button className="bg-blue-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-blue-800 transition-colors font-semibold text-sm sm:text-base">
										Learn More About Us
									</button>
									<button className="border-2 border-blue-900 text-blue-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-blue-900 hover:text-white transition-colors font-semibold text-sm sm:text-base">
										Our Services
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Services Section */}
			<div className='w-full relative min-h-screen'>
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
			<section className='w-full min-h-screen'>
				<WhyChooseUs/>
			</section>
			
			{/* Testimonials Section */}
			<Testimonials />
		</>
	);
}

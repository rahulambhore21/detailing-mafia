"use client";

import { 
  Calendar,
  User,
  ArrowRight,
  Tag,
  Mail
} from 'lucide-react';
import { ImageWithFallback } from '../../components/imageWIthFallback';
import { useState } from 'react';

function BlogPage() {
  const [email, setEmail] = useState('');

  const featuredArticle = {
    title: '10 Signs Your Car Needs Immediate Attention',
    description: 'Learn to recognize the warning signs that indicate your vehicle needs professional service before minor issues become major problems.',
    author: 'Michael Rodriguez',
    date: 'March 15, 2024',
    image: 'https://images.unsplash.com/photo-1730453075684-2ad6232ab451?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBtYWludGVuYW5jZSUyMG1lY2hhbmljfGVufDF8fHx8MTc2MTg4NDYwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tag: 'Featured Article'
  };

  const articles = [
    {
      title: 'The Ultimate Guide to Seasonal Car Maintenance',
      description: 'Prepare your vehicle for changing weather conditions with our comprehensive seasonal maintenance checklist for optimal performance year-round.',
      author: 'David Chen',
      date: 'March 10, 2024',
      category: 'Seasonal Care',
      image: 'https://images.unsplash.com/photo-1761810324656-f94f0bc4a597?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWFzb25hbCUyMGNhciUyMGNhcmV8ZW58MXx8fHwxNzYxODk2MDM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Electric vs Hybrid: Making the Right Choice',
      description: 'Explore the differences between electric and hybrid vehicles to help you make an informed decision for your next car purchase.',
      author: 'James Wilson',
      date: 'March 5, 2024',
      category: 'Car Trends',
      image: 'https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMGNhciUyMGNoYXJnaW5nfGVufDF8fHx8MTc2MTgwOTk1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'How to Extend Your Engine\'s Lifespan',
      description: 'Simple maintenance practices and driving habits that can significantly extend the life of your vehicle\'s engine and save you money.',
      author: 'Michael Rodriguez',
      date: 'February 28, 2024',
      category: 'Engine Care',
      image: 'https://images.unsplash.com/photo-1673909448809-596113853f6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBlbmdpbmUlMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc2MTg5NjAzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Understanding Your Dashboard Warning Lights',
      description: 'A comprehensive guide to what those dashboard warning lights mean and which ones require immediate attention from a professional.',
      author: 'David Chen',
      date: 'February 20, 2024',
      category: 'Safety',
      image: 'https://images.unsplash.com/photo-1677044983562-5bfc4af692e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBkYXNoYm9hcmQlMjB3YXJuaW5nJTIwbGlnaHRzfGVufDF8fHx8MTc2MTg2ODI4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'The Benefits of Regular Tire Rotation',
      description: 'Discover why regular tire rotation is crucial for vehicle safety, performance, and getting the most value from your tire investment.',
      author: 'James Wilson',
      date: 'February 15, 2024',
      category: 'Tire Care',
      image: 'https://images.unsplash.com/photo-1664803857848-12da8f5d1ef5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB0aXJlJTIwcm90YXRpb258ZW58MXx8fHwxNzYxODk2MDM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <div className="pt-32 bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1730453075684-2ad6232ab451?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBtYWludGVuYW5jZSUyMG1lY2hhbmljfGVufDF8fHx8MTc2MTg4NDYwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="inline-block bg-blue-900 px-6 py-2 transform -skew-x-12 mb-6">
            <span className="inline-block transform skew-x-12 uppercase tracking-wide">Automotive Blog</span>
          </div>
          <h1 className="mb-6">
            Expert Tips & Insights
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Maintenance guides, and the latest trends in automotive care
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Featured Image */}
            <div className="relative group overflow-hidden rounded-lg">
              <div className="relative h-[500px] overflow-hidden rounded-lg shadow-2xl">
                <ImageWithFallback
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-6 left-6">
                  <div className="inline-block bg-blue-900 px-4 py-2 transform -skew-x-12">
                    <span className="inline-block transform skew-x-12 text-white text-sm uppercase tracking-wide">
                      {featuredArticle.tag}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Content */}
            <div>
              <h2 className="mb-6 text-black">
                {featuredArticle.title}
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                {featuredArticle.description}
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-6 mb-8 text-gray-500">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-blue-900" />
                  <span>{featuredArticle.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-blue-900" />
                  <span>{featuredArticle.date}</span>
                </div>
              </div>

              {/* Read More Button */}
              <button className="relative group">
                <div className="relative h-14 px-10 flex items-center justify-center cursor-pointer">
                  <div className="absolute inset-0 bg-blue-900 group-hover:bg-blue-800 transition-colors transform -skew-x-12"></div>
                  <span className="relative z-10 text-white uppercase tracking-wide flex items-center gap-2">
                    Read More
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-900 px-6 py-2 transform -skew-x-12 mb-6">
              <span className="inline-block transform skew-x-12 uppercase tracking-wide text-white">Latest Articles</span>
            </div>
            <h2 className="mb-4 text-black">
              Stay Informed With Our Expert Insights
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <article key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group">
                {/* Article Image */}
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="inline-block bg-blue-900 px-3 py-1 transform -skew-x-12">
                      <span className="inline-block transform skew-x-12 text-white text-xs uppercase tracking-wide">
                        {article.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6">
                  <h3 className="mb-3 text-black line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                  </div>

                  {/* Read Article Button */}
                  <button className="relative w-full group/btn">
                    <div className="relative h-10 flex items-center justify-center cursor-pointer">
                      <div className="absolute inset-0 bg-blue-900 group-hover/btn:bg-blue-800 transition-colors transform -skew-x-12"></div>
                      <span className="relative z-10 text-white text-sm uppercase tracking-wide flex items-center gap-2">
                        Read Article
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block bg-blue-900 px-6 py-2 transform -skew-x-12 mb-6">
            <span className="inline-block transform skew-x-12 uppercase tracking-wide">Subscribe to Our Newsletter</span>
          </div>
          <h2 className="mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest automotive tips, maintenance guides, and special offers delivered to your inbox.
          </p>

          {/* Email Subscription Form */}
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full h-14 pl-12 pr-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-900 transition-colors"
              />
            </div>
            <button 
              type="submit"
              className="relative group"
            >
              <div className="relative h-14 px-10 flex items-center justify-center cursor-pointer whitespace-nowrap">
                <div className="absolute inset-0 bg-blue-900 group-hover:bg-blue-800 transition-colors transform -skew-x-12"></div>
                <span className="relative z-10 text-white uppercase tracking-wide">
                  Subscribe
                </span>
              </div>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default BlogPage;

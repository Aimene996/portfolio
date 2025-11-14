'use client';

import { useState } from 'react';
import SocialIcons, { 
  FacebookIcon, 
  LinkedInIcon,
  GitHubIcon,
  WhatsAppIcon
} from './SocialIcons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your form handling logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialIcons = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/aimene-harbi-086a2b206/',
      icon: <LinkedInIcon className="w-5 h-5 text-blue-600" />,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/Aimene996',
      icon: <GitHubIcon className="w-5 h-5 text-gray-800" />,
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/ai.mene.610466/',
      icon: <FacebookIcon className="w-5 h-5 text-blue-600" />,
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/213553446255',
      icon: <WhatsAppIcon className="w-5 h-5 text-green-600" />,
    },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-slate-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-slate-100 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-[#FF6B9D] mx-auto"></div>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-[#FF6B9D] focus:border-transparent outline-none bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-100 placeholder-gray-500 dark:placeholder-slate-400 transition-colors duration-200"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-[#FF6B9D] focus:border-transparent outline-none bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-100 placeholder-gray-500 dark:placeholder-slate-400 transition-colors duration-200"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-[#FF6B9D] focus:border-transparent outline-none resize-none bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-100 placeholder-gray-500 dark:placeholder-slate-400 transition-colors duration-200"
                placeholder="Your message here..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#FF6B9D] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold 
                        hover:bg-[#FF5A8A] transition-colors shadow-lg hover:shadow-xl 
                        transform hover:scale-105 duration-200 text-sm sm:text-base"
            >
              Send Message
            </button>
          </form>

          <div className="mt-8 sm:mt-12 text-center">
            <p className="text-gray-600 dark:text-slate-400 mb-4">Or connect with me on social media</p>
            <SocialIcons icons={socialIcons} size="medium" className="justify-center" />
            <div className="mt-4 sm:mt-6">
              <p className="text-gray-600 dark:text-slate-400 mb-2 text-sm sm:text-base">
                WhatsApp: <a href="https://wa.me/213553446255" className="text-[#FF6B9D] font-semibold hover:underline dark:hover:text-[#FF5A8A] transition-colors">+213 553 446 255</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


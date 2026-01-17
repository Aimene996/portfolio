'use client';

import { useState, useRef } from 'react';
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check honeypot field - if filled, it's likely spam
    const honeypot = (e.target as HTMLFormElement).querySelector('input[name="_website"]') as HTMLInputElement;
    if (honeypot && honeypot.value) {
      setSubmitStatus({
        type: 'error',
        message: 'Spam detected. Please try again.',
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    // Submit form to FormSubmit
    if (formRef.current) {
      // Create a FormData object
      const formDataObj = new FormData(formRef.current);
      
      try {
        const response = await fetch('https://formsubmit.co/aimeneharbi@gmail.com', {
          method: 'POST',
          body: formDataObj,
        });

        if (response.ok) {
          setSubmitStatus({
            type: 'success',
            message: 'Message sent successfully! I\'ll get back to you soon.',
          });
          // Reset form
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        } else {
          setSubmitStatus({
            type: 'error',
            message: 'Failed to send message. Please try again.',
          });
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        setSubmitStatus({
          type: 'error',
          message: 'Network error. Please check your connection and try again.',
        });
      } finally {
        setIsSubmitting(false);
      }
    }
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
      icon: <GitHubIcon className="w-5 h-5 text-gray-800 dark:text-slate-200" />,
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
          <div className="w-24 h-1 bg-[#FF6B9D] mx-auto mb-4"></div>
          <p className="text-sm sm:text-base text-gray-600 dark:text-slate-400 max-w-2xl mx-auto">
            I typically respond within 24 hours. Free consultation for new projects.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Success/Error Messages */}
          {submitStatus.type && submitStatus.message && (
            <div
              key={`status-${submitStatus.type}`}
              className={`mb-6 p-4 rounded-lg ${
                submitStatus.type === 'success'
                  ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200'
                  : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200'
              }`}
            >
              <div className="flex items-center">
                {submitStatus.type === 'success' ? (
                  <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                )}
                <p className="text-sm font-medium">{submitStatus.message}</p>
              </div>
            </div>
          )}

          <form ref={formRef} onSubmit={handleSubmit} method="POST" action="https://formsubmit.co/aimeneharbi@gmail.com" className="space-y-4 sm:space-y-6">
            {/* FormSubmit Configuration Fields */}
            <input type="hidden" name="_subject" value="New Contact Form Message from Portfolio" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="box" />
            
            {/* Honeypot field - hidden from users, visible to bots */}
            <input
              type="text"
              name="_website"
              tabIndex={-1}
              autoComplete="off"
              style={{ position: 'absolute', left: '-9999px' }}
              aria-hidden="true"
            />

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
              disabled={isSubmitting}
              className={`w-full bg-[#FF6B9D] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold 
                        hover:bg-[#FF5A8A] transition-colors shadow-lg hover:shadow-xl 
                        transform hover:scale-105 duration-200 text-sm sm:text-base
                        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
                        flex items-center justify-center`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
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


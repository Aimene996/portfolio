export interface Project {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  images: string[];
  thumbnail: string;
  link?: string;
  githubLink?: string;
  tags: string[];
  features?: string[];
  technologies?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'GravityPhone - POS & Store Management Platform',
    shortDescription: 'A comprehensive cloud-based platform for phone and electronics stores — Point of Sale, inventory management, repairs tracking, supplier management, and real-time analytics.',
    fullDescription: 'GravityPhone is a full-featured cloud platform designed specifically for phone and electronics retail stores. It provides an all-in-one solution for managing daily operations including point-of-sale transactions, stock and inventory management, device repair tracking, supplier orders, and detailed business analytics. Built with Next.js and modern web technologies, the platform delivers a sleek dark-themed interface with real-time data synchronization, multi-store support, and comprehensive reporting dashboards. The system handles everything from barcode scanning and receipt generation to employee management and financial reporting.',
    thumbnail: '/gravityphone-1.png',
    images: [
      '/gravityphone-1.png',
    ],
    link: 'https://gravityphone.vercel.app/',
    githubLink: 'https://github.com/Aimene996',
    tags: ['Next.js', 'TypeScript', 'Cloud POS', 'SaaS', 'Analytics', 'Inventory'],
    features: [
      'Point of Sale (POS) System',
      'Stock & Inventory Management',
      'Device Repair Tracking',
      'Supplier Order Management',
      'Real-time Business Analytics',
      'Multi-store Support',
      'Employee Management',
      'Financial Reporting & Dashboards',
      'Barcode Scanning & Receipt Generation',
      'Cloud Data Synchronization'
    ],
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'PostgreSQL',
      'Prisma ORM',
      'REST API',
      'Cloud Deployment',
      'Real-time Updates',
      'Responsive Design'
    ]
  },
  {
    id: 2,
    title: 'CutMatch - Barber Booking Platform',
    shortDescription: 'A modern barber shop booking platform with online appointments, barber portfolios, service management, and a beautiful French/Arabic interface for seamless customer experiences.',
    fullDescription: 'CutMatch is an elegant barber shop booking platform that connects customers with their ideal barbers. The platform features a stunning landing page with service browsing, barber portfolio galleries, and an intuitive appointment booking flow. Customers can explore available services like classic cuts, beard grooming, and fades, view barber profiles with their work samples, and book appointments in just a few clicks. Built with Next.js and Supabase, the platform supports multi-language interfaces (French/Arabic) and provides barbers with a comprehensive dashboard for managing their schedules, services, and client relationships.',
    thumbnail: '/cutmatch-1.png',
    images: [
      '/cutmatch-1.png',
    ],
    link: 'https://cutmatch-xi.vercel.app/fr',
    githubLink: 'https://github.com/Aimene996',
    tags: ['Next.js', 'Supabase', 'Booking System', 'Multi-language', 'Full-stack'],
    features: [
      'Online Appointment Booking',
      'Barber Portfolio Galleries',
      'Service Browsing & Selection',
      'Multi-language Support (FR/AR)',
      'Customer Reviews & Ratings',
      'Schedule Management Dashboard',
      'Real-time Availability Updates',
      'Client Relationship Management',
      'Responsive Mobile-first Design',
      'Automated Booking Confirmations'
    ],
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Supabase',
      'PostgreSQL',
      'Tailwind CSS',
      'Authentication',
      'Real-time Subscriptions',
      'i18n Internationalization',
      'Responsive Design'
    ]
  },
  {
    id: 3,
    title: 'Watinex - Import & E-commerce Platform',
    shortDescription: 'A professional import company website for Watinex — facilitating e-commerce product imports from China and Dubai to Algeria with sourcing services, 48h Dubai delivery, and full supply chain support.',
    fullDescription: 'Watinex is a modern business website for an import company specializing in e-commerce product sourcing from China and Dubai to Algeria. The platform showcases the company\'s services including product sourcing, 48-hour delivery from Dubai, direct contact support, and custom e-commerce solutions. Built with Next.js and featuring a bilingual Arabic/French interface with full RTL support, the website delivers a premium brand experience with smooth animations, responsive design, and clear service presentation. The site includes WhatsApp integration for instant customer communication, detailed service pages, and a professional company portfolio.',
    thumbnail: '/watinex-1.png',
    images: [
      '/watinex-1.png',
    ],
    link: 'https://watinex.vercel.app/',
    githubLink: 'https://github.com/Aimene996',
    tags: ['Next.js', 'TypeScript', 'RTL/Arabic', 'E-commerce', 'Import/Export', 'Bilingual'],
    features: [
      'Product Sourcing from China & Dubai',
      '48h Dubai-to-Algeria Delivery',
      'Bilingual Interface (Arabic/French)',
      'Full RTL Layout Support',
      'WhatsApp Business Integration',
      'Custom E-commerce Solutions',
      '24/7 Support Availability',
      'Supplier Network Management',
      'Professional Service Showcase',
      'Responsive Mobile-first Design'
    ],
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'i18n Internationalization',
      'RTL Support',
      'Responsive Design',
      'WhatsApp API',
      'SEO Optimization',
      'Vercel Deployment'
    ]
  },
  {
    id: 4,
    title: 'PostAI - Facebook Content Management SaaS',
    shortDescription: 'A comprehensive SaaS platform for automating Facebook posting, scheduling, and content management using Flutter, Facebook GraphQL API, Supabase, and ChatGPT integration',
    fullDescription: 'PostAI is a full-featured SaaS application designed to help businesses and content creators automate their Facebook presence. The platform enables users to schedule posts, manage multiple Facebook pages, analyze engagement metrics, and generate AI-powered content using ChatGPT. Built with Flutter for cross-platform mobile support, the app integrates with Facebook GraphQL API for direct posting capabilities, Supabase for backend services, and Riverpod for state management. Features include subscription-based plans, automated scheduling patterns, post analytics, and intelligent content generation.',
    thumbnail: '/postai-dashboard.jpg',
    images: [
      '/postai-dashboard.jpg',
      '/postai-plans.jpg',
      '/postai-schedule.jpg',
      '/postai-publications.jpg',
      '/postai-analytics.jpg',
      '/postai-extra.jpg',
    ],
    link: '#',
    githubLink: 'https://github.com/Aimene996',
    tags: ['Flutter', 'Supabase', 'Facebook GraphQL', 'Riverpod', 'ChatGPT API', 'SaaS'],
    features: [
      'Facebook GraphQL API Integration',
      'Automated Post Scheduling',
      'Multiple Facebook Pages Management',
      'AI Content Generation (ChatGPT)',
      'Subscription Plans (Starter, Pro)',
      'Schedule Patterns (Daily, Weekly, Monthly)',
      'Post Analytics & Engagement Metrics',
      'Publication Management (Published, Scheduled)',
      'Real-time Analytics Dashboard',
      'Content Type Management (Image, Story, Link, Text)'
    ],
    technologies: [
      'Flutter',
      'Dart',
      'Supabase',
      'Riverpod',
      'Facebook GraphQL API',
      'ChatGPT API',
      'REST API',
      'State Management',
      'Local Storage',
      'Image Picker'
    ]
  },
  {
    id: 5,
    title: 'Expenses Chantier - Construction Site Management',
    shortDescription: 'A comprehensive mobile application for managing construction sites, tracking expenses, materials, and project progress using Flutter and modern backend technologies',
    fullDescription: 'Expenses Chantier is a professional construction site management application designed to help construction companies and project managers efficiently track and manage their construction projects. The app provides tools for expense tracking, material inventory management, worker attendance, project timeline tracking, and detailed reporting. Built with Flutter for cross-platform compatibility, the application offers an intuitive interface for on-site use, allowing managers to log expenses in real-time, track material deliveries, monitor project progress, and generate comprehensive reports. The app features offline capabilities for use in areas with limited connectivity, ensuring data is never lost and can be synchronized when internet access is available.',
    thumbnail: '/expenseschantier-1.png',
    images: [
      '/expenseschantier-1.png',
      '/expenseschantier-2.png',
      '/expenseschantier-3.png',
      '/expenseschantier-4.png',
      '/expenseschantier-5.png',
      '/expenseschantier-6.png',
      '/expenseschantier-7.png',
      '/expenseschantier-8.png',
      '/expenseschantier-9.png',
    ],
    link: '#',
    githubLink: 'https://github.com/Aimene996',
    tags: ['Flutter', 'Construction', 'Expense Tracking', 'Project Management', 'Mobile'],
    features: [
      'Construction Site Management',
      'Expense Tracking & Reporting',
      'Material Inventory Management',
      'Worker Attendance Tracking',
      'Project Progress Monitoring',
      'Offline Data Collection',
      'Photo Documentation',
      'Real-time Synchronization',
      'Detailed Analytics & Reports',
      'Multi-site Project Support'
    ],
    technologies: [
      'Flutter',
      'Dart',
      'State Management',
      'Local Database',
      'Image Capture',
      'Offline Storage',
      'Data Synchronization',
      'Report Generation'
    ]
  },
  {
    id: 6,
    title: 'Task Management App',
    shortDescription: 'Productivity app with offline support, built with Flutter and Supabase backend',
    fullDescription: 'A powerful task management application designed to help users organize their work and personal tasks efficiently. The app features offline-first architecture, allowing users to work without internet connectivity. It includes task creation, categorization, due dates, reminders, team collaboration, and data synchronization when online.',
    thumbnail: '/project3.jpg',
    images: [
      '/project3.jpg',
      '/project3-1.jpg',
      '/project3-2.jpg',
      '/project3-3.jpg',
    ],
    link: '#',
    githubLink: 'https://github.com/Aimene996',
    tags: ['Flutter', 'Supabase', 'Offline-first', 'Mobile'],
    features: [
      'Task Management',
      'Offline Support',
      'Team Collaboration',
      'Reminders & Notifications',
      'Data Sync',
      'Categories & Tags'
    ],
    technologies: ['Flutter', 'Supabase', 'SQLite', 'Provider', 'Local Storage', 'Sync Engine']
  },
  {
    id: 7,
    title: 'Stylek - Barber Shop Booking Platform',
    shortDescription: 'A full-stack barber shop booking platform built with Next.js for the web interface, Flutter-based dashboard for administration, and Supabase for authentication, database, and real-time updates.',
    fullDescription: 'Stylek is a comprehensive full-stack barber shop booking platform designed to streamline the appointment booking process for both customers and barbers. The platform features a modern Next.js web interface that enables customers to browse services, explore barber portfolios, and book appointments seamlessly. Barbers can efficiently manage their schedules and reservations through a dedicated Flutter-based dashboard. The system leverages Supabase for robust authentication, database management, and real-time updates, ensuring a responsive and scalable solution. The platform is fully responsive, optimized for performance, and designed to handle high traffic with ease.',
    thumbnail: '/stylek-desktop.png',
    images: [
      '/stylek-desktop.png',
      '/stylek-all-devices.png',
      '/stylek-image-1.png',
      '/stylek-image-2.png',
    ],
    link: 'https://barbersm.vercel.app/',
    githubLink: 'https://github.com/Aimene996',
    tags: ['Next.js', 'Flutter', 'Supabase', 'Full-stack', 'Real-time', 'Booking System'],
    features: [
      'Service Browsing & Portfolio Exploration',
      'Seamless Appointment Booking',
      'Barber Dashboard for Schedule Management',
      'Real-time Reservation Updates',
      'User Authentication & Authorization',
      'Responsive Web Interface',
      'Mobile Dashboard Application',
      'Scalable Architecture',
      'Fast Performance Optimization',
      'Multi-device Support'
    ],
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Flutter',
      'Dart',
      'Supabase',
      'PostgreSQL',
      'Real-time Subscriptions',
      'Authentication',
      'REST API',
      'Responsive Design',
      'State Management'
    ]
  },
  {
    id: 8,
    title: 'Barber Shop - Premium Salon Platform',
    shortDescription: 'A premium barber shop website with online booking, portfolio gallery, events, boutique shop, and a polished French interface for a complete salon experience.',
    fullDescription: 'Barber Shop is a modern salon platform built for premium barbershops. The site invites customers to book appointments, browse a curated portfolio of hair and beard work, discover events, and shop grooming products from an integrated boutique. A clean landing experience highlights the brand story, while filtered portfolio galleries showcase expertise across hair and beard styles. The platform includes user authentication, multi-language support (French), and responsive design optimized for mobile booking flows. Deployed on Vercel for fast global delivery and a reliable production experience.',
    thumbnail: '/efive-1.png',
    images: [
      '/efive-1.png',
    ],
    link: 'https://efive-eight.vercel.app/',
    githubLink: 'https://github.com/Aimene996',
    tags: ['Next.js', 'TypeScript', 'Booking', 'E-commerce', 'French', 'Full-stack'],
    features: [
      'Online Appointment Booking',
      'Portfolio Gallery (Hair & Beard)',
      'Events & Promotions Section',
      'Premium Products Boutique',
      'User Authentication',
      'Multi-language Support (French)',
      'Responsive Mobile-first Design',
      'Location & Contact Information',
      'Service Category Filtering',
      'Vercel Production Deployment'
    ],
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Vercel',
      'Responsive Design',
      'Authentication',
      'i18n Internationalization',
      'SEO Optimization'
    ]
  },
];

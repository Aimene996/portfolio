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
    id: 2,
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
    id: 3,
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
];


import { AiOutlineApi, AiOutlineDatabase, AiOutlineDesktop, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { IService, ITechnology, NavigationItem } from "./interfaces";
import { IoMdNotificationsOutline } from 'react-icons/io';
import { DiMongodb, DiReact } from 'react-icons/di';
import { SiAntdesign, SiExpress, SiMysql, SiPostgresql, SiPrisma, SiSocketdotio, SiTailwindcss } from 'react-icons/si';
import { FaGitAlt } from "react-icons/fa";
import { FaNodeJs, FaVuejs } from 'react-icons/fa';
import { FaGolang } from 'react-icons/fa6';
import { PiMapPinLight } from 'react-icons/pi';

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    label: 'Home',
    value: 'home'
  },
  {
    label: 'Services',
    value: 'services'
  },
  {
    label: 'Skills',
    value: 'skills'
  },
  {
    label: 'Projects',
    value: 'projects'
  },
  {
    label: 'About me',
    value: 'about-me'
  },
  {
    label: 'Contact',
    value: 'contact'
  },
];

export enum SocialLinks {
  LinkedIn = 'https://www.linkedin.com/in/richard-divino-b99136210/',
  Github = 'https://github.com/divino-richard'
}

export const SERVICES: IService[] = [
  {
    icon: AiOutlineDesktop,
    title: 'Front-End Development',
    items: [
      'UI/UX design and implementation.',
      'Building single-page applications (SPA)',
      'Responsive and mobile-first design.',
      'User authentication and session management',
      'Mobile apps cross-platform development'
    ],
  },
  {
    icon: AiOutlineApi,
    title: 'Back-End Development',
    items: [
      'RESTful API design and development',
      'Authentication & Authorization (OAuth, JWT)',
      'Database design, implementation, and optimization',
      'Building microservices architecture',
      'WebSocket and real-time application support'
    ],
  },
  {
    icon: AiOutlineDatabase,
    title: 'Database Management',
    items: [
      'Relational databases',
      'NoSQL databases',
      'Database schema design and data migration',
      'Query optimization and data aggregation'
    ],
  },
  {
    icon: AiOutlineApi,
    title: 'API Integration',
    items: [
      'Integration with third-party APIs (e.g., Payment gateways, Google APIs)',
      'Creating custom APIs for internal or external use',
      'API security practices (rate limiting, API key management)',
    ],
  },
  {
    icon: IoMdNotificationsOutline,
    title: 'Real-time Web Applications',
    items: [
      'Chat applications using WebSockets, Socket.io',
      'Real-time notifications and updates',
      'Live data dashboards',
    ],
  }
]

export const TECHNOLOGIES: ITechnology[] = [
  {
    icon: DiReact,
    name: 'React'
  },
  {
    icon: FaVuejs,
    name: 'Vue'
  },
  {
    icon: SiTailwindcss,
    name: 'Tailwind CSS'
  },
  {
    icon: SiAntdesign,
    name: 'Ant Design'
  },
  {
    icon: FaNodeJs,
    name: 'NodeJS'
  },
  {
    icon: SiExpress,
    name: 'Express.js'
  },
  {
    icon: DiReact,
    name: 'React Native'
  },
  {
    icon: FaGolang,
    name: 'Golang'
  },
  {
    icon: SiPrisma,
    name: 'Prisma ORM'
  },
  {
    icon: DiMongodb,
    name: 'MongoDB'
  },
  {
    icon: SiPostgresql,
    name: 'PostgreSQL'
  },
  {
    icon: SiMysql,
    name: 'MySQL'
  },
  {
    icon: SiSocketdotio,
    name: 'Socket.io'
  },
  {
    icon: FaGitAlt,
    name: 'Git'
  },
]

export const ABOUT_ME = {
  title: 'From Problem Solver to Full-Stack Creator: My Tech Journey',
  paragraphs: [
    "Hi, I’m Richard Divino, a full-stack developer who loves turning abstract ideas into digital realities. My coding journey started with a simple curiosity—how could I build something that lives on the web? From that spark, my passion grew into a full-blown obsession with clean code, dynamic user interfaces, and crafting solutions that are not just functional but a joy to use.",
    "I’m most at home when I’m diving deep into JavaScript frameworks like React, ensuring pixel-perfect front-end experiences, or architecting efficient, scalable backends with Node.js. My work blends creativity with logic, solving problems that make life just a little bit easier—or a lot more fun.",
    "When I’m not writing code, I’m learning new things, staying ahead of tech trends, or tinkering with side projects that push my boundaries. I believe in the power of collaboration and constantly challenge myself to think outside the box. There’s always a new challenge waiting—and I’m here for it.",
    "Whether I’m debugging complex code or designing intuitive user experiences, I bring the same energy: curiosity, precision, and a desire to keep improving. Let’s create something amazing together!"
  ]
}

export const PROJECTS = [
  {
    name: 'Horizon Express Travel Voucher System',
    description: 'The Horizon Express Travel Voucher System is a digital platform designed to streamline and enhance the management, distribution, and redemption of travel vouchers for the Horizon Express network',
    tools: ['ReactJS', 'NodeJS', 'Express JS', 'PostgreSQL with Prisma ORM', 'AWS S3']
  },
  {
    name: 'MWell Dashboard',
    description: 'The MWell Dashboard is a health and wellness monitoring platform designed to provide real-time insights into user activity, wellness scores, and health metrics. This dashboard supports users in tracking progress, setting goals, and accessing personalized wellness information.',
    tools: ['NextJS', 'NodeJS', 'Express JS', 'PostgreSQL with Prisma ORM', 'Shadcn UI']
  }
]

export const MY_EMAIL = 'richarddivino128@gmail.com';

export const CONTACT_ITEMS  = [
    {
      icon: AiOutlineMail,
      text: MY_EMAIL,
      href: `mailto:${MY_EMAIL}`
    },
    {
      icon: AiOutlinePhone,
      text: "+63506866597",
      href: "tel:+63506866597"
    },
    {
      icon: PiMapPinLight,
      text: "Davao City, Philippines",
      href: "https://maps.google.com/?q=Davao+City,+Philippines"
    }
  ];

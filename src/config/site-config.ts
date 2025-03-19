import { Metadata } from 'next';

const TITLE =
  'Rahul Pradhan';
const DESCRIPTION =
  'Hi I am Rahul Pradhan, full stack developer';

const PREVIEW_IMAGE_URL = '/rahul.png';
const PREVIEW_IMAGE_URL_SITE = '/rahulprofile.png';
const ALT_TITLE =
  'Rahul Pradhan';
const BASE_URL = 'https://rahulpradhandev.com';

export const siteConfig: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  icons: {
    icon: '/favicon.ico',
  },
  applicationName: 'Rahul Pradhan Portfilo',
  creator: 'Rahul pradhan',
  twitter: {
    creator: '@Rahulpradhan017',
    title: TITLE,
    description: DESCRIPTION,
    card: 'summary_large_image',
    images: [
      {
        url: PREVIEW_IMAGE_URL_SITE,
        width: 1200,
        height: 630,
        alt: ALT_TITLE,
      },
    ],
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    siteName: 'Rahul Pradhan',
    url: BASE_URL,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: PREVIEW_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: ALT_TITLE,
      },
    ],
  },
  category: 'Technology',
  alternates: {
    canonical: BASE_URL,
  },
  keywords: [
    'Rahul Pradhan Portfolio',
    'Full-Stack Developer Portfolio',
    'Web Developer Portfolio',
    'Software Engineer Portfolio',
    'MERN Stack Developer Portfolio',
    'Cloud Engineer Portfolio',
    'DevOps Engineer Portfolio',
    'AI Developer Portfolio',
    'Open Source Developer',
    'ReactJS Developer',
    'NextJS Developer',
    'JavaScript & TypeScript Developer',
    'Tailwind CSS Developer',
    'Node.js Backend Developer',
    'Express.js & MongoDB Developer',
    'PostgreSQL & SQL Developer',
    'AWS Cloud Engineer',
    'Docker & Kubernetes Engineer',
    'DevOps & CI/CD Expert',
    'Linux & Shell Scripting',
    'Spring Boot & Java Developer',
    'AI & Machine Learning Enthusiast',
    'Rahul pradhan Web Developer',
    'Rahul pradhan Software Engineer',
    'Rahul pradhan GitHub Projects',
    'Rahul pradhan LinkedIn Profile',
    'Rahul pradhan Open Source Contributions',
    'Hire a Full-Stack Developer',
    'Web Developer for Hire',
    'Freelance React Developer',
    'Remote Software Engineer',
    'DevOps Consultant',
    'Live Streaming App Developer',
    'AI Automation Developer',
    'Web3 & Blockchain Developer',
    'Cloud-Native Application Developer',
    'Rahul pradhan',
    'Rahul pradhan dev',
    'Rahul pradhan developer',
    'full stack developer hiring',
    'best full stack developer',
    'full stack developer in bengaluru',
    'full stack developer in bangalore',
    'full stack developer bangalore',
    'full stack developer bengaluru',
    'full stack developer in bangalore',

  ],
  metadataBase: new URL(BASE_URL),
};

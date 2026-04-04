import { Target, Megaphone, Presentation } from 'lucide-react';
import type { ElementType } from 'react';

export interface ServiceData {
  id: string;
  title: string;
  description: string;
  icon: ElementType;
  image: string;
  tags: string[];
}

export const servicesData: ServiceData[] = [
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: "Enhance your brand's visibility with professional digital marketing services like SEO, SEM, Social Media Marketing, and Management. Our result-oriented strategies are designed to expand your online presence across all key platforms.",
    icon: Megaphone,
    image: 'https://www.webrocz.com/wp-content/uploads/2026/02/Digital-Marketing.jpg.jpeg',
    tags: ['Search Engine Marketing', 'Social Media Marketing', 'Search Engine Optimization', 'Social Media Management']
  },
  {
    id: 'web-solutions',
    title: 'Web Solutions',
    description: 'From web design to full e-commerce sites, we offer reliable and user-friendly web services. Our goal is to make your online presence strong, fast, and effective.',
    icon: Target,
    image: 'https://www.webrocz.com/wp-content/uploads/2026/02/Web-Solutions.jpg.jpeg',
    tags: ['Web Designing', 'Web Development', 'E-Commerce Website', 'Custom CMS Websites']
  },
  {
    id: 'branding',
    title: 'Branding',
    description: 'We help you create a brand that tells your story and leaves a lasting impression. From logo to voice, we make your identity clear, consistent, and memorable.',
    icon: Presentation,
    image: 'https://www.webrocz.com/wp-content/uploads/2026/02/Branding.jpg.jpeg',
    tags: ['Unique Identity', 'Clear Brand Voice', 'Consistent Messaging', 'Memorable Design']
  }
];

import { 
  MonitorPlay, Camera, Mic, Newspaper, Users, Smile, Film, GraduationCap, 
  Star, Car, Video, Briefcase, Home, HeartPulse, Wallet, 
  UserCheck, Gamepad2, Music, Headphones, Globe, TrendingUp
} from 'lucide-react';

export const framesData = [
  { 
    id: 'dmc', 
    name: 'DMC', 
    icon: MonitorPlay, 
    image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=600',
    description: 'Dominating the Digital Media Content space with high-impact, channel-agnostic media strategies.',
    fullPara: 'Our Digital Media Content (DMC) frame is the engine behind Viral Post Media\'s multi-channel dominance. We don\'t just create content; we engineer viral distribution. By analyzing cross-platform audience behavior, our DMC strategists build content architectures that bridge the gap between creative storytelling and algorithmic accuracy, ensuring your brand message penetrates even the most crowded digital landscapes.'
  },
  { 
    id: 'visuals', 
    name: 'Photo & Videography', 
    icon: Camera, 
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=600',
    description: 'Cinematic visual storytelling, capturing powerful brand narratives through high-end production.',
    fullPara: 'Visual storytelling is the heartbeat of modern branding. Our elite production team leverages cinema-grade equipment and advanced post-production techniques to transform your vision into an immersive experience. Whether it\'s architectural photography or high-octane commercial videography, we capture the nuances that define your brand\'s premium identity and market presence.'
  },
  { 
    id: 'podcast', 
    name: 'Podcast', 
    icon: Mic, 
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=600',
    description: 'Engaging audio and video podcast series featuring thought-provoking discussions and industry insights.',
    fullPara: 'In an era of high-speed consumption, podcasts offer the luxury of deep attention. We build immersive audio-visual studio environments where ideas take flight. Our podcast frame handles everything from high-fidelity sound engineering to video multi-cam switching, allowing your brand to lead deep industrial conversations and build an loyal community of listeners.'
  },
  { 
    id: 'political-news', 
    name: 'Political News', 
    icon: Newspaper, 
    image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=600',
    description: 'Real-time updates, deep analytical breakdowns, and breaking political coverage globally.',
    fullPara: 'Information is influence. Our Political News frame provides a definitive pulse on global and local governance. We specialize in rapid-response reporting and deep analytical "frames" that break down complex legislation and events into actionable insights for the public, ensuring transparency and informed citizenship through professional digital journalism.'
  },
  { 
    id: 'political-interviews', 
    name: 'Political Interviews', 
    icon: Users, 
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=600',
    description: 'Unfiltered, comprehensive sit-downs with leading political figures and key decision-makers.',
    fullPara: 'Go beyond the soundbite. We engineer high-stakes conversational environments where the most influential political minds share their vision. Our interview formats are designed to be respectful yet rigorous, providing the definitive record of leadership thought and policy intent in a high-quality video production environment.'
  },
  { 
    id: 'pranks', 
    name: 'Prank Videos', 
    icon: Smile, 
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=800',
    description: 'High-energy, viral-ready comedy sketches designed to maximize audience engagement and sharing.',
    fullPara: 'Laughter is the shortest distance between two people. Our Prank and Comedy frame focuses on high-production social experiments and organic humor. We master the art of the "viral hook"—creating moments that are naturally shareable and cross-culturally relevant, driving massive organic engagement and brand visibility through positive entertainment.'
  },
  { 
    id: 'short-films', 
    name: 'Short Films', 
    icon: Film, 
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=600',
    description: 'Award-winning, narrative-driven cinema crafting profound stories in highly compressed formats.',
    fullPara: 'The power of cinema, compressed. Our Short Film frame is a production powerhouse focused on narrative-driven branding. We script, cast, and direct artistic pieces that evoke deep emotion and leave a lasting impression on the audience, proving that powerful storytelling doesn\'t need hours to change a mindset.'
  },
  { 
    id: 'ed-tech', 
    name: 'Education Tech', 
    icon: GraduationCap, 
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=600',
    description: 'Empowering the next generation with cutting-edge tech tutorials and critical digital skills training.',
    fullPara: 'The digital divide is bridged through education. Our Ed-Tech frame produces high-clarity tutorials and comprehensive course modules in AI, engineering, and digital arts. We focus on "skill-acceleration"—delivering complex technical knowledge in digestible, high-engagement video formats for the global learner.'
  },
  { 
    id: 'product-reviews', 
    name: 'Product Reviews', 
    icon: Star, 
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600',
    description: 'Honest, detailed breakdowns and testing of the latest market innovations and tech gadgets.',
    fullPara: 'Consumer trust is our greatest currency. In this frame, we perform rigorous, technical testing of the latest consumer goods. Our reviews go deep into engineering specifications and real-world utility, providing the definitive guide for audiences to make informed purchase decisions in a noisy marketplace.'
  },
  { 
    id: 'vehicle-reviews', 
    name: 'Vehicle Reviews', 
    icon: Car, 
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=600',
    description: 'In-depth automotive analysis covering performance, design engineering, and long-term reliability.',
    fullPara: 'Automotive engineering meets cinematic review. From high-performance supercars to electric commuters, our Vehicle Review frame provides critical analysis of driving dynamics, software integration, and mechanical reliability. We are the definitive visual source for automotive enthusiasts and high-ticket buyers.'
  },
  { 
    id: 'movie-reviews', 
    name: 'Movie Reviews', 
    icon: Video, 
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=800',
    description: 'Critical cinematic breakdowns, box office trend analysis, and spoiler-free recommendations.',
    fullPara: 'We celebrate the art of film through rigorous critique. Our Movie Review frame analyzes screenwriting, cinematography, and cultural impact. We provide our audience with a refined cinematic lens, helping them navigate the world of global cinema with expert-led recommendations and industry insight.'
  },
  { 
    id: 'business', 
    name: 'Business Guru', 
    icon: Briefcase, 
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600',
    description: 'Strategic entrepreneurial masterclasses, modern growth hacking techniques, and leadership insights.',
    fullPara: 'Scaling a business is a science. In our Business Guru frame, we share the strategic blueprints of successful enterprises. We focus on modern growth hacking, venture scalability, and personal leadership, empowering the next generation of founders with actionable executive knowledge.'
  },
  { 
    id: 'home-tips', 
    name: 'Home Tips', 
    icon: Home, 
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600',
    description: 'Practical, innovative lifestyle hacks and smart organization solutions for modern living.',
    fullPara: 'Efficiency begins at home. Our Home Tips frame focuses on smart-living architectures—from innovative organization hacks to DIY technical fixes. we help our audience optimize their physical environment for better mental clarity and daily productivity.'
  },
  { 
    id: 'health', 
    name: 'Health Care', 
    icon: HeartPulse, 
    image: '/images/stethoscope_heart.png',
    description: 'Expert-backed wellness regimens, clinical updates, and holistic physical guidance.',
    fullPara: 'Vitality is the ultimate asset. In our Health Care frame, we translate complex clinical research and wellness methodologies into digestible, expert-led guidance. We focus on holistic physical health and preventative regimens that help our audience maintain peak performance in their personal and professional lives.'
  },
  { 
    id: 'finance', 
    name: 'Savings & Financial', 
    icon: Wallet, 
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=600',
    description: 'Actionable wealth-building strategies, investment methodologies, and market trend forecasts.',
    fullPara: 'Financial freedom is engineered through strategy. Our Finance frame demystifies the world of capital—from stock market analysis to modern savings architectures. We provide the technical knowledge and trend forecasts required to navigate global economic landscapes and build generational wealth.'
  },
  { 
    id: 'personal-branding', 
    name: 'Personal Branding', 
    icon: UserCheck, 
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600',
    description: 'Techniques for thought leaders to elevate their individual digital identity and global authority.',
    fullPara: 'You are the most powerful asset you own. Our Personal Branding frame is a specialized consultancy for thought leaders and CEOs. We engineer your digital identity—crafting your narrative, visual authority, and distribution strategy to ensure you become the definitive voice in your industry.'
  },
  { 
    id: 'games', 
    name: 'Home Games', 
    icon: Gamepad2, 
    image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?auto=format&fit=crop&q=80&w=800',
    description: 'Fun, highly interactive localized game formats and engaging community-driven challenges.',
    fullPara: 'Play is essential to community. Our Home Games frame creates highly interactive, localized gaming formats that bring families and digital communities together. We focus on "gamified engagement"—building social challenges and formats that are naturally addictive and positive.'
  },
  { 
    id: 'lyrics', 
    name: 'Lyrical Video Songs', 
    icon: Music, 
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=600',
    description: 'Beautifully crafted typographic music videos enhancing the auditory storytelling experience.',
    fullPara: 'Music seen through typography. Our Lyrical Video frame focuses on the visual representation of sound. We use advanced motion graphics and typographic design to enhance the poetic layer of musical compositions, creating a mesmerizing visual-audio synergy.'
  },
  { 
    id: 'covers', 
    name: 'Folk & Cover Songs', 
    icon: Headphones, 
    image: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?auto=format&fit=crop&q=80&w=600',
    description: 'A massive platform celebrating raw musical talent, acoustic renditions, and deep cultural heritage.',
    fullPara: 'Authenticity is timeless. In our Folk & Cover frame, we provide a high-end production stage for raw musical talent. We focus on preserving cultural heritage through high-fidelity recordings and cinematic acoustic videos, bridging the gap between traditional music and modern digital audiences.'
  },
  { 
    id: 'current-affairs', 
    name: 'Current Affairs', 
    icon: Globe, 
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=600',
    description: 'Daily global briefings ensuring audiences stay informed on the most critical socio-economic events.',
    fullPara: 'Perspective on a global scale. Our Current Affairs frame provides daily analytical briefings on the events shaping our world. We go beyond the "what" to explain the "why"—providing the deep socio-economic context required to understand global shifts and trends.'
  },
  { 
    id: 'influencer', 
    name: 'Influence Marketing', 
    icon: TrendingUp, 
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=600',
    description: 'Bridging the definitive gap between powerful creators and enterprise brands for explosive ROI.',
    fullPara: 'Influence is the new currency. In our Influence Marketing frame, we act as the strategic bridge between high-impact creators and elite enterprise brands. We engineer partnerships focused on ROI, brand alignment, and authentic distribution, ensuring that every collaboration is a definitive market success.'
  }
];

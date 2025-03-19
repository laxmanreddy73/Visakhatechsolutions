import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import {
  Building2, Target, Users, ChevronRight, ChevronLeft, Award,
  Trophy, Briefcase, Wrench, Cpu, PenTool as Tool,
  Settings, Shield, Truck, Play
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper as SwiperType } from 'swiper';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Helmet } from 'react-helmet';

const particlesInit = async (engine) => {
  await loadFull(engine);
};

const particlesLoaded = async (container) => {
  console.log("Particles loaded:", container);
};

// Data for alliances, services, work, and stats
const alliances = [
  {
    name: 'DLRL Hyderabad',
    image: 'https://www.drdo.gov.in/drdo/sites/default/files/subsite_banner_image/dlrl_internet_content_html_9b982ca707fcf3d2.jpg',
  },
  {
    name: 'Hindustan Shipyard Ltd.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/55/What_is_Shipyard.jpg',
  },
  {
    name: 'Naval Dockyard (V)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Naval_dockyard_Entrance.jpg/800px-Naval_dockyard_Entrance.jpg',
  },
  {
    name: 'NSRY Cochin',
    image: 'https://cochinshipyard.in/uploads/gallery/7b58a64c022b91acc20a6970102fd3f7.jpg',
  },
  {
  name: 'Garden Reach Shipbuilders & Engineers',
    image: 'https://scontent.fvtz1-2.fna.fbcdn.net/v/t1.6435-9/131388010_3442106059244742_650063946177807214_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=o1DcHIlfVzoQ7kNvgHcjp37&_nc_oc=AdjaiIrJuJR3hN-yjtWAVpf1kdWsIwVpW5I7ejxJmioEBDtPubocfnrdjjJmaMX46bdvutYmjSuZFlBcp32WPunA&_nc_zt=23&_nc_ht=scontent.fvtz1-2.fna&_nc_gid=Aq9D_PnI3810ah-E99XwEeh&oh=00_AYGawDXXxEJxyMfnrmS5-3XxfLaZXmXfi_hu1p7RIX06Kw&oe=67F4BB47',
  },
  {
    name: 'Larsen & Toubro',
    image: 'https://www.ltts.com/sites/default/files/2024-12/Mysore.webp',
  },
  {
    name: 'Goa Shipyard Limited',
    image: 'https://images.moneycontrol.com/static-mcnews/2022/03/Container-Cargo-ship-with-working-crane-in-shipyard-770x433.png?impolicy=website&width=770&height=431',
  },
  {
    name: 'Solas Marine Services',
    image: 'https://solasmarine.com/wp-content/uploads/2020/12/Solas-About-us-Banner-Image-e1603711087343.jpg',
  },
];

const services = [
  {
    icon: Wrench,
    title: 'Electrical Consultancy',
    description: 'Expert guidance for efficient and safe electrical systems, including layout design, load analysis, and compliance.',
    features: [
      'Load analysis and system design',
      'Compliance with standards',
      'Custom solutions for projects',
      'Energy cost optimization',
    ],
  },
  {
    icon: Tool,
    title: 'Turnkey Projects',
    description: 'End-to-end solutions for electrical, fabrication, and welding projects, ensuring quality and on-time delivery.',
    features: [
      'Complete project management',
      'High-quality fabrication',
      'Electrical system integration',
      'Timely delivery with cost control',
    ],
  },
  {
    icon: Settings,
    title: 'Maintenance',
    description: 'Reliable AMC services with 24/7 support to ensure system longevity and minimal downtime.',
    features: [
      'Comprehensive AMC',
      '24/7 breakdown support',
      'Preventive maintenance',
      'Certified technicians',
    ],
  },
  {
    icon: Truck,
    title: 'Supply Chain',
    description: 'Supply of premium electrical equipment with timely delivery and adherence to industry standards.',
    features: [
      'Quality electrical equipment',
      'Trusted manufacturers',
      'Wide product range',
      'Custom bulk solutions',
    ],
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'ISO-certified processes ensuring reliable, safe, and top-quality products and services.',
    features: [
      'ISO 9001:2015 certified',
      'Rigorous quality checks',
      'Safety compliance',
      'Dedicated QA team',
    ],
  },
  {
    icon: Cpu,
    title: 'Automation',
    description: 'Advanced automation solutions for improved efficiency, seamless operations, and cost reduction.',
    features: [
      'Custom system design',
      'Integration with infrastructure',
      'Tech upgrades',
      'Enhanced monitoring',
    ],
  },
];

const work = [
  {
    name: '',
    image: 'https://i.postimg.cc/5tttzHQZ/Whats-App-Image-2025-03-09-at-11-00-38-AM.jpg',
  },
  {
    name: '',
    image: 'https://i.postimg.cc/sXzqhq70/Whats-App-Image-2025-01-10-at-12-07-21-PM.jpg',
  },
  {
    name: '',
    image: 'https://i.postimg.cc/pdrgLFNc/Whats-App-Image-2025-01-10-at-12-08-04-PM.jpg',
  },
  {
    name: '',
    image: 'https://i.postimg.cc/1X8t0tNv/Whats-App-Image-2025-01-10-at-12-07-19-PM.jpg',
  },
  {
    name: '',
    image: 'https://i.postimg.cc/MHPTnyMX/Whats-App-Image-2025-01-10-at-12-08-02-PM.jpg',
  },
  {
    name: '',
    image: 'https://i.postimg.cc/L6hgcb8c/Whats-App-Image-2025-03-09-at-11-00-39-AM-1.jpg',
  },
  {
    name: '',
    image: 'https://i.postimg.cc/0QJHXfJD/portrait-man-working-as-engineer-23-2151229981.jpg',
  },
  {
    name: '',
    image: 'https://i.postimg.cc/j2TXc8yt/Whats-App-Image-2025-03-11-at-2-30-21-AM.jpg',
  },
];

const stats = [
  {
    icon: Trophy,
    number: 6,
    label: 'Happy Clients',
    description: 'Leading companies trust our expertise and innovative solutions',
  },
  {
    icon: Building2,
    number: 1,
    label: 'Branch Office',
    description: 'Strategic location serving our growing client base',
  },
  {
    icon: Briefcase,
    number: 6,
    label: 'Major Projects',
    description: 'Successfully delivered transformative solutions',
  },
  {
    icon: Users,
    number: 120,
    label: 'Manpower Count',
    description: 'Comprising top engineers driving innovation and excellence',
  },
];

const partners = [
  {
    name: 'DLRL Hyderabad',
    logo: 'https://i.postimg.cc/t4K1pLsK/Adobe-Express-file-5.png',
  },
  {
    name: 'Hindustan Shipyard Ltd.',
    logo: 'https://i.postimg.cc/L8qyrppj/Adobe-Express-file.png',
  },
  {
    name: 'Naval Dockyard (V)',
    logo: 'https://i.postimg.cc/NjxGL4x0/ministry-of-defence-naval-dockyard-naval-base-visakhapatnam-visakhapatnam-government-organisations-0.png',
  },
  {
    name: 'NSRY Cochin',
    logo: 'https://i.postimg.cc/250VvP1X/Cochin-Shipyard-SVG-Logo-svg.png',
  },
  {
    name: 'Garden Reach Shipbuilders & Engineers',
    logo: 'https://i.postimg.cc/vB2ZKfMY/Adobe-Express-file-2.png',
  },
  {
    name: 'Larsen & Toubro',
    logo: 'https://i.postimg.cc/j5WdfC0L/Adobe-Express-file-4.png',
  },
  {
    name: 'Goa Shipyard Limited',
    logo: 'https://i.postimg.cc/T1HQh76z/Adobe-Express-file-1.png',
  },
  {
    name: 'Solas Marine Services',
    logo: 'https://solasmarine.com/wp-content/uploads/2020/09/Solas-New-Logo-with-Colour-Code-1.png',
  },
];


// StatCard Component
const StatCard = ({
  icon: Icon,
  number,
  label,
  description,
  delay,
}: {
  icon: React.ElementType;
  number: number;
  label: string;
  description: string;
  delay: number;
}) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
    rootMargin: '-50px 0px',
  });

  useEffect(() => {
    let animationFrame: number;

    if (inView) {
      const startTime = performance.now();
      const duration = 2000;

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const easeOutQuad = (t: number) => t * (2 - t);
        const easedProgress = easeOutQuad(progress);

        setCount(Math.floor(easedProgress * number));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
    } else {
      setCount(0);
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [inView, number]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      className="relative group"
    >
      <div className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg transform transition-all duration-300 hover:translate-y-[-10px] hover:shadow-xl border border-gray-100">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-teal-600 to-cyan-500 rounded-t-2xl"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-teal-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative">
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5, delay: delay + 0.2 }}
            className="p-4 rounded-full bg-gradient-to-br from-blue-100 to-teal-100 mb-6 group-hover:scale-110 transform transition-transform duration-300"
          >
            <Icon className="w-8 h-8 text-blue-600" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: delay + 0.4 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: delay + 0.6 }}
              className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-3"
            >
              {count}+
            </motion.div>
            <div className="text-xl font-semibold text-gray-800 mb-3">{label}</div>
            <div className="text-sm text-gray-600 text-center max-w-[200px]">{description}</div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

// Home Component
export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const videoRef = useRef<HTMLVideoElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  // Mouse-following gradient effect
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Parallax effect for video section
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div>
      <Helmet>
  {/* General Meta Tags */}
  <title>Visakhatech Solutions | Top Electro-Mechanical & Automation Experts in Visakhapatnam</title>
  <meta name="description" content="Visakhatech Solutions: ISO 9001:2015 certified leaders in electro-mechanical, electrical consultancy, and automation solutions in Visakhapatnam. Trusted by industry giants for innovative, reliable, and cost-effective tech solutions. Contact us today!" />
  <meta name="keywords" content="Visakhatech Solutions, VisakhatechSolutions, Visakha Tech Solutions, Visakhapatnam Tech Solutions, VisakhapatnamTechSolutions, Vizag Tech Solutions, VizagTechSolutions, Electro-Mechanical Solutions Visakhapatnam, Electrical Consultancy Vizag, Automation Solutions Visakhapatnam, Turnkey Projects Vizag, Industrial Maintenance Visakhapatnam, Tech Solutions in Visakhapatnam, Tech Solutions in Vizag, Visakhatech Solutions Contact, Visakhatech Solutions Reviews, Visakhatech Solutions Projects, Visakhatech Solutions Services, Visakhatech Solutions Careers" />
  <meta name="author" content="Visakhatech Solutions" />
  <meta name="robots" content="index, follow" />
  <meta name="revisit-after" content="7 days" />
  <meta name="language" content="English" />
  <meta name="geo.region" content="IN-AP" />
  <meta name="geo.placename" content="Visakhapatnam" />

  {/* Open Graph Tags */}
  <meta property="og:title" content="Visakhatech Solutions | Top Electro-Mechanical & Automation Experts in Visakhapatnam" />
  <meta property="og:description" content="Visakhatech Solutions: ISO 9001:2015 certified leaders in electro-mechanical, electrical consultancy, and automation solutions in Visakhapatnam. Trusted by industry giants for innovative, reliable, and cost-effective tech solutions. Contact us today!" />
  <meta property="og:image" content="https://visakhatechsolutions.com/logo.png" />
  <meta property="og:url" content="https://visakhatechsolutions.com" />
  <meta property="og:type" content="website" />

  {/* Twitter Card Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Visakhatech Solutions | Top Electro-Mechanical & Automation Experts in Visakhapatnam" />
  <meta name="twitter:description" content="Visakhatech Solutions: ISO 9001:2015 certified leaders in electro-mechanical, electrical consultancy, and automation solutions in Visakhapatnam. Trusted by industry giants for innovative, reliable, and cost-effective tech solutions. Contact us today!" />
  <meta name="twitter:image" content="https://visakhatechsolutions.com/logo.png" />

  {/* Canonical URL */}
  <link rel="canonical" href="https://visakhatechsolutions.com" />

  {/* Structured Data (Schema Markup) */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Visakhatech Solutions",
        "url": "https://visakhatechsolutions.com",
        "logo": "https://visakhatechsolutions.com/logo.png",
        "description": "Visakhatech Solutions offers ISO 9001:2015 certified electro-mechanical, electrical consultancy, and automation solutions in Visakhapatnam (Vizag).",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Your Street Address",
          "addressLocality": "Visakhapatnam",
          "postalCode": "530001",
          "addressCountry": "India"
        },
        "telephone": "+91-1234567890",
        "sameAs": [
          "https://facebook.com/visakhatechsolutions",
          "https://linkedin.com/company/visakhatechsolutions",
          "https://twitter.com/visakhatechsolutions",
          "https://instagram.com/visakhatechsolutions"
        ],
        "service": [
          {
            "@type": "Service",
            "name": "Electrical Consultancy",
            "description": "Expert guidance for efficient and safe electrical systems, including layout design, load analysis, and compliance.",
            "serviceType": "Electrical Consultancy",
            "offers": {
              "@type": "Offer",
              "itemOffered": [
                "Load analysis and system design",
                "Compliance with standards",
                "Custom solutions for projects",
                "Energy cost optimization"
              ]
            }
          },
          {
            "@type": "Service",
            "name": "Turnkey Projects",
            "description": "End-to-end solutions for electrical, fabrication, and welding projects, ensuring quality and on-time delivery.",
            "serviceType": "Turnkey Projects",
            "offers": {
              "@type": "Offer",
              "itemOffered": [
                "Complete project management",
                "High-quality fabrication",
                "Electrical system integration",
                "Timely delivery with cost control"
              ]
            }
          },
          {
            "@type": "Service",
            "name": "Maintenance",
            "description": "Reliable AMC services with 24/7 support to ensure system longevity and minimal downtime.",
            "serviceType": "Maintenance",
            "offers": {
              "@type": "Offer",
              "itemOffered": [
                "Comprehensive AMC",
                "24/7 breakdown support",
                "Preventive maintenance",
                "Certified technicians"
              ]
            }
          },
          {
            "@type": "Service",
            "name": "Supply Chain",
            "description": "Supply of premium electrical equipment with timely delivery and adherence to industry standards.",
            "serviceType": "Supply Chain",
            "offers": {
              "@type": "Offer",
              "itemOffered": [
                "Quality electrical equipment",
                "Trusted manufacturers",
                "Wide product range",
                "Custom bulk solutions"
              ]
            }
          },
          {
            "@type": "Service",
            "name": "Quality Assurance",
            "description": "ISO-certified processes ensuring reliable, safe, and top-quality products and services.",
            "serviceType": "Quality Assurance",
            "offers": {
              "@type": "Offer",
              "itemOffered": [
                "ISO 9001:2015 certified",
                "Rigorous quality checks",
                "Safety compliance",
                "Dedicated QA team"
              ]
            }
          },
          {
            "@type": "Service",
            "name": "Automation",
            "description": "Advanced automation solutions for improved efficiency, seamless operations, and cost reduction.",
            "serviceType": "Automation",
            "offers": {
              "@type": "Offer",
              "itemOffered": [
                "Custom system design",
                "Integration with infrastructure",
                "Tech upgrades",
                "Enhanced monitoring"
              ]
            }
          }
        ],
        "hasPart": [
          {
            "@type": "WebPage",
            "name": "About Us",
            "url": "https://visakhatechsolutions.com/about",
            "description": "Learn more about Visakhatech Solutions, our mission, vision, and values."
          },
          {
            "@type": "WebPage",
            "name": "Projects",
            "url": "https://visakhatechsolutions.com/projects",
            "description": "Explore our portfolio of innovative and impactful projects."
          },
          {
            "@type": "WebPage",
            "name": "Contact Us",
            "url": "https://visakhatechsolutions.com/contact",
            "description": "Get in touch with Visakhatech Solutions for inquiries and collaborations."
          }
        ]
      }
    `}
  </script>

  {/* Local Business Schema */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Visakhatech Solutions",
        "image": "https://visakhatechsolutions.com/logo.png",
        "description": "Visakhatech Solutions offers ISO 9001:2015 certified electro-mechanical, electrical consultancy, and automation solutions in Visakhapatnam (Vizag).",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Your Street Address",
          "addressLocality": "Visakhapatnam",
          "postalCode": "530001",
          "addressCountry": "India"
        },
        "telephone": "+91-1234567890",
        "openingHours": "Mo-Fr 09:00-18:00",
        "priceRange": "$$$",
        "sameAs": [
          "https://facebook.com/visakhatechsolutions",
          "https://linkedin.com/company/visakhatechsolutions",
          "https://twitter.com/visakhatechsolutions",
          "https://instagram.com/visakhatechsolutions"
        ]
      }
    `}
  </script>

  {/* Multilingual Support */}
  <link rel="alternate" hrefLang="en" href="https://visakhatechsolutions.com" />
  <link rel="alternate" hrefLang="hi" href="https://visakhatechsolutions.com/hi" />
  <link rel="alternate" hrefLang="te" href="https://visakhatechsolutions.com/te" />

  {/* Favicon */}
  <link rel="icon" type="image/png" href="https://visakhatechsolutions.com/favicon.png" />
  <link rel="apple-touch-icon" href="https://visakhatechsolutions.com/apple-touch-icon.png" />

  {/* Preconnect and Preload Critical Resources */}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
  <link rel="preload" as="image" href="https://visakhatechsolutions.com/hero.webp" />
</Helmet>
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://media-hosting.imagekit.io//b150256a03df4b82/23759-337232393.mp4?Expires=1832261161&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=LWiMjePD75DAH9oC1mfG1jDeAfbxUQucKGwU~7Tif2J1-kfMSXtDNE9fXq3U8gDayxFNKcPdnyli1Mhn-Vafx9AN6EhlwRyEf8~Jq0wy9V7ritjcbBXnCO7TzIYCEaj8O6noC~qBS~d5vU8wJiYaUwL5Nf2tF3T-cg41u3yRldVnLfoSFYBXkcwDaCF5AOEbkKPmQ3GY5D3gayJln4vaDrY-gC8IpIZuuoghvH25nWlbNpe7SYTSDezUEhsDvY322bCpDRTTJqwXqGxgIkN2UemQwQXL~Okl8Q9kWX6Npty8MpEPMWqkclgx1GdKabpMjgYHwhM~Qi8~gW~hA-lF2Q__"
            type="video/mp4"
          />
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20" />

        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl text-white text-center md:text-left"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent"
              >
                Leading Electro-Mechanical Solutions
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl mb-8 text-gray-200"
              >
                ISO 9001:2015 Certified Company delivering excellence in engineering
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg text-gray-300"
              >
                Trusted by industry leaders for innovative and reliable solutions.
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Floating Glow Effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-blue-500 rounded-full blur-3xl opacity-20 animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-teal-500 rounded-full blur-3xl opacity-20 animate-float-delay"></div>
        </div>
      </section>

     {/* Company Snapshot Section */}
<section
  className="py-20 bg-gradient-to-b from-[#0c0118] to-[#1a1a2e] text-white relative overflow-hidden"
  onMouseMove={handleMouseMove}
>
  {/* Background Texture */}
  <div className="absolute inset-0 bg-texture opacity-10 pointer-events-none"></div>

  {/* Mouse-following gradient overlay */}
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 80%)`,
    }}
  ></div>

  <div className="container mx-auto px-6 relative z-10">
    {/* Section Header */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
        Company Snapshot
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto">
        Discover the foundation of our success and the values that drive us forward.
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Left Column: Company Details */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        {[
          {
            icon: Award,
            title: 'Founder: Kusumuru Manideep',
            description: 'Leader committed to global quality standards and customer satisfaction.',
          },
          {
            icon: Building2,
            title: 'Founded: 2023-2024',
            description: 'ISO 9001:2015 Certified Company with a focus on operational excellence.',
          },
          {
            icon: Target,
            title: 'Annual Turnover: ₹4-5 Cr',
            description: 'Achieving consistent growth through innovative solutions.',
          },
          {
            icon: Users,
            title: 'Business Type',
            description: 'Leading Electro-Mechanical Consultants, Engineers & Contractors.',
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex items-start space-x-4 p-6 rounded-xl bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg backdrop-blur-sm"
          >
            <div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full">
              <item.icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-100 hover:text-blue-400 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Right Column: Video Section */}
<motion.div
  initial={{ opacity: 0, x: 20 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="rounded-xl overflow-hidden shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 relative"
  style={{ y: parallaxY }} // Apply parallax effect
>
  <div className="relative w-full h-0 pb-[85%] sm:pb-[80%] md:pb-[55%] lg:pb-[50%] xl:pb-[45%]">
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover rounded-lg transform transition-transform duration-500 hover:scale-105"
    >
      <source src="https://media-hosting.imagekit.io//29542322986d43ad/11336220-uhd_3840_2160_30fps.mp4?Expires=1836330450&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=qTKVqirEAU6PukujKj-dpzPTpcKfgHDA9ggwVCFo5gSinLfczC~Uv13Wf5LfFfq6waW4oE7B9jh9GTMfb0VBb-qoKZWXrFsXH~VY1JMYUu9I-22dtRH7JFiHdLTg0hDS8iCTBvqmzHDcAMdD6Out4gMz7RtI~t6G9uUsvXNN-Dxyojmd6D31PnZwGCURSfT3FmdbHPJ9VBAz21f2R371sfvoewyXRbWwWkyuujCFx6ugksr5LkXYCm5xbYbVjokxqw4tz7b91gjbj0OrO8~SwdgwCLnKB3uKbpTe7ICKEVS3nZPkDPWRnS-esUoEb9tWxuxyWXKtGRFMMQjha4BCCQ__" />
      Your browser does not support the video tag.
    </video>
    {/* Gradient overlay for video */}
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
  </div>
</motion.div>
    </div>
  </div>

  {/* Floating glow effects */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-blue-500 rounded-full blur-3xl opacity-20 animate-float"></div>
    <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-cyan-500 rounded-full blur-3xl opacity-20 animate-float-delay"></div>
  </div>
</section>
{/* Alliances Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Alliances</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {alliances.map((alliance, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl shadow-lg"
              >
                <div className="aspect-square">
                  <img
                    src={alliance.image}
                    alt={alliance.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-xl font-semibold text-white">{alliance.name}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     {/* Partners Carousel Section */}
<section className="relative py-16 bg-gradient-to-b from-[#0c0118] to-[#1a1a2e] text-white overflow-hidden">
  {/* Floating Glow Effects */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500 opacity-10 rounded-full blur-2xl animate-pulse"></div>
    <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-violet-500 opacity-10 rounded-full blur-3xl animate-pulse"></div>
  </div>

  {/* Outer Box Container */}
  <div className="max-w-6xl mx-auto px-6">
    <div className="bg-gradient-to-b from-[#0c0118] to-[#1a1a2e] text-white relative overflow-hidden rounded-2xl border-2 border-gray-800 shadow-xl min-h-[250px] md:min-h-[350px] flex items-center justify-center transition-all duration-500 hover:shadow-[0_0_40px_10px_rgba(59,130,246,0.5)] hover:border-blue-500">
      <div className="container mx-auto px-6 relative z-10 py-8 md:py-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
            OUR STRATEGIC PARTNERS
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl text-gray-300 max-w-3xl mx-auto font-light">
            Empowering Solutions Through Global Partnerships
          </h3>
        </motion.div>

        {/* Swiper Carousel */}
        <div className="relative px-4 md:px-12">
          {/* Navigation Buttons */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label="Previous Partner"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label="Next Partner"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Swiper Carousel */}
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            className="partners-carousel !overflow-visible"
          >
            {partners.map((partner, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-white rounded-lg backdrop-blur-sm p-4 hover:bg-white/90 transition-all duration-300 h-[150px] md:h-[180px] flex items-center justify-center hover:shadow-[0_0_20px_5px_rgba(59,130,246,0.3)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                  <div className="relative w-full h-full flex items-center justify-center p-4">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-auto h-auto max-w-[100px] md:max-w-[120px] lg:max-w-[150px] object-contain transition-all duration-300 group-hover:scale-105"
                      loading="lazy"
                      width="150"
                      height="150"
                    />
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  </div>

  {/* Additional Glowing Effects */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-1/3 left-1/3 w-48 h-48 bg-blue-500 opacity-10 rounded-full blur-3xl animate-float"></div>
    <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-violet-500 opacity-10 rounded-full blur-3xl animate-float-delay"></div>
  </div>
</section>
      {/* Services Section */}
      <section
        className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.1), transparent 80%`,
          }}
        ></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              We provide cutting-edge solutions tailored to meet your business needs with precision and innovation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }} // Ensure animation only plays once
                className="relative bg-white p-8 rounded-2xl shadow-lg group transform transition-all duration-500 hover:scale-105 hover:shadow-xl border-50 border-gray-100"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full shadow-md mb-6 transform transition-transform duration-300 group-hover:rotate-[360deg] group-hover:scale-110">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="text-gray-600 text-sm space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mt-1"></span>
                      <span className="group-hover:text-blue-600 transition-colors duration-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-blue-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 left-1/4 w-36 h-36 bg-blue-500 opacity-10 rounded-full blur-3xl smooth-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-44 h-44 bg-teal-500 opacity-15 rounded-full blur-3xl smooth-pulse"></div>
        </div>
      </section>

      {/* Work Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {work.map((work, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl shadow-lg"
              >
                <div className="aspect-square">
                  <img
                    src={work.image}
                    alt={work.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-xl font-semibold text-white">{work.name}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
<section className="py-20 bg-gray-900 text-white relative overflow-hidden">
  {/* Section Header */}
  <div className="container mx-auto px-6 text-center mb-16">
    <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
    <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
      Explore our portfolio of innovative and impactful projects.
    </p>
  </div>

  {/* Project Cards */}
  <div className="container mx-auto px-6">
    <div className="grid md:grid-cols-2 gap-8">
      {[
        {
          title: 'Electrification works onboard VC11199',
          value: '3 crore',
          image: 'https://dst.news/wp-content/uploads/2024/12/Keel-laid-for-the-lead-vessel-of-Indian-Navys-Fleet-Support-Ship-classed-with-IR-Class-at-Hindustan-Shipyard-Ltd.-.jpeg',
          description: 'Comprehensive electrification and system upgrades for enhanced operational efficiency.',
        },
        {
          title: 'AFDS System Serviceability Checks',
          value: '10 Lakhs',
          image: 'https://img.freepik.com/premium-photo/deck-cargo-ship-crew-members-conduct-routine-checks-maintenance-safety-equipment_216520-17429.jpg',
          description: 'Routine checks and maintenance to ensure the reliability of the AFDS system.',
        },
      ].map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-800 border border-gray-700"
        >
          {/* Project Image */}
          <div className="h-64 relative overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          {/* Project Details */}
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-300 mb-4">{project.description}</p>
            <p className="text-lg font-medium text-blue-400">Project Value: {project.value}</p>
            <Link
              to="/projects"
              className="inline-flex items-center mt-4 text-blue-400 hover:text-blue-300 transition-colors"
            >
              Learn More <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </motion.div>
      ))}
    </div>

    {/* View All Projects Button */}
    <div className="text-center mt-16">
      <Link
        to="/projects"
        className="inline-flex items-center px-6 py-3 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300 rounded-lg"
      >
        View All Projects <ChevronRight className="w-4 h-4 ml-2" />
      </Link>
    </div>
  </div>
</section>

      {/* Stats Section */}
      <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Growth in Numbers
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '8rem' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-1 bg-gradient-to-r from-blue-600 via-teal-600 to-cyan-500 mx-auto mb-6"
            ></motion.div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Measuring our success through impactful collaborations and innovative solutions
            </p>
          </motion.div>

          <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                icon={stat.icon}
                number={stat.number}
                label={stat.label}
                description={stat.description}
                delay={index * 0.2}
              />
            ))}
          </div>

          <div className="lg:hidden">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
              }}
            >
              {stats.map((stat, index) => (
                <SwiperSlide key={index}>
                  <StatCard
                    icon={stat.icon}
                    number={stat.number}
                    label={stat.label}
                    description={stat.description}
                    delay={0.2}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 text-center"
          >
            <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl">
              <p className="text-blue-800 font-medium max-w-2xl">
                Every number represents a milestone in our journey towards excellence and innovation in technology solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

  {/* Call to Action Section */}
<section className="relative py-14 px-6 flex justify-center items-center bg-gradient-to-b from-[#0c0118] to-black text-white overflow-hidden">
  {/* Floating Glow Effects */}
  <div className="absolute inset-0">
    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500 opacity-10 rounded-full blur-2xl animate-pulse"></div>
    <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-500 opacity-10 rounded-full blur-3xl animate-pulse"></div>
  </div>

  {/* CTA Section */}
  <div className="container mx-auto px-2 md:px-6">
    <div className="relative z-10 w-full bg-opacity-30 backdrop-blur-sm border-2 border-gray-800 shadow-xl rounded-xl px-8 md:px-16 py-12 transition-all duration-500 hover:shadow-[0_0_40px_10px_rgba(99,102,241,0.5)] hover:border-purple-500">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
        {/* Left Side: "Your Vision. Our Solutions." */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-4xl font-bold text-white">
            Your Vision. Our Solutions.
          </h2>
          <h2 className="text-3xl text-white mt-1">
            Let's Connect
          </h2>
        </motion.div>

        {/* Right Side: Email and Supporting Text */}

<motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  className="md:w-1/2 text-left" // Always left-aligned for both mobile and desktop
>
  {/* Email Address */}
  <p className="text-2xl font-semibold text-white">
    Email us:{' '}
    <a
      href="mailto:visakhatechsolutions@gmail.com"
      className="text-white hover:text-gray-200 transition-colors"
    >
      visakhatech@gmail.com
    </a>
  </p>

  {/* Supporting Text */}
  <p className="text-white mt-4 text-base md:text-lg"> {/* Adjusted text size for desktop */}
    We consistently exceed our clients' expectations by providing high quality solutions. Get in touch with us get started!
  </p>
</motion.div>
      </div>

      {/* CTA Button (Centered Below Both Sections) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-center mt-8"
      >
        <a
          href="mailto:visakhatechsolution@gmail.com"
          className="inline-block px-8 py-3 text-lg font-medium text-white bg-[#111323] hover:bg-[#1d2040] rounded-full shadow-lg hover:shadow-[0_0_40px_10px_rgba(99,102,241,0.5)] transition-all duration-300"
        >
          Get In Touch
        </a>
      </motion.div>
    </div>
  </div>
</section>
    </div>
  );
}
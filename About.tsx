import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  CheckCircle, Target, Users, Phone, Calendar, 
  Briefcase, DollarSign, ArrowRight, AlignCenterVertical as Certificate,
  User, ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const leadershipTeam = [
  {
    name: 'Kusumuru Manideep',
    position: 'Managing Director',
    phone: '7702119852'
  },
  {
    name: 'Kalla Kannaya Naidu',
    position: 'In-Charge (Sites)',
    phone: '7702119852'
  },
  {
    name: 'Pappala Chakradhar',
    position: 'Manager',
    phone: '9876543210'
  },
  {
    name: 'Badiya Raju',
    position: 'Mechanical Engineer (In-Charge)',
    phone: '9876543457'
  },
  {
    name: 'Uppuganti Suresh',
    position: 'Electrical Engineer (In-Charge)',
    phone: '7799100967'
  },
  {
    name: 'Muppana Narayana Rao',
    position: 'Accounts',
    phone: '9900292929'
  },
  {
    name: 'Peela Vasu',
    position: 'Admin',
    phone: '9876543245'
  }
];

const claSteps = [
  {
    title: 'Analysis',
    steps: ['Briefing', 'Onsite Survey', 'Extensive Analysis', 'Customer Tailored Solution']
  },
  {
    title: 'Consulting',
    steps: ['Expert Guidance', 'Industry Best Practices', 'Strategic Planning', 'Risk Assessment']
  },
  {
    title: 'Project Management',
    steps: ['Timeline Planning', 'Resource Allocation', 'Progress Monitoring', 'Quality Control']
  },
  {
    title: 'Implementation',
    steps: ['Systematic Execution', 'Quality Standards', 'Safety Protocols', 'Regular Updates']
  },
  {
    title: 'Support',
    steps: ['24/7 Assistance', 'Maintenance Plans', 'Technical Support', 'Emergency Response']
  }
];

const whyChooseUs = [
  {
    title: 'Timely Execution',
    description: 'Versatile execution capability with strict adherence to timelines'
  },
  {
    title: 'Expert Team',
    description: 'Qualified and experienced professionals dedicated to excellence'
  },
  {
    title: 'Quality Assured',
    description: 'Supreme quality products and services meeting international standards'
  },
  {
    title: 'Quick Response',
    description: 'Priorities including economy, efficiency, and reliability'
  },
  {
    title: 'Business Approach',
    description: 'Focused approach ensuring customer satisfaction'
  },
  {
    title: 'Wide Network',
    description: 'Extensive distribution network for better reach'
  }
];

const clients = [
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

export default function AboutUs() {
  const [activeStep, setActiveStep] = useState(0);
  const { scrollYProgress } = useScroll();
  const parallaxY1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const parallaxY2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const parallaxScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const parallaxOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  
  const missionRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);
  const claRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const whyUsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      [missionRef, visionRef, claRef, teamRef, whyUsRef].forEach((ref, index) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight - 100;
          ref.current.style.opacity = isVisible ? '1' : '0';
          ref.current.style.transform = isVisible 
            ? 'translateY(0)' 
            : `translateY(${50 + index * 20}px)`;
          ref.current.style.transitionDelay = `${index * 0.1}s`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % claSteps.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <Helmet>
  {/* General Meta Tags */}
  <title>Visakhatech Solutions | Projects Portfolio</title>
  <meta name="description" content="Explore Visakhatech Solutions' portfolio of successful projects in electro-mechanical, electrical consultancy, and automation solutions. Trusted by industry leaders in Visakhapatnam (Vizag)." />
  <meta name="keywords" content="Visakhatech Solutions, Visakhapatnam Tech Solutions, Vizag Tech Solutions, Electro-Mechanical Projects, Electrical Consultancy, Automation Solutions, Turnkey Projects, Industrial Maintenance, Tech Solutions in Visakhapatnam" />
  <meta property="og:title" content="Visakhatech Solutions | Projects Portfolio" />
  <meta property="og:description" content="Explore Visakhatech Solutions' portfolio of successful projects in electro-mechanical, electrical consultancy, and automation solutions. Trusted by industry leaders in Visakhapatnam (Vizag)." />
  <meta property="og:image" content="https://visakhatechsolutions.com/projects-portfolio.jpg" />
  <meta property="og:url" content="https://visakhatechsolutions.com/projects" />
  <link rel="canonical" href="https://visakhatechsolutions.com/projects" />

  {/* Service-Specific Meta Tags */}
  <meta name="service:Electrical Consultancy" content="Expert guidance for efficient and safe electrical systems, including layout design, load analysis, and compliance." />
  <meta name="service:Turnkey Projects" content="End-to-end solutions for electrical, fabrication, and welding projects, ensuring quality and on-time delivery." />
  <meta name="service:Maintenance" content="Reliable AMC services with 24/7 support to ensure system longevity and minimal downtime." />
  <meta name="service:Supply Chain" content="Supply of premium electrical equipment with timely delivery and adherence to industry standards." />
  <meta name="service:Quality Assurance" content="ISO-certified processes ensuring reliable, safe, and top-quality products and services." />
  <meta name="service:Automation" content="Advanced automation solutions for improved efficiency, seamless operations, and cost reduction." />

  {/* Structured Data for Projects */}
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
          "https://linkedin.com/company/visakhatechsolutions"
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
        ]
      }
    `}
  </script>

  {/* Breadcrumbs Schema */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://visakhatechsolutions.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Projects",
            "item": "https://visakhatechsolutions.com/projects"
          }
        ]
      }
    `}
  </script>

  {/* FAQ Schema */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What types of projects does Visakhatech Solutions handle?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We handle a wide range of projects, including electro-mechanical solutions, electrical consultancy, automation, turnkey projects, and industrial maintenance."
            }
          },
          {
            "@type": "Question",
            "name": "How can I view Visakhatech Solutions' project portfolio?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can explore our project portfolio on our website or contact us for a detailed presentation."
            }
          },
          {
            "@type": "Question",
            "name": "Does Visakhatech Solutions provide project updates?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we provide regular project updates to our clients to ensure transparency and timely delivery."
            }
          }
        ]
      }
    `}
  </script>

  {/* Video Schema */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": "Visakhatech Solutions Project Showcase",
        "description": "A showcase of Visakhatech Solutions' successful projects in electro-mechanical, electrical consultancy, and automation solutions.",
        "thumbnailUrl": "https://visakhatechsolutions.com/projects-thumbnail.jpg",
        "uploadDate": "2024-01-01",
        "duration": "PT2M30S",
        "contentUrl": "https://visakhatechsolutions.com/projects-video.mp4",
        "embedUrl": "https://visakhatechsolutions.com/projects-video-embed"
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
          "https://linkedin.com/company/visakhatechsolutions"
        ]
      }
    `}
  </script>

  {/* Multilingual Support */}
  <link rel="alternate" hrefLang="en" href="https://visakhatechsolutions.com/projects" />
  <link rel="alternate" hrefLang="hi" href="https://visakhatechsolutions.com/hi/projects" />
  <link rel="alternate" hrefLang="te" href="https://visakhatechsolutions.com/te/projects" />

  {/* Favicon */}
  <link rel="icon" type="image/png" href="https://visakhatechsolutions.com/favicon.png" />
  <link rel="apple-touch-icon" href="https://visakhatechsolutions.com/apple-touch-icon.png" />

  {/* Preconnect and Preload Critical Resources */}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
  <link rel="preload" as="image" href="https://visakhatechsolutions.com/projects-portfolio.jpg" />
</Helmet>

      {/* Hero Section with Enhanced Parallax */}
      <section className="relative h-[80vh] overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://i.postimg.cc/WzTHG1kk/port-de-barcelona-night.jpg)',
            y: parallaxY1,
            scale: parallaxScale,
            opacity: parallaxOpacity
          }}
        />
        
        
        <div className="relative z-20 flex items-center justify-center h-full container mx-auto px-4">
          <div className="max-w-4xl text-center">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="mb-8 transform hover:scale-110 transition-transform"
            >
              <Certificate className="w-24 h-24 text-blue-600 mx-auto -mt-28" />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-5xl font-bold text-white mb-8 leading-tight"
            >
              About Visakha Tech Solutions
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-3xl text-gray-200 leading-relaxed"
            >
              An ISO 9001:2015 Certified Company delivering excellence in electro-mechanical solutions
            </motion.p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-20" />
      </section>

      <section className="py-20 relative">
        <motion.div 
          className="absolute inset-0 opacity-5"
          style={{ y: parallaxY2 }}
        >
          <div className="absolute inset-0 bg-grid-pattern"></div>
        </motion.div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-24">
              <motion.div 
                initial={{ rotate: 0 }}
                whileInView={{ rotate: 0 }}
                transition={{ duration: 0, ease: "easeInOut" }}
                className="flex justify-center mb-8 transform hover:rotate-180 transition-transform duration-0"
              >
                <img
  src="https://i.postimg.cc/wTBMqHXh/Whats-App-Image-2025-03-07-at-9-02-53-PM.png"
  alt="Port de Barcelona Night"
  className="w-28 h-28 -mt-8"
/>
                <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  Visakha Tech Solutions
                </span>
                <span className="hidden sm:block text-xs text-gray-600">
                  (AN ISO 9001:2015 CERTIFIED COMPANY)
                </span>
              </div>
              </motion.div>
              <p className="text-xl text-gray-700 leading-relaxed">
                As an ISO 9001:2015 Certified Company, we are committed to delivering excellence in every project. 
                Our expertise in electro-mechanical solutions, combined with our dedication to quality and innovation, 
                makes us a trusted partner for complex technical challenges.
              </p>
            </div>

            <div 
              ref={missionRef}
              className="grid md:grid-cols-2 gap-12 mb-24 opacity-0 transition-all duration-1000"
            >
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <h3 className="text-2xl font-bold text-blue-600 mb-6">Our Mission</h3>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  To be a Company Committed to "ON TIME and ON BUDGET" delivery guaranteed performance 
                  and offering end to end solutions to our customers.
                </p>
                <ul className="space-y-4">
                  {['Exceed client expectations', 'Maintain highest quality standards', 'Foster employee growth'].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700 group">
                      <CheckCircle className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="group-hover:text-blue-600 transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <h3 className="text-2xl font-bold text-blue-600 mb-6">Our Vision</h3>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  To be recognized as a leading contractor company in India, through our service 
                  and customer satisfaction.
                </p>
                <ul className="space-y-4">
                  {['Build strong relationships', 'Deliver projects ahead of schedule', 'Maintain zero harm record'].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700 group">
                      <Target className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="group-hover:text-blue-600 transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CLA Section with improved responsiveness */}
            <div 
              ref={claRef}
              className="mb-24 opacity-0 transition-all duration-1000"
            >
              <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Our Closed Loop Approach (CLA)
              </h3>
              <div className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow border border-gray-100">
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                  {claSteps.map((step, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveStep(index)}
                      className={`text-sm font-semibold px-4 py-3 rounded-full transition-all duration-300 ${
                        activeStep === index 
                          ? 'bg-blue-600 text-white shadow-lg scale-105' 
                          : 'text-gray-600 hover:bg-blue-50'
                      }`}
                    >
                      {step.title}
                    </button>
                  ))}
                </div>
                <div className="min-h-[300px] md:min-h-[250px] relative">
                  {claSteps.map((step, index) => (
                    <div
                      key={index}
                      className={`absolute w-full transition-all duration-500 ${
                        activeStep === index 
                          ? 'opacity-100 translate-x-0' 
                          : 'opacity-0 translate-x-8 pointer-events-none'
                      }`}
                    >
                      <h4 className="text-2xl font-bold text-blue-600 mb-8">{step.title}</h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {step.steps.map((item, idx) => (
                          <div 
                            key={idx} 
                            className="flex items-center space-x-4 bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors group"
                          >
                            <ArrowRight className="w-6 h-6 text-blue-500 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                            <span className="text-gray-700 group-hover:text-blue-700 transition-colors">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div 
              ref={teamRef}
              className="mb-24 opacity-0 transition-all duration-1000"
            >
              <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Our Leadership Team
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {leadershipTeam.map((member, index) => (
                  <div 
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group border border-gray-100"
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                        <User className="w-8 h-8 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {member.name}
                        </h4>
                        <p className="text-blue-600">{member.position}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-600 group-hover:text-blue-600 transition-colors">
                      <Phone className="w-5 h-5 mr-2" />
                      <a href={`tel:+91${member.phone}`} className="hover:underline">{member.phone}</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us Section */}
<div 
  ref={whyUsRef}
  className="mb-24 opacity-0 transition-all duration-1000"
>
  <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
    Why Choose Visakha Tech Solutions?
  </h3>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {whyChooseUs.map((item, index) => (
      <div 
        key={index}
        className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 group border border-gray-100"
      >
        <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 group-hover:bg-blue-200 transition-colors">
          <span className="text-2xl font-bold text-blue-600">{index + 1}</span>
        </div>
        <h4 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
          {item.title}
        </h4>
        <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
          {item.description}
        </p>
      </div>
    ))}
  </div>
</div>

{/* Clients Section (Futuristic White and Blue Theme) */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Clients Who Trust Us
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        We are proud to partner with industry leaders and innovative businesses across various sectors. Our clients trust us to deliver exceptional electro-mechanical solutions.
      </p>
    </motion.div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {clients.map((client, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white rounded-xl flex items-center justify-center h-48 hover:bg-blue-50 transition-colors overflow-hidden group relative border-2 border-gray-200 hover:border-blue-500 hover:shadow-[0_0_30px_10px_rgba(59,130,246,0.3)] transition-all duration-300"
        >
          {/* Logo */}
          <img 
            src={client.logo} 
            alt={client.name} 
            className="max-h-28 max-w-full object-contain transform group-hover:scale-110 transition-transform duration-300 z-20"
          />

          {/* Glow Effect Outside the Box */}
          <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="absolute inset-0 rounded-lg bg-blue-500/20 blur-md group-hover:blur-lg transition-all duration-300"></div>
            <div className="absolute inset-0 rounded-lg border-2 border-blue-500/50"></div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
           <div className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden group">
  {/* Glass Morphism Effect */}
  <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-xl"></div>

  {/* Floating Particles (Subtle) */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute w-3 h-3 bg-blue-100 rounded-full top-12 left-24 animate-float"></div>
    <div className="absolute w-4 h-4 bg-blue-100 rounded-full top-24 right-20 animate-float-delay"></div>
    <div className="absolute w-3 h-3 bg-blue-100 rounded-full bottom-12 left-36 animate-float"></div>
    <div className="absolute w-4 h-4 bg-blue-100 rounded-full bottom-24 right-28 animate-float-delay"></div>
  </div>

  {/* Section Header */}
  <h3 className="text-3xl font-bold text-gray-900 mb-8 relative z-10">
    Company Information
  </h3>

  {/* Grid Layout */}
  <div className="grid md:grid-cols-2 gap-8 relative z-10">
    {/* Left Column */}
    <div className="space-y-6">
      <div className="flex items-center text-gray-700 group hover:text-blue-600 transition-colors">
        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
          <Users className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
        </div>
        <span className="ml-4">
          <span className="font-semibold mr-2">Founder:</span> Kusumuru Manideep
        </span>
      </div>
      <div className="flex items-center text-gray-700 group hover:text-blue-600 transition-colors">
        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
          <Calendar className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
        </div>
        <span className="ml-4">
          <span className="font-semibold mr-2">Founded:</span> 2023-2024
        </span>
      </div>
    </div>

    {/* Right Column */}
    <div className="space-y-6">
      <div className="flex items-center text-gray-700 group hover:text-blue-600 transition-colors">
        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
          <Briefcase className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
        </div>
        <span className="ml-4">
          <span className="font-semibold mr-2">Business Type:</span> Electro-Mechanical Consultant
        </span>
      </div>
      <div className="flex items-center text-gray-700 group hover:text-blue-600 transition-colors">
        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
          <DollarSign className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
        </div>
        <span className="ml-4">
          <span className="font-semibold mr-2">Annual Turnover:</span> 4-5 Cr
        </span>
      </div>
    </div>
  </div>

  {/* Subtle Hover Effect */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
</div>
            
            {/* CTA Section */}
            <div className="mt-16 text-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
              >
                Contact Us Today <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
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
                className="md:w-1/2 text-left"
              >
                {/* Email Address */}
                <p className="text-2xl font-semibold text-white">
                  Email us:{' '}
                  <a
                    href="mailto:visakhatechsolution@gmail.com"
                    className="text-white hover:text-gray-200 transition-colors"
                  >
                    visakhatech@gmail.com
                  </a>
                </p>

                {/* Supporting Text */}
                <p className="text-white mt-4 text-base md:text-lg">
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
                href="mailto:visakhatechsolutions@gmail.com"
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
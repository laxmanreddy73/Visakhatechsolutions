import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wrench, PenTool as Tool, Settings, Truck, Shield, Cpu, ChevronRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const partners = [
  {
    name: "DRDL Hyderabad",
    logo: "https://www.drdo.gov.in/sites/default/files/inline-images/DRDL_Logo.png"
  },
  {
    name: "Hindustan Shipyard Ltd.",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/Hindustan_Shipyard_Limited_Logo.svg/1200px-Hindustan_Shipyard_Limited_Logo.svg.png"
  },
  {
    name: "Naval Dockyard (V)",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Naval_dockyard_Entrance.jpg/800px-Naval_dockyard_Entrance.jpg"
  },
  {
    name: "NSRY Cochin",
    logo: "https://cochinshipyard.in/uploads/gallery/7b58a64c022b91acc20a6970102fd3f7.jpg"
  }
];

const services = [
  {
    icon: Wrench,
    title: "Electrical Consultancy",
    description: "Expert guidance for efficient and safe electrical systems, including layout design, load analysis, and compliance.",
    features: [
      "Load analysis and system design",
      "Compliance with standards",
      "Custom solutions for projects",
      "Energy cost optimization"
    ]
  },
  {
    icon: Tool,
    title: "Turnkey Projects",
    description: "End-to-end solutions for electrical, fabrication, and welding projects, ensuring quality and on-time delivery.",
    features: [
      "Complete project management",
      "High-quality fabrication",
      "Electrical system integration",
      "Timely delivery with cost control"
    ]
  },
  {
    icon: Settings,
    title: "Maintenance",
    description: "Reliable AMC services with 24/7 support to ensure system longevity and minimal downtime.",
    features: [
      "Comprehensive AMC",
      "24/7 breakdown support",
      "Preventive maintenance",
      "Certified technicians"
    ]
  },
  {
    icon: Truck,
    title: "Supply Chain",
    description: "Supply of premium electrical equipment with timely delivery and adherence to industry standards.",
    features: [
      "Quality electrical equipment",
      "Trusted manufacturers",
      "Wide product range",
      "Custom bulk solutions"
    ]
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "ISO-certified processes ensuring reliable, safe, and top-quality products and services.",
    features: [
      "ISO 9001:2015 certified",
      "Rigorous quality checks",
      "Safety compliance",
      "Dedicated QA team"
    ]
  },
  {
    icon: Cpu,
    title: "Automation",
    description: "Advanced automation solutions for improved efficiency, seamless operations, and cost reduction.",
    features: [
      "Custom system design",
      "Integration with infrastructure",
      "Tech upgrades",
      "Enhanced monitoring"
    ]
  }
];

const testimonials = [
  {
    name: "Laxman Reddy",
    role: "CEO, ABC Corporation",
    quote: "Their expertise in electrical consultancy transformed our operations. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    name: "Puja Kusumuru",
    role: "Operations Manager, XYZ Industries",
    quote: "The team delivered our project on time and within budget. Exceptional service!",
    image: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    name: "Raghav Rao",
    role: "CTO, DEF Solutions",
    quote: "Their automation solutions have significantly improved our efficiency. Great work!",
    image: "https://randomuser.me/api/portraits/men/3.jpg"
  }
];

const caseStudies = [
  {
    title: "Electrification of Naval Vessel",
    description: "Successfully delivered a complex electrification project for a naval vessel, ensuring compliance with defense standards.",
    image: "https://i.postimg.cc/bNgpFr83/INS-Saryu.jpg"
  },
  {
    title: "Automation in Manufacturing",
    description: "Implemented advanced automation solutions for a manufacturing facility, reducing downtime by 30%.",
    image: "https://i.postimg.cc/zGQ0Fst0/8-benefits-of-automation-in-manufacturing-and-how-to-unlock-them-6703e400c8fe0.webp"
  },
  {
    title: "Energy Management System",
    description: "Designed and deployed an energy management system for a large infrastructure project, optimizing energy usage.",
    image: "https://i.postimg.cc/L5MHY0Fs/britannica-insights-Phil-the-Fixer-renewable-energy.webp"
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
export default function Services() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="pt-20">
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
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-blue-700 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
            opacity: 0.4
          }}
        />
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-white"
            >
              <h1 className="text-6xl font-extrabold mb-6 text-blue-100 leading-tight">Our Services</h1>
              <p className="text-lg text-blue-200 max-w-2xl mx-auto">
                Comprehensive electro-mechanical solutions tailored to your specific needs
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        {/* Mouse-following gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.1), transparent 80%)`,
          }}
        ></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Our Comprehensive Services</h2>
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
                viewport={{ once: true }}
                className="relative bg-white p-8 rounded-2xl shadow-lg group transform transition-all duration-500 hover:scale-105 hover:shadow-xl border border-gray-100"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full shadow-md mb-6 transform transition-transform duration-300 group-hover:rotate-[15deg] group-hover:scale-110">
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

        {/* Floating glow effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 left-1/4 w-36 h-36 bg-blue-500 opacity-10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-1/4 w-44 h-44 bg-teal-500 opacity-15 rounded-full blur-3xl animate-float-delay"></div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our satisfied clients about their experiences working with us.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <Quote className="w-6 h-6 text-blue-600 mb-4" />
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Case Studies</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto mb-6"></div>
            <p className="text-blue-200 max-w-2xl mx-auto">
              Explore how we’ve helped our clients achieve their goals through innovative solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-xl group"
              >
                <div className="aspect-square">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent" />
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{caseStudy.title}</h3>
                    <p className="text-blue-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {caseStudy.description}
                    </p>
                    <Link 
                      to="/case-studies" 
                      className="inline-flex items-center text-blue-300 hover:text-white transition-colors opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      Learn more <ChevronRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
{/* Service Process Section */}
<section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
  {/* Background Parallax Effect */}
  <motion.div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('https://i.postimg.cc/WzTHG1kk/port-de-barcelona-night.jpg')",
      opacity: 0.1
    }}
    initial={{ y: 0 }}
    whileInView={{ y: -50 }}
    transition={{ duration: 1, ease: "easeOut" }}
  />

  {/* Floating Glow Effects */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-blue-500 opacity-10 rounded-full blur-3xl animate-float"></div>
    <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-teal-500 opacity-10 rounded-full blur-3xl animate-float-delay"></div>
  </div>

  <div className="container mx-auto px-6 relative z-10">
    {/* Section Heading */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-20"
    >
      <h2 className="text-5xl font-extrabold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600">
        Our Service Process
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-6"></div>
      <p className="text-gray-600 max-w-2xl mx-auto text-lg">
        A systematic approach to ensure quality, efficiency, and client satisfaction
      </p>
    </motion.div>

    {/* Process Timeline */}
    <div className="relative">
      {/* Vertical Line */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-100 to-teal-100 transform -translate-x-1/2"></div>

      {[
        {
          title: "Initial Consultation",
          description: "We begin with a thorough consultation to understand your specific requirements and challenges.",
          icon: "01"
        },
        {
          title: "Site Assessment",
          description: "Our experts conduct a comprehensive site assessment to gather critical data and insights.",
          icon: "02"
        },
        {
          title: "Solution Design",
          description: "Based on our findings, we design a tailored solution that addresses your unique needs.",
          icon: "03"
        },
        {
          title: "Implementation",
          description: "Our skilled team executes the plan with precision, adhering to the highest quality standards.",
          icon: "04"
        },
        {
          title: "Quality Assurance",
          description: "Rigorous testing and quality checks ensure that all deliverables meet our exacting standards.",
          icon: "05"
        },
        {
          title: "Ongoing Support",
          description: "We provide continuous support and maintenance to ensure optimal performance over time.",
          icon: "06"
        }
      ].map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className={`relative mb-16 md:mb-24 ${
            index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-0 md:mr-auto' : 'md:pl-12 md:text-left md:ml-auto md:mr-0'
          } max-w-md`}
        >
          {/* Step Icon with Glow */}
          <div className={`flex items-center mb-6 ${
            index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
          }`}>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-md animate-pulse"></div>
              <div className="bg-gradient-to-br from-blue-600 to-teal-600 text-white w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold relative z-10 shadow-lg">
                {step.icon}
              </div>
            </div>
          </div>

          {/* Step Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">{step.title}</h3>
            <p className="text-gray-600 leading-relaxed">{step.description}</p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600 text-white ">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-bold mb-6"
            >
              Ready to Transform Your Operations?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl mb-8 text-blue-100"
            >
              Contact us today to discuss how our services can help you achieve your goals.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all inline-flex items-center"
              >
                Get in Touch <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
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
  className="md:w-1/2 text-left" // Always left-aligned for both mobile and desktop
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
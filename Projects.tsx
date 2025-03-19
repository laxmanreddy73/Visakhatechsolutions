import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

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

const projects = [
  {
    title: "Electrification works onboard VC11199 (FDN) at HSL",
    value: "3 Crore",
    category: "Electrical",
    image: "https://dst.news/wp-content/uploads/2024/12/Keel-laid-for-the-lead-vessel-of-Indian-Navys-Fleet-Support-Ship-classed-with-IR-Class-at-Hindustan-Shipyard-Ltd.-.jpeg",
    description: "Complete electrical system installation and integration for the Fleet Support Ship at Hindustan Shipyard Limited.",
    client: "Hindustan Shipyard Ltd.",
    duration: "18 months",
    completed: true,
  },
  {
    title: "Hull Works for Tug SAMBUSING at ND(V)",
    value: "25 Lakhs",
    category: "Hull",
    image: "https://i.postimg.cc/5tFgjH23/Ship-Christening.jpg",
    description: "Comprehensive hull maintenance and repair works for the naval tug vessel at Naval Dockyard Visakhapatnam.",
    client: "Naval Dockyard (V)",
    duration: "6 months",
    completed: true,
  },
  {
    title: "Serviceability Checks of AFDS System onboard NOPV Class Ships",
    value: "10 Lakhs",
    category: "Maintenance",
    image: "https://i.postimg.cc/bNgpFr83/INS-Saryu.jpg",
    description: "Detailed serviceability assessment and maintenance of Automated Fire Detection Systems on INS Sumedha and INS Sumitra.",
    client: "Indian Navy",
    duration: "3 months",
    completed: true,
  },
  {
    title: "Loading & Unloading activities of Missiles (DRDL)",
    value: "10 Lakhs",
    category: "Operations",
    image: "https://i.postimg.cc/hv3MfVT2/10-09-2021-ins-dhruv-nuclear-missile-tracking.jpg",
    description: "Specialized handling and logistics operations for missile systems at Defence Research and Development Laboratory.",
    client: "DRDL Hyderabad",
    duration: "Ongoing",
    completed: false,
  },
  {
    title: "Electrification works onboard INS Dhruv",
    value: "35 Lakhs",
    category: "Electrical",
    image: "https://i.postimg.cc/qRFCKwD6/INS-1-1200x768.jpg",
    description: "Installation and upgrade of electrical systems for the naval vessel INS Dhruv, including power distribution and control systems.",
    client: "Indian Navy",
    duration: "8 months",
    completed: true,
  },
  {
    title: "Material Supply for NOPV Classes",
    value: "30 Lakhs",
    category: "Supply",
    image: "https://i.postimg.cc/Pq3LGKjV/fe1aecf1-0999-4e7c-9f98-97364456c847-20241216-223741-0000.jpg",
    description: "Procurement and supply of specialized materials and equipment for Naval Offshore Patrol Vessels including INS Sumedha, INS Sumitra, and INS Saryu.",
    client: "Indian Navy",
    duration: "12 months",
    completed: true,
  },
  {
    title: "Bridge & Deck Repair Works onboard INS Vikrant",
    value: "45 Lakhs",
    category: "Hull",
    image: "https://i.postimg.cc/mkrFzqSs/RIAN-00701810-HR-468.jpg",
    description: "Structural repairs and maintenance of the bridge and deck areas on India's indigenous aircraft carrier INS Vikrant.",
    client: "Indian Navy",
    duration: "10 months",
    completed: true,
  },
  {
    title: "Engine Room Upgrades for INS Arjun",
    value: "50 Lakhs",
    category: "Electrical",
    image: "https://i.postimg.cc/26YCKZq9/u3-turkey-besiktas.jpg",
    description: "Comprehensive upgrade of engine room electrical systems and control panels for enhanced performance and reliability.",
    client: "Indian Navy",
    duration: "9 months",
    completed: true,
  },
];

const upcomingProjects = [
  {
    title: "AMC of Acoustic Tank at Bharat Dynamics Limited (Vizag)",
    value: "30 Lakhs per Year",
    category: "Maintenance",
    image: "https://img.freepik.com/premium-photo/deck-cargo-ship-crew-members-conduct-routine-checks-maintenance-safety-equipment_216520-17429.jpg",
    description: "Annual Maintenance Contract for the specialized acoustic testing facility at BDL Visakhapatnam, including preventive maintenance and emergency support.",
    client: "Bharat Dynamics Limited",
    duration: "Annual Contract",
    startDate: "Q2 2025",
  },
  {
    title: "Overhaul and Maintenance of NOPV Class Engines",
    value: "40 Lakhs",
    category: "Operations",
    image: "https://i.postimg.cc/zBTFq9GX/images-1.jpg",
    description: "Complete overhaul and maintenance of propulsion systems for Naval Offshore Patrol Vessels, including parts replacement and performance optimization.",
    client: "Indian Navy",
    duration: "6 months",
    startDate: "Q3 2025",
  },
];


const categories = ["All", "Hull", "Maintenance", "Operations", "Electrical", "Supply"];

const TextAnimation = () => {
  const [visibleText, setVisibleText] = useState(""); // Tracks the visible text
  const sentence = "Shaping the Future with * Technology and Precision.";

  // Split sentence into parts
  const [line1, line2] = sentence.split("*");

  useEffect(() => {
    const typeText = async (text, delay = 50) => {
      for (let i = 0; i <= text.length; i++) {
        setVisibleText(text.slice(0, i));
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    };

    const runAnimation = async () => {
      // Step 1: Type Line 1
      

      // Step 2: Type Line 2 below Line 1
      await typeText(`${line1}             <br />    ${line2}`);

      // Stop here and keep the final text visible
    };

    runAnimation(); // Run the animation once
  }, []);

  return (
    <div
      className="absolute bottom-32 left-6 text-blue-100 text-3xl sm:text-4xl md:text-5xl font-bold z-5"
      style={{
        fontFamily: "'Archivo', sans-serif", // Apply Archivo font
        lineHeight: "1.5", // Adjust line height for better spacing
        height: "200px", // Fixed height to prevent text from moving upward
        overflow: "hidden", // Hide overflow to keep the container stable
        whiteSpace: "pre-line", // Render <br /> as line breaks
      }}
    >
      <div
        style={{
          display: "inline-block",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
        dangerouslySetInnerHTML={{ __html: visibleText }} // Render HTML content
      />
    </div>
  );
};
const VideoSection = () => {
  return (
    <section className="relative h-screen overflow-hidden bg-white">
      {/* Video Container with Curved Rectangular Box */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center p-2">
        <div className="w-full h-full max-w-[99%] max-h-[85%] rounded-[30px] overflow-hidden shadow-lg -mt-24">
          {/* Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            src="https://media-hosting.imagekit.io//8e9539a7f2134c5a/10452360-hd_3840_2160_30fps.mp4?Expires=1836299688&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Ls33bJugf3v48c7hXUbsZzI9VJ7h~Avt8Vp65uAM-mgigmk7LfDdTk-Sl7dl9sfX5VKMu-3h949FSO93bfOKo1SAaqkHTQkOo1xlu-WOHP-blkIAgUqyt8uUP2RXXyv6nwKRcMGylwViScw3cu-fzMwbznw-qTOZ2epx153XiOWcFkd3SRqjcq6CEP1PUUdcM5a2m7XrJfsp96bBoFknmvtdx6SYecPtrxc6ALqpyeRlvqoiq-tbA1x0JHfulco8mPpMIZpvlzEPN-tupOxROUsHg2Rl8z2~6CwdrI97K3Lx4b9ARoSkE~vV2bo6f2XraXDXMBYRJPtSKQNRMY~hzQ__"
            poster="https://example.com/poster-image.jpg"
            preload="auto"
          />

          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col justify-end items-start p-6 md:p-8 lg:p-12 z-10 -mt-4">
            <TextAnimation />

            {/* Call-to-Action Button */}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default function EnhancedProjects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<null | (typeof projects[0])>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const parallaxY1 = useTransform(scrollYProgress, [0, 1], [0, -200]); // Stronger parallax effect
  const parallaxScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]); // More dramatic scaling
  const parallaxOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.6]); // Smooth fade-out

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="pt-4">
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
      {/* Video Section */}
      <VideoSection />

      {/* Projects Section */}
      <section ref={projectsRef} className="py-20 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{ y: parallaxY1 }}
        >
          <div className="absolute inset-0 bg-grid-pattern"></div>
        </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Projects Portfolio</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse through our diverse range of successful implementations across various industries
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex justify-center mb-12 flex-wrap gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 md:px-6 py-2 rounded-full transition-colors shadow-md ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-teal-600 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                onClick={() => setSelectedProject(project)}
              >
                <motion.div
                  className="h-80 bg-cover bg-center cursor-pointer"
                  style={{ backgroundImage: `url(${project.image})` }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent" />
                  <div className="absolute bottom-0 p-6 text-white">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full text-sm mb-4">
                      {project.category}
                    </span>
                    <h3 className="text-lg md:text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-base mb-4">Project Value: {project.value}</p>
                    <button className="inline-flex items-center text-blue-300 hover:text-white transition-colors">
                      View Details <ChevronRight className="ml-1 w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Project Details Modal */}
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-80">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <button
                    className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors"
                    onClick={() => setSelectedProject(null)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <div className="absolute bottom-6 left-6">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full text-sm text-white mb-2">
                      {selectedProject.category}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">{selectedProject.title}</h2>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Client</h3>
                      <p className="text-lg font-semibold text-gray-900">{selectedProject.client}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Project Value</h3>
                      <p className="text-lg font-semibold text-gray-900">{selectedProject.value}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Duration</h3>
                      <p className="text-lg font-semibold text-gray-900">{selectedProject.duration}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Status</h3>
                      <p className="text-lg font-semibold">
                        {selectedProject.completed ? (
                          <span className="text-green-600">Completed</span>
                        ) : (
                          <span className="text-blue-600">In Progress</span>
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Project Description</h3>
                    <p className="text-gray-700">{selectedProject.description}</p>
                  </div>
                  <div className="flex justify-end">
                    <Link
                      to="/contact"
                      className="inline-flex items-center bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all"
                    >
                      Inquire About Similar Projects <ExternalLink className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Upcoming Projects Section */}
          <div className="mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Upcoming Projects</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A glimpse into our future endeavors and upcoming implementations
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <motion.div
                    className="h-80 bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.image})` }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="inline-block px-3 py-1 bg-yellow-500 text-white rounded-full text-sm font-medium">
                        Coming Soon
                      </span>
                    </div>
                    <div className="absolute bottom-0 p-6 text-white">
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full text-sm mb-4">
                        {project.category}
                      </span>
                      <h3 className="text-lg md:text-xl font-semibold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm md:text-base mb-2">Project Value: {project.value}</p>
                      <p className="text-sm md:text-base mb-4">Expected Start: {project.startDate}</p>
                      <Link
                        to="/contact"
                        className="inline-flex items-center text-blue-300 hover:text-white transition-colors"
                      >
                        Request Information <ChevronRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grid)" />
          </svg>
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold mb-6"
            >
              Have a Project in Mind?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl mb-8 text-blue-100"
            >
              Let's discuss how Visakha Tech Solutions can help bring your vision to life with our expertise and innovative approach.
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
                Start Your Project <ChevronRight className="ml-2 w-5 h-5" />
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
                className="md:w-1/2 text-left"
              >
                {/* Email Address */}
                <p className="text-2xl font-semibold text-white">
                  Email us:{" "}
                  <a
                    href="mailto:visakhatechsolution@gmail.com"
                    className="text-white hover:text-gray-200 transition-colors"
                  >
                    visakhatech@gmail.com
                  </a>
                </p>

                {/* Supporting Text */}
                <p className="text-white mt-4 text-base md:text-lg">
                  We consistently exceed our clients' expectations by providing high-quality solutions. Get in touch with us to get started!
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
};
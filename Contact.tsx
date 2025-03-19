import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Loader } from 'lucide-react';
import { useState, useRef } from 'react';
import { Helmet } from 'react-helmet';

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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/.netlify/functions/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Helmet>
        <title>Contact Us - Visakha Tech Solutions</title>
        <meta name="description" content="Get in touch with Visakha Tech Solutions for all your electro-mechanical and automation needs. We're here to help transform your operations." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[40vh] bg-blue-700 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80')",
            opacity: 0.4
          }}
        />
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center text-white"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
              <p className="text-xl text-blue-100">
                Let's discuss how we can help transform your operations
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className={`w-full py-3 px-6 rounded-lg text-white font-medium flex items-center justify-center space-x-2 ${
                    status === 'loading'
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-teal-600 hover:shadow-lg transition-shadow'
                  }`}
                >
                  {status === 'loading' ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
                {status === 'success' && (
                  <p className="text-green-600 text-center">✅ Message sent successfully!</p>
                )}
                {status === 'error' && (
                  <p className="text-red-600 text-center">❌ {errorMessage}</p>
                )}
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                      <p className="text-gray-600">
                        65-1-208/C, Pilakavanipalem, Coromandel, Sriharipuram, Visakhapatnam - 530011
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-600">
                        <a href="tel:+917702119852" className="hover:text-blue-600">+91 7702119852</a>
                        <br />
                        <a href="tel:+919121419852" className="hover:text-blue-600">+91 9121419852</a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:visakhatechsolutions@gmail.com" className="hover:text-blue-600">
                          visakhatechsolutions@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              {/* Emergency Support */}
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">24/7 Emergency Support</h3>
                <p className="text-blue-700">
                  For urgent matters, our emergency support line is available 24/7:
                  <br />
                  <a href="tel:+917702119852" className="font-semibold hover:text-blue-900">
                    +91 7702119852
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Location</h2>
          <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.458485849!2d83.30344731487856!3d17.704343987893847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39431544e31f67%3A0x1d9cc7cc4d8b9fde!2sVisakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1647856732345!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
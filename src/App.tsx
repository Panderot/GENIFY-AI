import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Menu, X, Check, ArrowRight, Users, Zap, Shield, Target, Globe, Mail, Phone, MapPin, Star, TrendingUp, Award, Sparkles, Layers, Cpu } from 'lucide-react';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import AboutUs from './pages/AboutUs';
import WorkflowOptimization from './pages/WorkflowOptimization';
import SystemIntegration from './pages/SystemIntegration';
import CustomSolutions from './pages/CustomSolutions';
import FintechSuccessStory from './pages/FintechSuccessStory';
import EcommerceSuccessStory from './pages/EcommerceSuccessStory';
import HealthcareSuccessStory from './pages/HealthcareSuccessStory';
import ShopifySuccessStory from './pages/ShopifySuccessStory';
import GraphicDesignSuccessStory from './pages/GraphicDesignSuccessStory';
import OnboardingModal from './components/OnboardingModal';
import AnimatedPage from './components/AnimatedPage';
import ScrollProgress from './components/ScrollProgress';
import ScrollAnimation from './components/ScrollAnimation';
import CountUp from './components/CountUp';
import { motion } from 'framer-motion';
import { heroVariants, textStaggerVariants, textItemVariants, cardHoverVariants, scaleVariants } from './animations/variants';
import './styles/animations.css';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  
  return (
    <>
      <ScrollProgress />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/privacy-policy" element={<AnimatedPage><PrivacyPolicy /></AnimatedPage>} />
          <Route path="/terms-of-service" element={<AnimatedPage><TermsOfService /></AnimatedPage>} />
          <Route path="/cookie-policy" element={<AnimatedPage><CookiePolicy /></AnimatedPage>} />
          <Route path="/about-us" element={<AnimatedPage><AboutUs /></AnimatedPage>} />
          <Route path="/workflow-optimization" element={<AnimatedPage><WorkflowOptimization /></AnimatedPage>} />
          <Route path="/system-integration" element={<AnimatedPage><SystemIntegration /></AnimatedPage>} />
          <Route path="/custom-solutions" element={<AnimatedPage><CustomSolutions /></AnimatedPage>} />
          <Route path="/fintech-success-story" element={<AnimatedPage><FintechSuccessStory /></AnimatedPage>} />
          <Route path="/ecommerce-success-story" element={<AnimatedPage><EcommerceSuccessStory /></AnimatedPage>} />
          <Route path="/healthcare-success-story" element={<AnimatedPage><HealthcareSuccessStory /></AnimatedPage>} />
          <Route path="/shopify-success-story" element={<AnimatedPage><ShopifySuccessStory /></AnimatedPage>} />
          <Route path="/graphic-design-success-story" element={<AnimatedPage><GraphicDesignSuccessStory /></AnimatedPage>} />
          <Route path="/" element={<AnimatedPage><HomePage /></AnimatedPage>} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWizardOpen, setIsWizardOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('https://n8nn.xyz/webhook/form-submission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          emailAddress: formData.email,
          projectDetails: formData.message
        })
      });

      if (response.ok) {
        setSubmitMessage('Thank you for your message! We\'ll get back to you soon.');
        setFormData({ fullName: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage('Sorry, there was an error sending your message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-custom-light/90 backdrop-blur-xl shadow-2xl sticky top-0 z-50 border-b border-custom-light/30 transition-all duration-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <motion.div 
              className="flex items-center group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <motion.img 
                src="/genifyy_ai_logo.jpeg" 
                alt="Genify AI Logo" 
                className="w-10 h-10 rounded-xl shadow-2xl"
                whileHover={{ scale: 1.1, rotate: 3 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              />
              <span className="ml-3 text-xl font-bold text-custom-dark group-hover:text-custom-dark/80 transition-all duration-500 tracking-wide bg-gradient-to-r from-custom-dark to-custom-dark/80 bg-clip-text text-transparent hover:from-custom-dark/90 hover:to-custom-dark/60">Genify AI</span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#solutions" className="text-custom-dark/70 hover:text-custom-dark transition-all duration-500 font-medium relative group py-2 text-sm">
                Solutions
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-custom-dark rounded-full transition-all duration-500 group-hover:w-full"></span>
                <span className="absolute inset-0 bg-custom-light/50 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10 backdrop-blur-sm"></span>
              </a>
              <a href="#pricing" className="text-custom-dark/70 hover:text-custom-dark transition-all duration-500 font-medium relative group py-2 text-sm">
                Pricing
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-custom-dark rounded-full transition-all duration-500 group-hover:w-full"></span>
                <span className="absolute inset-0 bg-custom-light/50 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10 backdrop-blur-sm"></span>
              </a>
              <a href="#success" className="text-custom-dark/70 hover:text-custom-dark transition-all duration-500 font-medium relative group py-2 text-sm">
                Success Stories
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-custom-dark rounded-full transition-all duration-500 group-hover:w-full"></span>
                <span className="absolute inset-0 bg-custom-light/50 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10 backdrop-blur-sm"></span>
              </a>
              <a href="#contact" className="text-custom-dark/70 hover:text-custom-dark transition-all duration-500 font-medium relative group py-2 text-sm">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-custom-dark rounded-full transition-all duration-500 group-hover:w-full"></span>
                <span className="absolute inset-0 bg-custom-light/50 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10 backdrop-blur-sm"></span>
              </a>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <motion.button 
                onClick={() => setIsWizardOpen(true)} 
                className="bg-custom-dark text-custom-light px-5 py-2 rounded-lg hover:bg-custom-dark/80 transition-all duration-700 font-medium shadow-lg hover:shadow-custom-light/25 relative overflow-hidden group text-sm"
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-custom-light/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
                <span className="relative flex items-center">
                  <motion.div
                    whileHover={{ rotate: 12 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                  </motion.div>
                Get Started
                </span>
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-6 border-t border-custom-light/30 bg-custom-light/90 backdrop-blur-xl animate-in slide-in-from-top duration-700">
              <div className="flex flex-col space-y-4">
                <a href="#solutions" className="text-custom-dark/70 hover:text-custom-dark font-medium transition-all duration-500 hover:translate-x-2 text-sm">Solutions</a>
                <a href="#pricing" className="text-custom-dark/70 hover:text-custom-dark font-medium transition-all duration-500 hover:translate-x-2 text-sm">Pricing</a>
                <a href="#success" className="text-custom-dark/70 hover:text-custom-dark font-medium transition-all duration-500 hover:translate-x-2 text-sm">Success Stories</a>
                <a href="#contact" className="text-custom-dark/70 hover:text-custom-dark font-medium transition-all duration-500 hover:translate-x-2 text-sm">Contact</a>
                <button onClick={() => setIsWizardOpen(true)} className="bg-custom-dark text-custom-light px-5 py-2 rounded-lg w-fit font-medium shadow-lg hover:shadow-custom-light/25 transform hover:scale-105 transition-all duration-700 text-sm">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
      <OnboardingModal isOpen={isWizardOpen} onClose={() => setIsWizardOpen(false)} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-custom-light/30 via-white to-custom-light/50 py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2760%27 height=%2760%27 viewBox=%270 0 60 60%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27none%27 fill-rule=%27evenodd%27%3E%3Cg fill=%27%23dde0de%27 fill-opacity=%270.3%27%3E%3Ccircle cx=%2730%27 cy=%2730%27 r=%271%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-custom-light/40 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-custom-light/30 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
            <motion.div 
              className="space-y-10"
              variants={heroVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div 
                className="inline-flex items-center px-6 py-3 bg-custom-light/60 border border-custom-light/70 rounded-full text-custom-dark text-sm font-bold shadow-lg backdrop-blur-sm cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                >
                  <Star className="w-5 h-5 mr-3" />
                </motion.div>
                Trusted <motion.span 
                  className="font-bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  500+
                </motion.span> Businesses
              </motion.div>
              <motion.h1 
                className="text-4xl md:text-5xl font-black text-custom-dark leading-tight cursor-default"
                variants={textStaggerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.span variants={textItemVariants}>Transform Your</motion.span>
                <motion.span 
                  className="block text-custom-dark/70"
                  variants={textItemVariants}
                >
                  Business Operations
                </motion.span>
              </motion.h1>
              <p className="text-base text-custom-dark/60 leading-relaxed max-w-2xl font-light">
                Increase efficiency and reduce costs with our intelligent automation solutions. Let us handle the repetitive work so you can focus on growth.
              </p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-8 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
              >
                <motion.a 
                  href="https://wa.me/447576385099?text=Hello, I would like to get a free consultation" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-custom-dark text-custom-light px-8 py-3 rounded-xl hover:bg-custom-dark/80 transition-all duration-700 font-semibold shadow-xl hover:shadow-custom-light/25 relative overflow-hidden group text-base inline-flex items-center justify-center"
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-custom-light/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
                  <span className="relative flex items-center justify-center">
                    <motion.div
                      whileHover={{ rotate: 12 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                      <Zap className="w-5 h-5 mr-2" />
                    </motion.div>
                  Book Free Consultation
                  </span>
                </motion.a>
                <motion.a 
                  href="#solutions" 
                  className="border-2 border-custom-dark/30 text-custom-dark px-8 py-3 rounded-xl hover:bg-custom-light/60 hover:border-custom-dark hover:text-custom-dark transition-all duration-700 font-semibold backdrop-blur-sm hover:shadow-xl text-base group inline-flex items-center justify-center"
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                  <span className="flex items-center justify-center">
                    <motion.div
                      whileHover={{ rotate: 12 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                      <Layers className="w-5 h-5 mr-2" />
                    </motion.div>
                  View Solutions
                  </span>
                </motion.a>
              </motion.div>
            </motion.div>
            <div className="flex justify-center lg:justify-end animate-in slide-in-from-right duration-1000 delay-300">
              <div className="relative">
                <div className="w-[28rem] h-[28rem] border-2 border-dashed border-custom-dark/30 rounded-full flex items-center justify-center relative animate-spin-slow">
                  <div className="w-24 h-24 bg-custom-dark rounded-2xl flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-700 cursor-pointer group animate-glow">
                    <Cpu className="w-10 h-10 text-white group-hover:rotate-180 transition-transform duration-700" />
                  </div>
                  {/* Workflow nodes */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-custom-dark rounded-2xl flex items-center justify-center shadow-2xl hover:scale-125 transition-all duration-700 cursor-pointer animate-float">
                    <span className="text-custom-light text-xs font-black">DATA</span>
                  </div>
                  <div className="absolute top-1/2 right-8 transform -translate-y-1/2 w-16 h-16 bg-custom-dark rounded-2xl flex items-center justify-center shadow-2xl hover:scale-125 transition-all duration-700 cursor-pointer animate-float delay-200">
                    <span className="text-custom-light text-xs font-black">AUTO</span>
                  </div>
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-custom-dark rounded-2xl flex items-center justify-center shadow-2xl hover:scale-125 transition-all duration-700 cursor-pointer animate-float delay-500">
                    <span className="text-custom-light text-xs font-black">FLOW</span>
                  </div>
                  <div className="absolute top-1/2 left-8 transform -translate-y-1/2 w-16 h-16 bg-custom-dark rounded-2xl flex items-center justify-center shadow-2xl hover:scale-125 transition-all duration-700 cursor-pointer animate-float delay-700">
                    <span className="text-custom-light text-xs font-black">WORK</span>
                  </div>
                  <div className="absolute top-24 right-24 w-14 h-14 bg-custom-light/80 rounded-2xl shadow-xl hover:scale-110 transition-all duration-700 cursor-pointer animate-pulse"></div>
                  <div className="absolute bottom-24 right-24 w-14 h-14 bg-custom-light/80 rounded-2xl shadow-xl hover:scale-110 transition-all duration-700 cursor-pointer animate-pulse delay-300"></div>
                  <div className="absolute bottom-24 left-24 w-14 h-14 bg-custom-light/80 rounded-2xl shadow-xl hover:scale-110 transition-all duration-700 cursor-pointer animate-pulse delay-700"></div>
                  <div className="absolute top-24 left-24 w-14 h-14 bg-custom-light/80 rounded-2xl shadow-xl hover:scale-110 transition-all duration-700 cursor-pointer animate-pulse delay-1000"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-32 bg-gradient-to-b from-white to-custom-light/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-custom-light to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 animate-in fade-in duration-1000">
            <div className="inline-flex items-center px-6 py-3 bg-custom-light/60 border border-custom-light/70 rounded-full text-custom-dark/70 text-sm font-bold mb-8 shadow-lg backdrop-blur-sm hover:scale-105 transition-all duration-700 cursor-pointer">
              <Target className="w-5 h-5 mr-3 animate-pulse" />
              What We Do
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-custom-dark mb-8 hover:text-custom-dark/80 transition-all duration-1000 cursor-default">
              Business Optimization Solutions
            </h2>
            <p className="text-base text-custom-dark/60 max-w-4xl mx-auto leading-relaxed font-light">
              We offer comprehensive solutions to streamline every aspect of your business operations, tailored to your specific needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Process Automation */}
            <div className="text-center p-12 bg-custom-light/40 backdrop-blur-xl rounded-3xl hover:shadow-2xl hover:shadow-custom-light/30 transition-all duration-700 border border-custom-light/60 group hover:-translate-y-4 hover:scale-105 animate-in slide-in-from-bottom duration-1000">
              <div className="w-24 h-24 bg-custom-dark rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 relative overflow-hidden animate-glow">
                <span className="absolute inset-0 bg-gradient-to-r from-custom-light/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
                <Zap className="w-10 h-10 text-white relative z-10 group-hover:animate-pulse" />
              </div>
              <h3 className="text-xl font-black text-custom-dark mb-8 group-hover:text-custom-dark/80 transition-colors duration-700">
                Workflow Optimization
              </h3>
              <p className="text-custom-dark/60 leading-relaxed text-base font-light group-hover:text-custom-dark/70 transition-colors duration-700">
                Streamline repetitive tasks and processes across all departments. Free up your team to focus on strategic initiatives that drive growth.
              </p>
            </div>

            {/* Data Integration */}
            <div className="text-center p-12 bg-custom-light/50 backdrop-blur-xl rounded-3xl hover:shadow-2xl hover:shadow-custom-light/40 transition-all duration-700 border border-custom-light/70 group hover:-translate-y-4 hover:scale-105 animate-in slide-in-from-bottom duration-1000 delay-200">
              <div className="w-24 h-24 bg-custom-dark rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 relative overflow-hidden animate-glow">
                <span className="absolute inset-0 bg-gradient-to-r from-custom-light/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
                <Globe className="w-10 h-10 text-white relative z-10 group-hover:animate-spin" />
              </div>
              <h3 className="text-xl font-black text-custom-dark mb-8 group-hover:text-custom-dark/80 transition-colors duration-700">
                System Integration
              </h3>
              <p className="text-custom-dark/60 leading-relaxed text-base font-light group-hover:text-custom-dark/70 transition-colors duration-700">
                Connect disparate systems and applications, creating a unified platform for reliable data flow and streamlined business workflows.
              </p>
            </div>

            {/* Custom AI Models */}
            <div className="text-center p-12 bg-custom-light/40 backdrop-blur-xl rounded-3xl hover:shadow-2xl hover:shadow-custom-light/30 transition-all duration-700 border border-custom-light/60 group hover:-translate-y-4 hover:scale-105 animate-in slide-in-from-bottom duration-1000 delay-500">
              <div className="w-24 h-24 bg-custom-dark rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 relative overflow-hidden animate-glow">
                <span className="absolute inset-0 bg-gradient-to-r from-custom-light/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
                <Target className="w-10 h-10 text-white relative z-10 group-hover:animate-bounce" />
              </div>
              <h3 className="text-xl font-black text-custom-dark mb-8 group-hover:text-custom-dark/80 transition-colors duration-700">
                Smart Analytics
              </h3>
              <p className="text-custom-dark/60 leading-relaxed text-base font-light group-hover:text-custom-dark/70 transition-colors duration-700">
                Advanced analytics solutions to solve your unique business challenges. From predictive insights to intelligent data processing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 bg-gradient-to-br from-custom-light/20 via-white to-custom-light/40 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-custom-light to-transparent"></div>
        <div className="absolute top-20 right-20 w-80 h-80 bg-custom-light/30 rounded-full blur-3xl animate-float"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 animate-in fade-in duration-1000">
            <div className="inline-flex items-center px-6 py-3 bg-custom-light/60 border border-custom-light/70 rounded-full text-custom-dark/70 text-sm font-bold mb-8 shadow-lg backdrop-blur-sm hover:scale-105 transition-all duration-700 cursor-pointer">
              <TrendingUp className="w-5 h-5 mr-3 animate-bounce" />
              Pricing Plans
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-custom-dark mb-8 hover:text-custom-dark/80 transition-all duration-1000 cursor-default">
              Flexible Pricing for Every Scale
            </h2>
            <p className="text-base text-custom-dark/60 max-w-4xl mx-auto leading-relaxed font-light">
              Transparent pricing plans designed to fit your business needs, from startups to large enterprises. No hidden fees, just pure value.
            </p>
          </div>

          <div className="flex justify-center">
            {/* Growth Plan */}
            <div className="bg-custom-light/60 backdrop-blur-xl border-2 border-custom-dark/50 rounded-3xl p-12 relative hover:shadow-2xl hover:shadow-custom-light/40 transition-all duration-700 hover:-translate-y-4 group animate-in slide-in-from-bottom duration-1000 delay-200 max-w-md">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-custom-dark text-custom-light px-8 py-3 rounded-full text-sm font-black shadow-2xl animate-glow">
                MOST POPULAR
              </div>
              <h3 className="text-xl font-black text-custom-dark mb-4 group-hover:text-custom-dark/80 transition-colors duration-700">Growth</h3>
              <p className="text-custom-dark/60 mb-10 text-base font-light leading-relaxed">For growing businesses aiming to scale their operations efficiently.</p>
              <div className="mb-10">
                <span className="text-4xl font-black text-custom-dark animate-pulse">$200</span>
              </div>
              <ul className="space-y-5 mb-12">
                <li className="flex items-center">
                  <Check className="w-7 h-7 text-custom-dark mr-5 group-hover:scale-110 transition-transform duration-500" />
                  <span className="text-custom-dark/70 text-base font-medium">Up to 15 Workflows</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-7 h-7 text-custom-dark mr-5 group-hover:scale-110 transition-transform duration-500" />
                  <span className="text-custom-dark/70 text-base font-medium">Advanced Integrations</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-7 h-7 text-custom-dark mr-5 group-hover:scale-110 transition-transform duration-500" />
                  <span className="text-custom-dark/70 text-base font-medium">Priority Support</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-7 h-7 text-custom-dark mr-5 group-hover:scale-110 transition-transform duration-500" />
                  <span className="text-custom-dark/70 text-base font-medium">Dedicated Account Manager</span>
                </li>
              </ul>
              <button className="w-full bg-custom-dark text-custom-light py-3 rounded-xl hover:bg-custom-dark/80 transition-all duration-700 font-semibold text-base shadow-xl hover:shadow-custom-light/25 hover:scale-105 relative overflow-hidden group animate-glow">
                <span className="absolute inset-0 bg-gradient-to-r from-custom-light/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
                <span className="relative">
                Choose Plan
                </span>
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* Success Stories Section */}
      <section id="success" className="py-32 bg-gradient-to-b from-white to-custom-light/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-custom-light to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Statistics */}
          <div className="grid md:grid-cols-3 gap-20 text-center mb-24">
            <div className="group relative animate-in slide-in-from-bottom duration-1000">
              <div className="absolute inset-0 bg-custom-light/60 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 transform scale-95 group-hover:scale-105 backdrop-blur-sm"></div>
              <div className="relative z-10 py-16 px-10">
                <div className="text-5xl md:text-6xl font-black text-custom-dark mb-6 group-hover:scale-125 transition-all duration-700 animate-pulse cursor-default">150+</div>
                <div className="text-custom-dark/70 text-base font-bold tracking-wide group-hover:text-custom-dark transition-colors duration-700">Solutions Delivered</div>
                <div className="w-20 h-1.5 bg-custom-dark mx-auto mt-6 rounded-full group-hover:w-32 transition-all duration-700"></div>
              </div>
            </div>
            <div className="group relative animate-in slide-in-from-bottom duration-1000 delay-200">
              <div className="absolute inset-0 bg-custom-light/60 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 transform scale-95 group-hover:scale-105 backdrop-blur-sm"></div>
              <div className="relative z-10 py-16 px-10">
                <div className="text-5xl md:text-6xl font-black text-custom-dark mb-6 group-hover:scale-125 transition-all duration-700 animate-pulse cursor-default">40k+</div>
                <div className="text-custom-dark/70 text-base font-bold tracking-wide group-hover:text-custom-dark transition-colors duration-700">Hours Saved for Clients</div>
                <div className="w-20 h-1.5 bg-custom-dark mx-auto mt-6 rounded-full group-hover:w-32 transition-all duration-700"></div>
              </div>
            </div>
            <div className="group relative animate-in slide-in-from-bottom duration-1000 delay-500">
              <div className="absolute inset-0 bg-custom-light/60 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 transform scale-95 group-hover:scale-105 backdrop-blur-sm"></div>
              <div className="relative z-10 py-16 px-10">
                <div className="text-5xl md:text-6xl font-black text-custom-dark mb-6 group-hover:scale-125 transition-all duration-700 animate-pulse cursor-default">99%</div>
                <div className="text-custom-dark/70 text-base font-bold tracking-wide group-hover:text-custom-dark transition-colors duration-700">Client Satisfaction Rate</div>
                <div className="w-20 h-1.5 bg-custom-dark mx-auto mt-6 rounded-full group-hover:w-32 transition-all duration-700"></div>
              </div>
            </div>
          </div>

          {/* Section Header */}
          <div className="text-center mb-24 animate-in fade-in duration-1000">
            <div className="inline-flex items-center px-6 py-3 bg-custom-light/60 border border-custom-light/70 rounded-full text-custom-dark/70 text-sm font-bold mb-8 shadow-lg backdrop-blur-sm hover:scale-105 transition-all duration-700 cursor-pointer">
              <Award className="w-5 h-5 mr-3 animate-pulse" />
              Client Success
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-custom-dark mb-8 hover:text-custom-dark/80 transition-all duration-1000 cursor-default">
              Success Stories
            </h2>
            <p className="text-base text-custom-dark/60 max-w-4xl mx-auto leading-relaxed font-light">
              See how we've helped businesses like yours achieve remarkable results through intelligent automation.
            </p>
          </div>

          {/* Success Story Cards */}
          <div className="grid md:grid-cols-3 gap-12">
            {/* Shopify Story */}
            <div className="bg-custom-light/40 backdrop-blur-xl border border-custom-light/60 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-custom-light/30 transition-all duration-700 group hover:-translate-y-4 hover:scale-105 animate-in slide-in-from-bottom duration-1000">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop" 
                alt="Shopify store optimization"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="p-10">
                <h3 className="text-lg font-black text-custom-dark mb-6 group-hover:text-custom-dark/80 transition-colors duration-700">
                  Shopify Store Automates Visual Content by 150%
                </h3>
                <p className="text-custom-dark/60 mb-8 leading-relaxed text-base font-light group-hover:text-custom-dark/70 transition-colors duration-700">
                  Automated visual content generation and product image processing for a Shopify store, creating thousands of marketing visuals and boosting conversion rates.
                </p>
                <Link to="/shopify-success-story" className="text-custom-dark hover:text-custom-dark/80 font-black flex items-center text-base group-hover:translate-x-4 transition-all duration-700">
                  Read More <ArrowRight className="w-6 h-6 ml-3 group-hover:rotate-12 transition-transform duration-700" />
                </Link>
              </div>
            </div>

            {/* Graphic Design Story */}
            <div className="bg-custom-light/40 backdrop-blur-xl border border-custom-light/60 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-custom-light/30 transition-all duration-700 group hover:-translate-y-4 hover:scale-105 animate-in slide-in-from-bottom duration-1000 delay-200">
              <img 
                src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop" 
                alt="Graphic design automation"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="p-10">
                <h3 className="text-lg font-black text-custom-dark mb-6 group-hover:text-custom-dark/80 transition-colors duration-700">
                  Design Agency Automates Visual Production by 60%
                </h3>
                <p className="text-custom-dark/60 mb-8 leading-relaxed text-base font-light group-hover:text-custom-dark/70 transition-colors duration-700">
                  Automated visual content creation and batch processing for a creative agency, generating hundreds of marketing materials and social media visuals daily.
                </p>
                <Link to="/graphic-design-success-story" className="text-custom-dark hover:text-custom-dark/80 font-black flex items-center text-base group-hover:translate-x-4 transition-all duration-700">
                  Read More <ArrowRight className="w-6 h-6 ml-3 group-hover:rotate-12 transition-transform duration-700" />
                </Link>
              </div>
            </div>

            {/* E-commerce Story */}
            <div className="bg-custom-light/40 backdrop-blur-xl border border-custom-light/60 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-custom-light/30 transition-all duration-700 group hover:-translate-y-4 hover:scale-105 animate-in slide-in-from-bottom duration-1000 delay-500">
              <img 
                src="https://images.pexels.com/photos/1006070/pexels-photo-1006070.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop" 
                alt="E-commerce automation"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="p-10">
                <h3 className="text-lg font-black text-custom-dark mb-6 group-hover:text-custom-dark/80 transition-colors duration-700">
                  E-commerce Platform Automates Visual Assets by 40%
                </h3>
                <p className="text-custom-dark/60 mb-8 leading-relaxed text-base font-light group-hover:text-custom-dark/70 transition-colors duration-700">
                  Automated product visualization and marketing asset generation for an online marketplace, creating personalized product images and promotional content at scale.
                </p>
                <Link to="/ecommerce-success-story" className="text-custom-dark hover:text-custom-dark/80 font-black flex items-center text-base group-hover:translate-x-4 transition-all duration-700">
                  Read More <ArrowRight className="w-6 h-6 ml-3 group-hover:rotate-12 transition-transform duration-700" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gradient-to-br from-custom-light/20 via-white to-custom-light/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2760%27 height=%2760%27 viewBox=%270 0 60 60%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27none%27 fill-rule=%27evenodd%27%3E%3Cg fill=%27%23dde0de%27 fill-opacity=%270.3%27%3E%3Ccircle cx=%2730%27 cy=%2730%27 r=%271%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-custom-light/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-custom-light/20 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 relative z-10 animate-in fade-in duration-1000">
            <div className="inline-flex items-center px-6 py-3 bg-custom-light/60 border border-custom-light/70 rounded-full text-custom-dark/70 text-sm font-bold mb-8 shadow-lg backdrop-blur-sm hover:scale-105 transition-all duration-700 cursor-pointer">
              <Mail className="w-5 h-5 mr-3 animate-bounce" />
              Get In Touch
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-custom-dark mb-8 hover:text-custom-dark/80 transition-all duration-1000 cursor-default">
              Ready to Optimize Your Operations?
            </h2>
            <p className="text-base text-custom-dark/60 leading-relaxed font-light">
              Let's discuss how we can streamline your business processes. Fill out the form below or book a free consultation to get started.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-custom-light/50 backdrop-blur-xl rounded-3xl shadow-2xl p-12 relative z-10 border border-custom-light/70 hover:shadow-custom-light/30 transition-all duration-700 animate-in slide-in-from-bottom duration-1000">
            <div className="mb-10">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                disabled={isSubmitting}
                required
                className="w-full px-8 py-5 border border-custom-dark/30 rounded-2xl focus:ring-4 focus:ring-custom-dark/20 focus:border-custom-dark outline-none transition-all duration-700 text-base bg-custom-light/30 focus:bg-custom-light/60 backdrop-blur-sm hover:border-custom-dark/60 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
            
            <div className="mb-10">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                disabled={isSubmitting}
                required
                className="w-full px-8 py-5 border border-custom-dark/30 rounded-2xl focus:ring-4 focus:ring-custom-dark/20 focus:border-custom-dark outline-none transition-all duration-700 text-base bg-custom-light/30 focus:bg-custom-light/60 backdrop-blur-sm hover:border-custom-dark/60 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
            
            <div className="mb-12">
              <textarea
                name="message"
                placeholder="Tell us about your project..."
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                disabled={isSubmitting}
                required
                className="w-full px-8 py-5 border border-custom-dark/30 rounded-2xl focus:ring-4 focus:ring-custom-dark/20 focus:border-custom-dark outline-none transition-all duration-700 text-base bg-custom-light/30 focus:bg-custom-light/60 backdrop-blur-sm hover:border-custom-dark/60 font-medium resize-none disabled:opacity-50 disabled:cursor-not-allowed"
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-custom-dark text-custom-light py-4 rounded-xl hover:bg-custom-dark/80 transition-all duration-700 font-bold text-base shadow-xl hover:shadow-custom-light/25 transform hover:-translate-y-2 hover:scale-105 relative overflow-hidden group animate-glow disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:-translate-y-0"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-custom-light/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
              <span className="relative flex items-center justify-center">
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 mr-2 border-2 border-custom-light/30 border-t-custom-light rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-700" />
                    Send Message
                  </>
                )}
              </span>
            </button>
            
            {submitMessage && (
              <div className={`mt-6 p-4 rounded-xl text-center font-medium transition-all duration-700 ${
                submitMessage.includes('Thank you') 
                  ? 'bg-green-100 text-green-800 border border-green-200' 
                  : 'bg-red-100 text-red-800 border border-red-200'
              }`}>
                {submitMessage}
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-custom-dark text-custom-light py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-custom-light/20 to-transparent"></div>
        <div className="absolute top-10 left-10 w-64 h-64 bg-custom-light/10 rounded-full blur-3xl animate-float"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-16">
            {/* Company Info */}
            <div className="animate-in slide-in-from-bottom duration-1000">
              <div className="flex items-center mb-8 group cursor-pointer">
                <img 
                  src="/genifyy_ai_logo.jpeg" 
                  alt="Genify AI Logo" 
                  className="w-10 h-10 rounded-xl shadow-2xl bg-white p-1 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
                />
                <span className="ml-3 text-xl font-bold text-custom-light group-hover:text-custom-light/80 transition-all duration-700 tracking-wide bg-gradient-to-r from-custom-light to-custom-light/80 bg-clip-text text-transparent hover:from-custom-light/90 hover:to-custom-light/60 drop-shadow-sm">Genify AI</span>
              </div>
              <p className="text-custom-light/70 leading-relaxed text-base font-light hover:text-custom-light transition-colors duration-700">
                Transforming business operations through intelligent optimization and seamless integration solutions.
              </p>
            </div>

            {/* Company */}
            <div className="animate-in slide-in-from-bottom duration-1000 delay-200">
              <h3 className="font-bold text-custom-light mb-8 text-base">Company</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-custom-light/70 hover:text-custom-light transition-all duration-700 text-sm hover:translate-x-2 block">About Us</a></li>
                <li><a href="#" className="text-custom-light/70 hover:text-custom-light transition-all duration-700 text-sm hover:translate-x-2 block">Success Stories</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="animate-in slide-in-from-bottom duration-1000 delay-400">
              <h3 className="font-bold text-custom-light mb-8 text-base">Legal</h3>
              <ul className="space-y-4">
                <li><Link to="/privacy-policy" className="text-custom-light/70 hover:text-custom-light transition-all duration-700 text-sm hover:translate-x-2 block">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service" className="text-custom-light/70 hover:text-custom-light transition-all duration-700 text-sm hover:translate-x-2 block">Terms of Service</Link></li>
                <li><Link to="/cookie-policy" className="text-custom-light/70 hover:text-custom-light transition-all duration-700 text-sm hover:translate-x-2 block">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-custom-light/20 pt-12 mt-16">
            <p className="text-center text-custom-light/60 text-sm font-light hover:text-custom-light transition-colors duration-700 cursor-default">
              © 2025 Genify AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
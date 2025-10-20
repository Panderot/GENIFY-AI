import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, Home, ArrowLeft } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-custom-light/90 backdrop-blur-xl shadow-2xl sticky top-0 z-50 border-b border-custom-light/30 transition-all duration-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center group cursor-pointer transform hover:scale-105 transition-all duration-500">
              <img 
                src="/genifyy_ai_logo.jpeg" 
                alt="Genify AI Logo" 
                className="w-10 h-10 rounded-xl shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
              />
              <span className="ml-3 text-xl font-bold text-custom-dark group-hover:text-custom-dark/80 transition-all duration-500 tracking-wide bg-gradient-to-r from-custom-dark to-custom-dark/80 bg-clip-text text-transparent hover:from-custom-dark/90 hover:to-custom-dark/60">Genify AI</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link to="/#solutions" className="text-custom-dark/70 hover:text-custom-dark transition-all duration-500 font-medium relative group py-2 text-sm">
                Solutions
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-custom-dark rounded-full transition-all duration-500 group-hover:w-full"></span>
                <span className="absolute inset-0 bg-custom-light/50 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10 backdrop-blur-sm"></span>
              </Link>
              <Link to="/#pricing" className="text-custom-dark/70 hover:text-custom-dark transition-all duration-500 font-medium relative group py-2 text-sm">
                Pricing
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-custom-dark rounded-full transition-all duration-500 group-hover:w-full"></span>
                <span className="absolute inset-0 bg-custom-light/50 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10 backdrop-blur-sm"></span>
              </Link>
              <Link to="/#success" className="text-custom-dark/70 hover:text-custom-dark transition-all duration-500 font-medium relative group py-2 text-sm">
                Success Stories
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-custom-dark rounded-full transition-all duration-500 group-hover:w-full"></span>
                <span className="absolute inset-0 bg-custom-light/50 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10 backdrop-blur-sm"></span>
              </Link>
              <Link to="/#contact" className="text-custom-dark/70 hover:text-custom-dark transition-all duration-500 font-medium relative group py-2 text-sm">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-custom-dark rounded-full transition-all duration-500 group-hover:w-full"></span>
                <span className="absolute inset-0 bg-custom-light/50 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10 backdrop-blur-sm"></span>
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link to="/#contact">
                <button className="bg-custom-dark text-custom-light px-5 py-2 rounded-lg hover:bg-custom-dark/80 transition-all duration-700 font-medium shadow-lg hover:shadow-custom-light/25 transform hover:-translate-y-1 hover:scale-105 relative overflow-hidden group animate-glow text-sm">
                  <span className="absolute inset-0 bg-gradient-to-r from-custom-light/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
                  <span className="relative flex items-center">
                    <Sparkles className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-500" />
                  Get Started
                  </span>
                </button>
              </Link>
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
                <Link to="/#solutions" className="text-custom-dark/70 hover:text-custom-dark font-medium transition-all duration-500 hover:translate-x-2 text-sm">Solutions</Link>
                <Link to="/#pricing" className="text-custom-dark/70 hover:text-custom-dark font-medium transition-all duration-500 hover:translate-x-2 text-sm">Pricing</Link>
                <Link to="/#success" className="text-custom-dark/70 hover:text-custom-dark font-medium transition-all duration-500 hover:translate-x-2 text-sm">Success Stories</Link>
                <Link to="/#contact" className="text-custom-dark/70 hover:text-custom-dark font-medium transition-all duration-500 hover:translate-x-2 text-sm">Contact</Link>
                <Link to="/goal-selection">
                  <button className="bg-custom-dark text-custom-light px-5 py-2 rounded-lg w-fit font-medium shadow-lg hover:shadow-custom-light/25 transform hover:scale-105 transition-all duration-700 text-sm">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Floating Back Button */}
      {!isHomePage && (
        <div className="fixed bottom-8 left-8 z-50">
          <Link to="/">
            <button className="bg-custom-dark text-custom-light p-4 rounded-2xl shadow-2xl hover:bg-custom-dark/80 transition-all duration-700 transform hover:-translate-y-2 hover:scale-110 relative overflow-hidden group animate-glow">
              <span className="absolute inset-0 bg-gradient-to-r from-custom-light/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
              <ArrowLeft className="w-6 h-6 relative z-10 group-hover:-translate-x-1 transition-transform duration-500" />
            </button>
          </Link>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-custom-dark text-custom-light py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-custom-light/20 to-transparent"></div>
        <div className="absolute top-10 left-10 w-64 h-64 bg-custom-light/10 rounded-full blur-3xl animate-float"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-16">
            {/* Company Info */}
            <div className="animate-in slide-in-from-bottom duration-1000">
              <div className="flex items-center mb-8 group cursor-pointer">
                <Link to="/" className="flex items-center">
                  <img 
                    src="/genifyy_ai_logo.jpeg" 
                    alt="Genify AI Logo" 
                    className="w-10 h-10 rounded-xl shadow-2xl bg-white p-1 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
                  />
                  <span className="ml-3 text-xl font-bold text-custom-light group-hover:text-custom-light/80 transition-all duration-700 tracking-wide bg-gradient-to-r from-custom-light to-custom-light/80 bg-clip-text text-transparent hover:from-custom-light/90 hover:to-custom-light/60 drop-shadow-sm">Genify AI</span>
                </Link>
              </div>
              <p className="text-custom-light/70 leading-relaxed text-base font-light hover:text-custom-light transition-colors duration-700">
                Transforming business operations through intelligent optimization and seamless integration solutions.
              </p>
            </div>


            {/* Company */}
            <div className="animate-in slide-in-from-bottom duration-1000 delay-200">
              <h3 className="font-bold text-custom-light mb-8 text-base">Company</h3>
              <ul className="space-y-4">
                <li><Link to="/about-us" className="text-custom-light/70 hover:text-custom-light transition-all duration-700 text-sm hover:translate-x-2 block">About Us</Link></li>
                <li><Link to="/#success" className="text-custom-light/70 hover:text-custom-light transition-all duration-700 text-sm hover:translate-x-2 block">Success Stories</Link></li>
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

export default Layout;

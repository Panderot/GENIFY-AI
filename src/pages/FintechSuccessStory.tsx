import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, TrendingUp, Users, Clock, Target, Award, Zap } from 'lucide-react';

function FintechSuccessStory() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-custom-light/90 backdrop-blur-xl shadow-2xl sticky top-0 z-50 border-b border-custom-light/30 transition-all duration-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center group cursor-pointer transform hover:scale-105 transition-all duration-500">
              <img 
                src="/genifyy_ai_logo.jpeg" 
                alt="Genify AI Logo" 
                className="w-10 h-10 rounded-xl shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
              />
              <span className="ml-3 text-xl font-bold text-custom-dark group-hover:text-custom-dark/80 transition-all duration-500 tracking-wide bg-gradient-to-r from-custom-dark to-custom-dark/80 bg-clip-text text-transparent hover:from-custom-dark/90 hover:to-custom-dark/60">Genify AI</span>
            </Link>
            
            <Link 
              to="/#success" 
              className="flex items-center text-custom-dark/70 hover:text-custom-dark transition-all duration-500 font-medium group"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Success Stories
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-custom-light/30 via-white to-custom-light/50 py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2760%27 height=%2760%27 viewBox=%270 0 60 60%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27none%27 fill-rule=%27evenodd%27%3E%3Cg fill=%27%23dde0de%27 fill-opacity=%270.3%27%3E%3Ccircle cx=%2730%27 cy=%2730%27 r=%271%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-custom-light/40 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-custom-light/30 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
            <div className="space-y-10 animate-in slide-in-from-left duration-1000">
              <div className="inline-flex items-center px-6 py-3 bg-custom-light/60 border border-custom-light/70 rounded-full text-custom-dark text-sm font-bold shadow-lg backdrop-blur-sm hover:scale-105 transition-all duration-700 cursor-pointer">
                <TrendingUp className="w-5 h-5 mr-3 animate-pulse" />
                Fintech Success Story
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-custom-dark leading-tight hover:text-custom-dark/80 transition-all duration-1000 cursor-default">
                Fintech Startup Reduces
                <span className="block text-custom-light animate-pulse">
                  Onboarding Time by 80%
                </span>
              </h1>
              <p className="text-base text-custom-dark/60 leading-relaxed max-w-2xl font-light">
                Discover how we transformed a growing fintech company's customer onboarding process through intelligent automation, reducing manual work and dramatically improving user experience.
              </p>
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center bg-custom-light/40 rounded-xl px-4 py-2 backdrop-blur-sm">
                  <Check className="w-5 h-5 text-custom-dark mr-3" />
                  <span className="text-custom-dark font-medium text-sm">80% Time Reduction</span>
                </div>
                <div className="flex items-center bg-custom-light/40 rounded-xl px-4 py-2 backdrop-blur-sm">
                  <Check className="w-5 h-5 text-custom-dark mr-3" />
                  <span className="text-custom-dark font-medium text-sm">95% Accuracy</span>
                </div>
                <div className="flex items-center bg-custom-light/40 rounded-xl px-4 py-2 backdrop-blur-sm">
                  <Check className="w-5 h-5 text-custom-dark mr-3" />
                  <span className="text-custom-dark font-medium text-sm">3x Faster Processing</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end animate-in slide-in-from-right duration-1000 delay-300">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=600&q=80" 
                  alt="Modern fintech team working with digital financial technology"
                  className="w-full h-96 object-cover rounded-3xl shadow-2xl hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-custom-dark/20 to-transparent rounded-3xl"></div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-custom-light/80 rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-sm animate-float">
                  <TrendingUp className="w-12 h-12 text-custom-dark animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-32 bg-gradient-to-b from-white to-custom-light/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-custom-light to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-in slide-in-from-bottom duration-1000">
            <div className="inline-flex items-center px-6 py-3 bg-custom-light/60 border border-custom-light/70 rounded-full text-custom-dark text-sm font-bold mb-8 shadow-lg backdrop-blur-sm hover:scale-105 transition-all duration-700 cursor-pointer">
              <Clock className="w-5 h-5 mr-3 animate-pulse" />
              The Challenge
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-custom-dark leading-tight hover:text-custom-dark/80 transition-all duration-1000 cursor-default mb-8">
              Overcoming Operational
              <span className="block text-custom-dark/70 animate-pulse">
                Bottlenecks
              </span>
            </h2>
            <p className="text-base text-custom-dark/60 leading-relaxed max-w-3xl mx-auto font-light">
              The fintech startup faced significant challenges that were hindering growth and customer satisfaction.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8 animate-in slide-in-from-left duration-1000">
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 border border-custom-light/30">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                    <Clock className="w-8 h-8 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-custom-dark mb-3">Time-Intensive Manual Process</h3>
                    <p className="text-custom-dark/60 leading-relaxed text-base font-light">Customer onboarding took 5-7 days with multiple manual verification steps and document processing.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 border border-custom-light/30">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                    <Users className="w-8 h-8 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-custom-dark mb-3">High Customer Drop-off Rate</h3>
                    <p className="text-custom-dark/60 leading-relaxed text-base font-light">45% of potential customers abandoned the onboarding process due to complexity and delays.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 border border-custom-light/30">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                    <Target className="w-8 h-8 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-custom-dark mb-3">Scalability Limitations</h3>
                    <p className="text-custom-dark/60 leading-relaxed text-base font-light">Manual processes couldn't handle the growing customer base and were prone to errors.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-in slide-in-from-right duration-1000 delay-200">
              <div className="bg-custom-light/40 backdrop-blur-xl border border-custom-light/60 rounded-3xl p-10 shadow-2xl hover:shadow-custom-light/30 transition-all duration-700">
                <h3 className="text-2xl font-black text-custom-dark mb-8 text-center">Before Implementation</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center py-4 px-6 bg-white/60 rounded-2xl backdrop-blur-sm border border-custom-light/30">
                    <span className="text-custom-dark/70 font-medium">Average Onboarding Time</span>
                    <span className="font-black text-red-600 text-lg">5-7 days</span>
                  </div>
                  <div className="flex justify-between items-center py-4 px-6 bg-white/60 rounded-2xl backdrop-blur-sm border border-custom-light/30">
                    <span className="text-custom-dark/70 font-medium">Customer Drop-off Rate</span>
                    <span className="font-black text-red-600 text-lg">45%</span>
                  </div>
                  <div className="flex justify-between items-center py-4 px-6 bg-white/60 rounded-2xl backdrop-blur-sm border border-custom-light/30">
                    <span className="text-custom-dark/70 font-medium">Manual Processing Time</span>
                    <span className="font-black text-red-600 text-lg">15-20 hours</span>
                  </div>
                  <div className="flex justify-between items-center py-4 px-6 bg-white/60 rounded-2xl backdrop-blur-sm border border-custom-light/30">
                    <span className="text-custom-dark/70 font-medium">Error Rate</span>
                    <span className="font-black text-red-600 text-lg">12%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gradient-to-br from-custom-light/20 via-white to-custom-light/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-custom-dark mb-8">
              Our Solution
            </h2>
            <p className="text-lg text-custom-dark/60 leading-relaxed max-w-3xl mx-auto">
              We implemented a comprehensive automation system that streamlined the entire onboarding process while maintaining security and compliance standards.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-700 group hover:-translate-y-2">
              <div className="w-16 h-16 bg-custom-light/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Zap className="w-8 h-8 text-custom-dark" />
              </div>
              <h3 className="text-xl font-bold text-custom-dark mb-4">Smart Document Processing</h3>
              <p className="text-custom-dark/60 leading-relaxed">AI-powered document verification and data extraction with 99.5% accuracy.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-700 group hover:-translate-y-2">
              <div className="w-16 h-16 bg-custom-light/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Target className="w-8 h-8 text-custom-dark" />
              </div>
              <h3 className="text-xl font-bold text-custom-dark mb-4">Automated Workflow</h3>
              <p className="text-custom-dark/60 leading-relaxed">Intelligent routing and approval processes that adapt to different customer types.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-700 group hover:-translate-y-2">
              <div className="w-16 h-16 bg-custom-light/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Users className="w-8 h-8 text-custom-dark" />
              </div>
              <h3 className="text-xl font-bold text-custom-dark mb-4">Real-time Monitoring</h3>
              <p className="text-custom-dark/60 leading-relaxed">Comprehensive dashboard for tracking progress and identifying bottlenecks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-custom-dark mb-8">
              Remarkable Results
            </h2>
            <p className="text-lg text-custom-dark/60 leading-relaxed max-w-3xl mx-auto">
              The implementation delivered exceptional results that exceeded all expectations and transformed the company's operations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mr-6">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-green-600 mb-2">80% Time Reduction</h3>
                  <p className="text-custom-dark/60">Onboarding time reduced from 5-7 days to just 1 day</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mr-6">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-blue-600 mb-2">75% Drop-off Reduction</h3>
                  <p className="text-custom-dark/60">Customer completion rate improved from 55% to 95%</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mr-6">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-purple-600 mb-2">95% Accuracy Rate</h3>
                  <p className="text-custom-dark/60">Document processing accuracy improved significantly</p>
                </div>
              </div>
            </div>

            <div className="bg-custom-light/20 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-custom-dark mb-6">After Implementation</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-custom-light/30">
                  <span className="text-custom-dark/70">Average Onboarding Time</span>
                  <span className="font-bold text-green-600">1 day</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-custom-light/30">
                  <span className="text-custom-dark/70">Customer Drop-off Rate</span>
                  <span className="font-bold text-green-600">5%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-custom-light/30">
                  <span className="text-custom-dark/70">Processing Time</span>
                  <span className="font-bold text-green-600">2-3 hours</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-custom-dark/70">Error Rate</span>
                  <span className="font-bold text-green-600">0.5%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-custom-light/30 via-white to-custom-light/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2760%27 height=%2760%27 viewBox=%270 0 60 60%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27none%27 fill-rule=%27evenodd%27%3E%3Cg fill=%27%23dde0de%27 fill-opacity=%270.3%27%3E%3Ccircle cx=%2730%27 cy=%2730%27 r=%271%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-custom-light/40 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-custom-light/30 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-in slide-in-from-bottom duration-1000">
            <div className="inline-flex items-center px-6 py-3 bg-custom-light/60 border border-custom-light/70 rounded-full text-custom-dark text-sm font-bold mb-8 shadow-lg backdrop-blur-sm hover:scale-105 transition-all duration-700 cursor-pointer">
              <Zap className="w-5 h-5 mr-3 animate-pulse" />
              Get Started Today
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-custom-dark leading-tight hover:text-custom-dark/80 transition-all duration-1000 cursor-default mb-8">
              Ready to Transform
              <span className="block text-custom-dark/70 animate-pulse">
                Your Operations?
              </span>
            </h2>
            <p className="text-base text-custom-dark/60 leading-relaxed max-w-2xl mx-auto font-light mb-12">
              Let's discuss how we can help your organization achieve similar results with intelligent automation solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center pt-4">
              <Link 
                to="/#contact" 
                className="bg-custom-dark text-custom-light px-8 py-4 rounded-xl hover:bg-custom-dark/80 transition-all duration-700 font-semibold shadow-xl hover:shadow-custom-light/25 transform hover:-translate-y-2 hover:scale-105 relative overflow-hidden group text-base animate-glow"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-custom-light/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
                <span className="relative flex items-center justify-center">
                  <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-500" />
                  Start Your Project
                </span>
              </Link>
              <Link 
                to="/#success" 
                className="border-2 border-custom-dark/30 text-custom-dark px-8 py-4 rounded-xl hover:bg-custom-light/60 hover:border-custom-dark hover:text-custom-dark transition-all duration-700 font-semibold backdrop-blur-sm hover:shadow-xl hover:scale-105 text-base group"
              >
                <span className="flex items-center justify-center">
                  <Award className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-500" />
                  View More Stories
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FintechSuccessStory;

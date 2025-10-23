import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, TrendingUp, Heart, FileText, Target, Award, Zap, Users } from 'lucide-react';

function HealthcareSuccessStory() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-custom-light/90 backdrop-blur-xl shadow-2xl sticky top-0 z-50 border-b border-custom-light/30 transition-all duration-700">
        <div className="max-w-cls-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <Heart className="w-5 h-5 mr-3 animate-pulse" />
                Healthcare Success Story
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-custom-dark leading-tight hover:text-custom-dark/80 transition-all duration-1000 cursor-default">
                Healthcare Provider Streamlines
                <span className="block text-custom-light animate-pulse">
                  Patient Reporting
                </span>
              </h1>
              <p className="text-base text-custom-dark/60 leading-relaxed max-w-2xl font-light">
                Discover how we transformed a healthcare provider's patient reporting system, reducing administrative burden by 70% and improving patient care quality.
              </p>
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center bg-custom-light/40 rounded-xl px-4 py-2 backdrop-blur-sm">
                  <Check className="w-5 h-5 text-custom-dark mr-3" />
                  <span className="text-custom-dark font-medium text-sm">70% Time Savings</span>
                </div>
                <div className="flex items-center bg-custom-light/40 rounded-xl px-4 py-2 backdrop-blur-sm">
                  <Check className="w-5 h-5 text-custom-dark mr-3" />
                  <span className="text-custom-dark font-medium text-sm">98% Accuracy</span>
                </div>
                <div className="flex items-center bg-custom-light/40 rounded-xl px-4 py-2 backdrop-blur-sm">
                  <Check className="w-5 h-5 text-custom-dark mr-3" />
                  <span className="text-custom-dark font-medium text-sm">Real-time Insights</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end animate-in slide-in-from-right duration-1000 delay-300">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=600&q=80" 
                  alt="Modern healthcare professionals using advanced technology"
                  className="w-full h-96 object-cover rounded-3xl shadow-2xl hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-custom-dark/20 to-transparent rounded-3xl"></div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-custom-light/80 rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-sm animate-float">
                  <Heart className="w-12 h-12 text-custom-dark animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-custom-dark mb-8">
                The Challenge
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                    <FileText className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-custom-dark mb-2">Manual Data Collection</h3>
                    <p className="text-custom-dark/60 leading-relaxed">Healthcare staff spent 6-8 hours daily on manual patient data entry and report generation.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                    <Users className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-custom-dark mb-2">Staff Burnout</h3>
                    <p className="text-custom-dark/60 leading-relaxed">Administrative workload led to increased stress and reduced time for patient care.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                    <Target className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-custom-dark mb-2">Data Inconsistencies</h3>
                    <p className="text-custom-dark/60 leading-relaxed">Manual processes resulted in errors and inconsistent reporting across departments.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-custom-light/20 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-custom-dark mb-6">Before Implementation</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-custom-light/30">
                  <span className="text-custom-dark/70">Daily Admin Time</span>
                  <span className="font-bold text-red-600">6-8 hours</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-custom-light/30">
                  <span className="text-custom-dark/70">Report Accuracy</span>
                  <span className="font-bold text-red-600">78%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-custom-light/30">
                  <span className="text-custom-dark/70">Processing Time</span>
                  <span className="font-bold text-red-600">3-5 days</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-custom-dark/70">Staff Satisfaction</span>
                  <span className="font-bold text-red-600">45%</span>
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
              We developed a comprehensive patient reporting system that automates data collection, generates insights, and streamlines administrative workflows.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-700 group hover:-translate-y-2">
              <div className="w-16 h-16 bg-custom-light/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Zap className="w-8 h-8 text-custom-dark" />
              </div>
              <h3 className="text-xl font-bold text-custom-dark mb-4">Automated Data Collection</h3>
              <p className="text-custom-dark/60 leading-relaxed">Smart forms and integration with medical devices for seamless data capture.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-700 group hover:-translate-y-2">
              <div className="w-16 h-16 bg-custom-light/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <FileText className="w-8 h-8 text-custom-dark" />
              </div>
              <h3 className="text-xl font-bold text-custom-dark mb-4">Intelligent Reporting</h3>
              <p className="text-custom-dark/60 leading-relaxed">AI-powered report generation with customizable templates and real-time insights.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-700 group hover:-translate-y-2">
              <div className="w-16 h-16 bg-custom-light/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Heart className="w-8 h-8 text-custom-dark" />
              </div>
              <h3 className="text-xl font-bold text-custom-dark mb-4">Patient Care Focus</h3>
              <p className="text-custom-dark/60 leading-relaxed">Reduced administrative burden allows more time for direct patient care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-custom-dark mb-8">
              Exceptional Results
            </h2>
            <p className="text-lg text-custom-dark/60 leading-relaxed max-w-3xl mx-auto">
              The automated patient reporting system delivered outstanding improvements in efficiency and patient care quality.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mr-6">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-green-600 mb-2">70% Time Savings</h3>
                  <p className="text-custom-dark/60">Administrative time reduced from 6-8 hours to 1-2 hours daily</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mr-6">
                  <FileText className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-blue-600 mb-2">98% Accuracy</h3>
                  <p className="text-custom-dark/60">Report accuracy improved from 78% to 98% with automated validation</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mr-6">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-purple-600 mb-2">Real-time Processing</h3>
                  <p className="text-custom-dark/60">Report generation time reduced from 3-5 days to real-time</p>
                </div>
              </div>
            </div>

            <div className="bg-custom-light/20 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-custom-dark mb-6">After Implementation</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-custom-light/30">
                  <span className="text-custom-dark/70">Daily Admin Time</span>
                  <span className="font-bold text-green-600">1-2 hours</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-custom-light/30">
                  <span className="text-custom-dark/70">Report Accuracy</span>
                  <span className="font-bold text-green-600">98%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-custom-light/30">
                  <span className="text-custom-dark/70">Processing Time</span>
                  <span className="font-bold text-green-600">Real-time</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-custom-dark/70">Staff Satisfaction</span>
                  <span className="font-bold text-green-600">92%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-custom-light/20 via-white to-custom-light/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-custom-dark mb-8">
            Enhance Your Healthcare Operations
          </h2>
          <p className="text-lg text-custom-dark/60 leading-relaxed mb-12">
            Ready to streamline your patient reporting and improve care quality? Let's discuss how our automation solutions can transform your healthcare operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/#contact" 
              className="inline-flex items-center px-8 py-4 bg-custom-dark text-white font-bold rounded-2xl hover:bg-custom-dark/90 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Your Project
            </Link>
            <Link 
              to="/#success" 
              className="inline-flex items-center px-8 py-4 bg-white text-custom-dark font-bold rounded-2xl border-2 border-custom-dark hover:bg-custom-dark hover:text-white transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View More Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HealthcareSuccessStory;

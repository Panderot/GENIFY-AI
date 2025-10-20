import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Users, Award, Zap } from 'lucide-react';

export default function GraphicDesignSuccessStory() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-custom-light/90 backdrop-blur-xl shadow-2xl sticky top-0 z-50 border-b border-custom-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center group cursor-pointer transform hover:scale-105 transition-all duration-500">
              <img 
                src="/genifyy_ai_logo.jpeg" 
                alt="Genify AI Logo" 
                className="w-10 h-10 rounded-xl shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
              />
              <span className="ml-3 text-xl font-bold text-custom-dark group-hover:text-custom-dark/80 transition-all duration-500 tracking-wide">Genify AI</span>
            </Link>
            <Link 
              to="/" 
              className="flex items-center text-custom-dark/70 hover:text-custom-dark transition-all duration-500 font-medium group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-custom-light/30 via-white to-custom-light/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-custom-light/60 border border-custom-light/70 rounded-full text-custom-dark/70 text-sm font-bold mb-8 shadow-lg backdrop-blur-sm">
              <Award className="w-5 h-5 mr-3" />
              Success Story
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-custom-dark mb-8 leading-tight">
              Design Agency Cuts Project Time by 60%
            </h1>
            <p className="text-lg text-custom-dark/60 leading-relaxed max-w-3xl mx-auto">
              How we revolutionized a creative agency's workflow through intelligent automation, enabling them to deliver projects faster while maintaining exceptional quality.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Story Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-black text-custom-dark mb-6">The Challenge</h2>
                <p className="text-custom-dark/60 leading-relaxed mb-6">
                  A boutique design agency was struggling with time-consuming manual processes that were limiting their creative output. Their team of 8 designers was spending more time on administrative tasks than on actual design work.
                </p>
                <p className="text-custom-dark/60 leading-relaxed">
                  Project management, asset organization, client communication, and file delivery were all handled manually, leading to missed deadlines and frustrated clients. They needed a solution that would streamline their operations without compromising their creative process.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-black text-custom-dark mb-6">Our Solution</h2>
                <p className="text-custom-dark/60 leading-relaxed mb-6">
                  We implemented a comprehensive design workflow automation system that transformed their entire operation:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-custom-dark rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-custom-dark/60 leading-relaxed">Automated project setup with template generation and client onboarding</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-custom-dark rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-custom-dark/60 leading-relaxed">Intelligent asset management with automatic file organization and version control</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-custom-dark rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-custom-dark/60 leading-relaxed">Streamlined client communication with automated status updates and feedback collection</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-custom-dark rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-custom-dark/60 leading-relaxed">Automated delivery system with branded presentation and file sharing</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-black text-custom-dark mb-6">The Results</h2>
                <p className="text-custom-dark/60 leading-relaxed">
                  The automation system revolutionized their workflow, allowing the team to focus on what they do best: creating exceptional designs. The results exceeded all expectations and positioned them as industry leaders in efficient design delivery.
                </p>
              </div>
            </div>

            {/* Results Cards */}
            <div className="space-y-6">
              <div className="bg-custom-light/40 backdrop-blur-xl rounded-3xl p-8 border border-custom-light/60">
                <div className="flex items-center mb-4">
                  <Clock className="w-8 h-8 text-custom-dark mr-4" />
                  <h3 className="text-xl font-black text-custom-dark">Time Reduction</h3>
                </div>
                <div className="text-4xl font-black text-custom-dark mb-2">60%</div>
                <p className="text-custom-dark/60">Faster project completion time</p>
              </div>

              <div className="bg-custom-light/40 backdrop-blur-xl rounded-3xl p-8 border border-custom-light/60">
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-custom-dark mr-4" />
                  <h3 className="text-xl font-black text-custom-dark">Client Satisfaction</h3>
                </div>
                <div className="text-4xl font-black text-custom-dark mb-2">98%</div>
                <p className="text-custom-dark/60">Client satisfaction rating</p>
              </div>

              <div className="bg-custom-light/40 backdrop-blur-xl rounded-3xl p-8 border border-custom-light/60">
                <div className="flex items-center mb-4">
                  <Zap className="w-8 h-8 text-custom-dark mr-4" />
                  <h3 className="text-xl font-black text-custom-dark">Project Capacity</h3>
                </div>
                <div className="text-4xl font-black text-custom-dark mb-2">3x</div>
                <p className="text-custom-dark/60">Increase in concurrent projects</p>
              </div>

              <div className="bg-custom-light/40 backdrop-blur-xl rounded-3xl p-8 border border-custom-light/60">
                <div className="flex items-center mb-4">
                  <Award className="w-8 h-8 text-custom-dark mr-4" />
                  <h3 className="text-xl font-black text-custom-dark">Quality Score</h3>
                </div>
                <div className="text-4xl font-black text-custom-dark mb-2">95%</div>
                <p className="text-custom-dark/60">Design quality consistency rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-custom-light/20 via-white to-custom-light/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-custom-dark mb-8">
            Ready to Streamline Your Creative Process?
          </h2>
          <p className="text-lg text-custom-dark/60 mb-12 leading-relaxed">
            Let us help you automate your design workflows and focus on what matters most: creating amazing work for your clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/" 
              className="bg-custom-dark text-custom-light px-8 py-4 rounded-xl hover:bg-custom-dark/80 transition-all duration-700 font-semibold shadow-xl hover:shadow-custom-light/25 transform hover:-translate-y-2 hover:scale-105 inline-flex items-center justify-center"
            >
              Get Started Today
            </Link>
            <Link 
              to="/" 
              className="border-2 border-custom-dark/30 text-custom-dark px-8 py-4 rounded-xl hover:bg-custom-light/60 hover:border-custom-dark hover:text-custom-dark transition-all duration-700 font-semibold backdrop-blur-sm hover:shadow-xl hover:scale-105 inline-flex items-center justify-center"
            >
              View More Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

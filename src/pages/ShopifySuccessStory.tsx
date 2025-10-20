import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp, Users, Clock, DollarSign } from 'lucide-react';

export default function ShopifySuccessStory() {
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
              <TrendingUp className="w-5 h-5 mr-3" />
              Success Story
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-custom-dark mb-8 leading-tight">
              Shopify Store Boosts Sales by 150%
            </h1>
            <p className="text-lg text-custom-dark/60 leading-relaxed max-w-3xl mx-auto">
              How we transformed a struggling e-commerce business into a thriving online store through intelligent automation and streamlined operations.
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
                  Our client was running a Shopify store selling handmade jewelry, but was struggling with manual processes that were eating up hours of their day. Product management, inventory tracking, and order processing were all done manually, leading to errors and missed opportunities.
                </p>
                <p className="text-custom-dark/60 leading-relaxed">
                  With only 2-3 hours available daily for business operations, they needed a solution that could handle the repetitive tasks while they focused on creating beautiful products and growing their brand.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-black text-custom-dark mb-6">Our Solution</h2>
                <p className="text-custom-dark/60 leading-relaxed mb-6">
                  We implemented a comprehensive automation system that handled every aspect of their e-commerce operations:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-custom-dark rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-custom-dark/60 leading-relaxed">Automated product catalog management with real-time inventory updates</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-custom-dark rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-custom-dark/60 leading-relaxed">Streamlined order processing with automatic customer notifications</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-custom-dark rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-custom-dark/60 leading-relaxed">Integrated social media posting and marketing campaign management</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-custom-dark rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-custom-dark/60 leading-relaxed">Automated customer service responses and follow-up sequences</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-black text-custom-dark mb-6">The Results</h2>
                <p className="text-custom-dark/60 leading-relaxed">
                  Within 3 months of implementation, our client saw remarkable improvements across all key metrics. The automation system not only saved them 15+ hours per week but also significantly improved their operational efficiency and customer satisfaction.
                </p>
              </div>
            </div>

            {/* Results Cards */}
            <div className="space-y-6">
              <div className="bg-custom-light/40 backdrop-blur-xl rounded-3xl p-8 border border-custom-light/60">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-8 h-8 text-custom-dark mr-4" />
                  <h3 className="text-xl font-black text-custom-dark">Sales Growth</h3>
                </div>
                <div className="text-4xl font-black text-custom-dark mb-2">150%</div>
                <p className="text-custom-dark/60">Increase in monthly revenue within 3 months</p>
              </div>

              <div className="bg-custom-light/40 backdrop-blur-xl rounded-3xl p-8 border border-custom-light/60">
                <div className="flex items-center mb-4">
                  <Clock className="w-8 h-8 text-custom-dark mr-4" />
                  <h3 className="text-xl font-black text-custom-dark">Time Saved</h3>
                </div>
                <div className="text-4xl font-black text-custom-dark mb-2">15+</div>
                <p className="text-custom-dark/60">Hours per week saved on manual tasks</p>
              </div>

              <div className="bg-custom-light/40 backdrop-blur-xl rounded-3xl p-8 border border-custom-light/60">
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-custom-dark mr-4" />
                  <h3 className="text-xl font-black text-custom-dark">Customer Satisfaction</h3>
                </div>
                <div className="text-4xl font-black text-custom-dark mb-2">95%</div>
                <p className="text-custom-dark/60">Customer satisfaction rating improvement</p>
              </div>

              <div className="bg-custom-light/40 backdrop-blur-xl rounded-3xl p-8 border border-custom-light/60">
                <div className="flex items-center mb-4">
                  <DollarSign className="w-8 h-8 text-custom-dark mr-4" />
                  <h3 className="text-xl font-black text-custom-dark">ROI</h3>
                </div>
                <div className="text-4xl font-black text-custom-dark mb-2">400%</div>
                <p className="text-custom-dark/60">Return on investment within 6 months</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-custom-light/20 via-white to-custom-light/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-custom-dark mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-custom-dark/60 mb-12 leading-relaxed">
            Let us help you achieve similar results with intelligent automation solutions tailored to your business needs.
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

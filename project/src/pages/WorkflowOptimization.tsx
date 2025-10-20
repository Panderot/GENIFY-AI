import React from 'react';
import Layout from '../components/Layout';
import { Zap, Target, TrendingUp, Users, Clock, ArrowRight, Check, Mail, Phone } from 'lucide-react';

function WorkflowOptimization() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-custom-light/30 via-white to-custom-light/50 py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2760%27 height=%2760%27 viewBox=%270 0 60 60%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27none%27 fill-rule=%27evenodd%27%3E%3Cg fill=%27%23dde0de%27 fill-opacity=%270.3%27%3E%3Ccircle cx=%2730%27 cy=%2730%27 r=%271%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-custom-light/40 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-custom-light/30 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-in slide-in-from-bottom duration-1000">
            <div className="inline-flex items-center px-6 py-3 bg-custom-light/60 border border-custom-light/70 rounded-full text-custom-dark text-sm font-bold mb-8 shadow-lg backdrop-blur-sm hover:scale-105 transition-all duration-700 cursor-pointer">
              <Zap className="w-5 h-5 mr-3 animate-pulse" />
              Workflow Solutions
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-custom-dark leading-tight hover:text-custom-dark/80 transition-all duration-1000 cursor-default mb-8">
              Workflow Optimization
            </h1>
            <p className="text-base text-custom-dark/60 leading-relaxed max-w-3xl mx-auto font-light">
              Streamline repetitive tasks and processes across all departments. Free up your team to focus on strategic initiatives that drive growth.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gradient-to-b from-white to-custom-light/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-custom-light to-transparent"></div>
        <div className="absolute top-20 right-20 w-80 h-80 bg-custom-light/20 rounded-full blur-3xl animate-float"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="prose prose-lg max-w-none">
            
            {/* What is Workflow Optimization */}
            <div className="mb-20 animate-in slide-in-from-bottom duration-1000">
              <div className="bg-custom-light/40 backdrop-blur-xl rounded-3xl p-12 border border-custom-light/60 hover:shadow-2xl hover:shadow-custom-light/30 transition-all duration-700 group hover:-translate-y-2">
                <h2 className="text-3xl md:text-4xl font-black text-custom-dark mb-8 hover:text-custom-dark/80 transition-all duration-1000 cursor-default flex items-center">
                  <div className="w-12 h-12 bg-custom-dark rounded-2xl flex items-center justify-center mr-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 relative overflow-hidden animate-glow">
                    <span className="absolute inset-0 bg-gradient-to-r from-custom-light/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
                    <Target className="w-6 h-6 text-white relative z-10" />
                  </div>
                  What is Workflow Optimization?
                </h2>
                <p className="text-custom-dark/60 leading-relaxed text-base mb-6 font-light">
                  Workflow optimization is the systematic approach to identifying, analyzing, and improving business processes to maximize efficiency, reduce costs, and eliminate bottlenecks. At Genify AI, we transform your existing workflows into streamlined, automated systems that work seamlessly in the background.
                </p>
                <p className="text-custom-dark/60 leading-relaxed text-base font-light">
                  Our workflow optimization solutions help businesses eliminate manual, repetitive tasks, reduce human error, and ensure consistent results across all operations.
                </p>
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-black text-custom-dark mb-12 hover:text-custom-dark/80 transition-all duration-1000 cursor-default text-center">
                Key Benefits
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center p-8 bg-custom-light/40 rounded-2xl hover:shadow-xl hover:shadow-custom-light/30 transition-all duration-700 group hover:-translate-y-2">
                  <div className="w-16 h-16 bg-custom-dark rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-700">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-custom-dark mb-4">Time Savings</h3>
                  <p className="text-custom-dark/70 text-sm font-light">Reduce processing time by up to 80% through intelligent automation</p>
                </div>
                
                <div className="text-center p-8 bg-custom-light/40 rounded-2xl hover:shadow-xl hover:shadow-custom-light/30 transition-all duration-700 group hover:-translate-y-2">
                  <div className="w-16 h-16 bg-custom-dark rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-700">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-custom-dark mb-4">Cost Reduction</h3>
                  <p className="text-custom-dark/70 text-sm font-light">Lower operational costs by eliminating manual labor and errors</p>
                </div>
                
                <div className="text-center p-8 bg-custom-light/40 rounded-2xl hover:shadow-xl hover:shadow-custom-light/30 transition-all duration-700 group hover:-translate-y-2">
                  <div className="w-16 h-16 bg-custom-dark rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-700">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-custom-dark mb-4">Team Productivity</h3>
                  <p className="text-custom-dark/70 text-sm font-light">Free up your team to focus on high-value strategic work</p>
                </div>
              </div>
            </div>

            {/* Our Approach */}
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-black text-custom-dark mb-12 hover:text-custom-dark/80 transition-all duration-1000 cursor-default text-center">
                Our Optimization Process
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="bg-custom-light/40 rounded-2xl p-6 hover:shadow-xl transition-all duration-700 group hover:-translate-y-1">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-custom-dark rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-all duration-700">
                        <span className="text-white font-bold text-sm">1</span>
                      </div>
                      <h3 className="font-bold text-custom-dark">Analysis & Discovery</h3>
                    </div>
                    <p className="text-custom-dark/70 text-sm font-light">We analyze your current processes to identify bottlenecks, redundancies, and automation opportunities.</p>
                  </div>
                  
                  <div className="bg-custom-light/40 rounded-2xl p-6 hover:shadow-xl transition-all duration-700 group hover:-translate-y-1">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-custom-dark rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-all duration-700">
                        <span className="text-white font-bold text-sm">2</span>
                      </div>
                      <h3 className="font-bold text-custom-dark">Strategy Development</h3>
                    </div>
                    <p className="text-custom-dark/70 text-sm font-light">Create a comprehensive optimization strategy tailored to your business needs and goals.</p>
                  </div>
                  
                  <div className="bg-custom-light/40 rounded-2xl p-6 hover:shadow-xl transition-all duration-700 group hover:-translate-y-1">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-custom-dark rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-all duration-700">
                        <span className="text-white font-bold text-sm">3</span>
                      </div>
                      <h3 className="font-bold text-custom-dark">Implementation</h3>
                    </div>
                    <p className="text-custom-dark/70 text-sm font-light">Deploy automated solutions with minimal disruption to your existing operations.</p>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div className="bg-custom-light/40 rounded-2xl p-6 hover:shadow-xl transition-all duration-700 group hover:-translate-y-1">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-custom-dark rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-all duration-700">
                        <span className="text-white font-bold text-sm">4</span>
                      </div>
                      <h3 className="font-bold text-custom-dark">Testing & Validation</h3>
                    </div>
                    <p className="text-custom-dark/70 text-sm font-light">Thoroughly test all automated processes to ensure accuracy and reliability.</p>
                  </div>
                  
                  <div className="bg-custom-light/40 rounded-2xl p-6 hover:shadow-xl transition-all duration-700 group hover:-translate-y-1">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-custom-dark rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-all duration-700">
                        <span className="text-white font-bold text-sm">5</span>
                      </div>
                      <h3 className="font-bold text-custom-dark">Training & Support</h3>
                    </div>
                    <p className="text-custom-dark/70 text-sm font-light">Provide comprehensive training and ongoing support to ensure smooth adoption.</p>
                  </div>
                  
                  <div className="bg-custom-light/40 rounded-2xl p-6 hover:shadow-xl transition-all duration-700 group hover:-translate-y-1">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-custom-dark rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-all duration-700">
                        <span className="text-white font-bold text-sm">6</span>
                      </div>
                      <h3 className="font-bold text-custom-dark">Continuous Improvement</h3>
                    </div>
                    <p className="text-custom-dark/70 text-sm font-light">Monitor performance and continuously optimize for better results.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Industries We Serve */}
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-black text-custom-dark mb-12 hover:text-custom-dark/80 transition-all duration-1000 cursor-default text-center">
                Industries We Serve
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-custom-light/40 rounded-2xl p-8 text-center hover:shadow-xl hover:shadow-custom-light/30 transition-all duration-700 group hover:-translate-y-2">
                  <h3 className="font-bold text-custom-dark mb-4">Financial Services</h3>
                  <p className="text-custom-dark/70 text-sm font-light">Automate loan processing, compliance reporting, and customer onboarding</p>
                </div>
                
                <div className="bg-custom-light/40 rounded-2xl p-8 text-center hover:shadow-xl hover:shadow-custom-light/30 transition-all duration-700 group hover:-translate-y-2">
                  <h3 className="font-bold text-custom-dark mb-4">E-commerce</h3>
                  <p className="text-custom-dark/70 text-sm font-light">Optimize inventory management, order processing, and customer service</p>
                </div>
                
                <div className="bg-custom-light/40 rounded-2xl p-8 text-center hover:shadow-xl hover:shadow-custom-light/30 transition-all duration-700 group hover:-translate-y-2">
                  <h3 className="font-bold text-custom-dark mb-4">Healthcare</h3>
                  <p className="text-custom-dark/70 text-sm font-light">Streamline patient data management, billing, and administrative tasks</p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-black text-custom-dark mb-12 hover:text-custom-dark/80 transition-all duration-1000 cursor-default text-center">
                Workflow Optimization Features
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-custom-light/40 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-custom-dark mb-6">Process Automation</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Check className="w-6 h-6 text-custom-dark mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-custom-dark/70 text-base font-light">Automated task routing and assignment</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-6 h-6 text-custom-dark mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-custom-dark/70 text-base font-light">Intelligent decision-making workflows</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-6 h-6 text-custom-dark mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-custom-dark/70 text-base font-light">Automated approval processes</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-6 h-6 text-custom-dark mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-custom-dark/70 text-base font-light">Smart data validation and processing</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-custom-light/40 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-custom-dark mb-6">Monitoring & Analytics</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Check className="w-6 h-6 text-custom-dark mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-custom-dark/70 text-base font-light">Real-time process monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-6 h-6 text-custom-dark mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-custom-dark/70 text-base font-light">Performance analytics and reporting</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-6 h-6 text-custom-dark mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-custom-dark/70 text-base font-light">Bottleneck identification and alerts</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-6 h-6 text-custom-dark mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-custom-dark/70 text-base font-light">Customizable dashboards</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-custom-dark mb-8 hover:text-custom-dark/80 transition-all duration-1000 cursor-default flex items-center">
                <Mail className="w-8 h-8 mr-4 text-custom-dark/70" />
                Ready to Optimize Your Workflows?
              </h2>
              <div className="bg-custom-light/30 rounded-2xl p-8">
                <p className="text-custom-dark/70 leading-relaxed text-base mb-6">
                  Transform your business operations with our workflow optimization solutions. Let's discuss how we can help streamline your processes.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-custom-dark mb-3 flex items-center">
                      <Mail className="w-5 h-5 mr-2" />
                      Email
                    </h4>
                    <p className="text-custom-dark/70">business@genifyai.info</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-custom-dark mb-3 flex items-center">
                      <Phone className="w-5 h-5 mr-2" />
                      Phone
                    </h4>
                    <p className="text-custom-dark/70">+44 7576 385099</p>
                  </div>
                </div>
                <div className="mt-8">
                  <a href="/#contact">
                    <button className="bg-custom-dark text-custom-light px-8 py-3 rounded-xl hover:bg-custom-dark/80 transition-all duration-700 font-semibold shadow-xl hover:shadow-custom-light/25 transform hover:-translate-y-2 hover:scale-105 relative overflow-hidden group animate-glow">
                      <span className="absolute inset-0 bg-gradient-to-r from-custom-light/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
                      <span className="relative flex items-center justify-center">
                        <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-500" />
                        Get Started Today
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}

export default WorkflowOptimization;

import React from 'react';
import Layout from '../components/Layout';
import { Globe, Target, TrendingUp, Users, Database, Shield, ArrowRight, Check, Mail, Phone } from 'lucide-react';

function SystemIntegration() {
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
              <Globe className="w-5 h-5 mr-3 animate-pulse" />
              Integration Solutions
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-custom-dark leading-tight hover:text-custom-dark/80 transition-all duration-1000 cursor-default mb-8">
              System Integration
            </h1>
            <p className="text-base text-custom-dark/60 leading-relaxed max-w-3xl mx-auto font-light">
              Connect disparate systems and applications, creating a unified platform for reliable data flow and streamlined business workflows.
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
            
            {/* What is System Integration */}
            <div className="mb-20 animate-in slide-in-from-bottom duration-1000">
              <div className="bg-custom-light/40 backdrop-blur-xl rounded-3xl p-12 border border-custom-light/60 hover:shadow-2xl hover:shadow-custom-light/30 transition-all duration-700 group hover:-translate-y-2">
                <h2 className="text-3xl md:text-4xl font-black text-custom-dark mb-8 hover:text-custom-dark/80 transition-all duration-1000 cursor-default flex items-center">
                  <div className="w-12 h-12 bg-custom-dark rounded-2xl flex items-center justify-center mr-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 relative overflow-hidden animate-glow">
                    <span className="absolute inset-0 bg-gradient-to-r from-custom-light/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
                    <Database className="w-6 h-6 text-white relative z-10" />
                  </div>
                  What is System Integration?
                </h2>
                <p className="text-custom-dark/60 leading-relaxed text-base mb-6 font-light">
                  System integration is the process of connecting different computing systems and software applications physically or functionally to work as a coordinated whole. At Genify AI, we specialize in creating seamless connections between your existing systems, eliminating data silos and ensuring smooth information flow across your entire organization.
                </p>
                <p className="text-custom-dark/60 leading-relaxed text-base font-light">
                  Our integration solutions enable real-time data synchronization, automated workflows, and unified reporting across all your business applications, regardless of their original platforms or vendors.
                </p>
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-black text-custom-dark mb-12 hover:text-custom-dark/80 transition-all duration-1000 cursor-default text-center">
                Integration Benefits
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center p-8 bg-custom-light/40 rounded-2xl hover:shadow-xl hover:shadow-custom-light/30 transition-all duration-700 group hover:-translate-y-2">
                  <div className="w-16 h-16 bg-custom-dark rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-700">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-custom-dark mb-4">Unified Data</h3>
                  <p className="text-custom-dark/70 text-sm font-light">Single source of truth across all systems</p>
                </div>
                
                <div className="text-center p-8 bg-custom-light/40 rounded-2xl hover:shadow-xl hover:shadow-custom-light/under transition-all duration-700 group hover:-translate-y-2">
                  <div className="w-16 h-16 bg-custom-dark rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-700">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-custom-dark mb-4">Real-time Sync</h3>
                  <p className="text-custom-dark/70 text-sm font-light">Instant data updates across all platforms</p>
                </div>
                
                <div className="text-center p-8 bg-custom-light/40 rounded-2xl hover:shadow-xl hover:shadow-custom-light/30 transition-all duration-700 group hover:-translate-y-2">
                  <div className="w-16 h-16 bg-custom-dark rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-700">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-custom-dark mb-4">Enhanced Security</h3>
                  <p className="text-custom-dark/70 text-sm font-light">Secure data transmission and validation</p>
                </div>
                
                <div className="text-center p-8 bg-custom-light/40 rounded-2xl hover:shadow-xl hover:shadow-custom-light/30 transition-all duration-700 group hover:-translate-y-2">
                  <div className="w-16 h-16 bg-custom-dark rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-700">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-custom-dark mb-4">Better Collaboration</h3>
                  <p className="text-custom-dark/70 text-sm font-light">Seamless team coordination and communication</p>
                </div>
              </div>
            </div>

            {/* Integration Types */}
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-black text-custom-dark mb-12 hover:text-custom-dark/80 transition-all duration-1000 cursor-default text-center">
                Integration Solutions
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-custom-light/40 rounded-2xl p-8 text-center hover:shadow-xl hover:shadow-custom-light/30 transition-all duration-700 group hover:-translate-y-2">
                  <div className="w-20 h-20 bg-custom-dark rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-700">
                    <Globe className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-custom-dark mb-4">API Integration</h3>
                  <p className="text-custom-dark/70 text-sm font-light mb-6">Connect applications through RESTful APIs and web services for seamless data exchange</p>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-start text-xs">
                      <Check className="w-4 h-4 text-custom-dark mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-custom-dark/70">RESTful API development</span>
                    </li>
                    <li className="flex items-start text-xs">
                      <Check className="w-4 h-4 text-custom-dark mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-custom-dark/70">GraphQL integration</span>
                    </li>
                    <li className="flex items-start text-xs">
                      <Check className="w-4 h-4 text-custom-dark mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-custom-dark/70">Third-party API connections</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-custom-light/40 rounded-2xl p-8 text-center hover:shadow-xl hover:shadow-custom-light/30 transition-all duration-700 group hover:-translate-y-2">
                  <div className="w-20 h-20 bg-custom-dark rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-700">
                    <Database className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-custom-dark mb-4">Database Integration</h3>
                  <p className="text-custom-dark/70 text-sm font-light mb-6">Unify data from multiple databases and ensure consistency across systems</p>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-start text-xs">
                      <Check className="w-4 h-4 text-custom-dark mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-custom-dark/70">Data synchronization</span>
                    </li>
                    <li className="flex items-start text-xs">
                      <Check className="w-4 h-4 text-custom-dark mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-custom-dark/70">ETL processes</span>
                    </li>
                    <li className="flex items-start text-xs">
                      <Check className="w-4 h-4 text-custom-dark mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-custom-dark/70">Data warehousing</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-custom-light/40 rounded-2xl p-8 text-center hover:shadow-xl hover:shadow-custom-light/30 transition-all duration-700 group hover:-translate-y-2">
                  <div className="w-20 h-20 bg-custom-dark rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-700">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-custom-dark mb-4">Cloud Integration</h3>
                  <p className="text-custom-dark/70 text-sm font-light mb-6">Connect on-premise systems with cloud platforms for hybrid solutions</p>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-start text-xs">
                      <Check className="w-4 h-4 text-custom-dark mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-custom-dark/70">Hybrid cloud setup</span>
                    </li>
                    <li className="flex items-start text-xs">
                      <Check className="w-4 h-4 text-custom-dark mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-custom-dark/70">Multi-cloud integration</span>
                    </li>
                    <li className="flex items-start text-xs">
                      <Check className="w-4 h-4 text-custom-dark mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-custom-dark/70">Migration services</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Our Process */}
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-black text-custom-dark mb-12 hover:text-custom-dark/80 transition-all duration-1000 cursor-default text-center">
                Our Integration Process
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="bg-custom-light/40 rounded-2xl p-6 hover:shadow-xl transition-all duration-700 group hover:-translate-y-1">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-custom-dark rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-all duration-700">
                        <span className="text-white font-bold text-sm">1</span>
                      </div>
                      <h3 className="font-bold text-custom-dark">System Assessment</h3>
                    </div>
                    <p className="text-custom-dark/70 text-sm font-light">Evaluate your existing systems, data structures, and integration requirements.</p>
                  </div>
                  
                  <div className="bg-custom-light/40 rounded-2xl p-6 hover:shadow-xl transition-all duration-700 group hover:-translate-y-1">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-custom-dark rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-all duration-700">
                        <span className="text-white font-bold text-sm">2</span>
                      </div>
                      <h3 className="font-bold text-custom-dark">Architecture Design</h3>
                    </div>
                    <p className="text-custom-dark/70 text-sm font-light">Design a robust integration architecture that meets your business needs.</p>
                  </div>
                  
                  <div className="bg-custom-light/40 rounded-2xl p-6 hover:shadow-xl transition-all duration-700 group hover:-translate-y-1">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-custom-dark rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-all duration-700">
                        <span className="text-white font-bold text-sm">3</span>
                      </div>
                      <h3 className="font-bold text-custom-dark">Development & Testing</h3>
                    </div>
                    <p className="text-custom-dark/70 text-sm font-light">Build and thoroughly test integration solutions in controlled environments.</p>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div className="bg-custom-light/40 rounded-2xl p-6 hover:shadow-xl transition-all duration-700 group hover:-translate-y-1">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-custom-dark rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-all duration-700">
                        <span className="text-white font-bold text-sm">4</span>
                      </div>
                      <h3 className="font-bold text-custom-dark">Deployment</h3>
                    </div>
                    <p className="text-custom-dark/70 text-sm font-light">Deploy integration solutions with minimal disruption to operations.</p>
                  </div>
                  
                  <div className="bg-custom-light/40 rounded-2xl p-6 hover:shadow-xl transition-all duration-700 group hover:-translate-y-1">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-custom-dark rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-all duration-700">
                        <span className="text-white font-bold text-sm">5</span>
                      </div>
                      <h3 className="font-bold text-custom-dark">Training & Support</h3>
                    </div>
                    <p className="text-custom-dark/70 text-sm font-light">Provide comprehensive training and ongoing technical support.</p>
                  </div>
                  
                  <div className="bg-custom-light/40 rounded-2xl p-6 hover:shadow-xl transition-all duration-700 group hover:-translate-y-1">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-custom-dark rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-all duration-700">
                        <span className="text-white font-bold text-sm">6</span>
                      </div>
                      <h3 className="font-bold text-custom-dark">Monitoring & Maintenance</h3>
                    </div>
                    <p className="text-custom-dark/70 text-sm font-light">Continuous monitoring and optimization of integration performance.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-black text-custom-dark mb-12 hover:text-custom-dark/80 transition-all duration-1000 cursor-default text-center">
                Integration Technologies
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-custom-light/40 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-custom-dark mb-6">Enterprise Platforms</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Check className="w-6 h-6 text-custom-dark mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-custom-dark/70 text-base font-light">Microsoft Power Platform</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-6 h-6 text-custom-dark mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-custom-dark/70 text-base font-light">Salesforce Integration</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-6 h-6 text-custom-dark mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-custom-dark/70 text-base font-light">SAP Connectors</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-6 h-6 text-custom-dark mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-custom-dark/70 text-base font-light">Oracle Integration Cloud</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-custom-light/40 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-custom-dark mb-6">Development Tools</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Check className="w-6 h-6 text-custom-dark mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-custom-dark/70 text-base font-light">Custom API Development</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-6 h-6 text-custom-dark mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-custom-dark/70 text-base font-light">Microservices Architecture</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-6 h-6 text-custom-dark mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-custom-dark/70 text-base font-light">Event-Driven Integration</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-6 h-6 text-custom-dark mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-custom-dark/70 text-base font-light">Real-time Data Streaming</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-custom-dark mb-8 hover:text-custom-dark/80 transition-all duration-1000 cursor-default flex items-center">
                <Mail className="w-8 h-8 mr-4 text-custom-dark/70" />
                Ready to Integrate Your Systems?
              </h2>
              <div className="bg-custom-light/30 rounded-2xl p-8">
                <p className="text-custom-dark/70 leading-relaxed text-base mb-6">
                  Connect your systems and unlock the full potential of your business data. Let's discuss your integration needs.
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
                        <Globe className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-500" />
                        Start Integration
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

export default SystemIntegration;

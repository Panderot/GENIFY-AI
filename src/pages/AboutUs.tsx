import React from 'react';
import Layout from '../components/Layout';
import { Users, Target, Award, TrendingUp, Star, Zap, Globe, Cpu, Mail, Phone } from 'lucide-react';

function AboutUs() {
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
              <Users className="w-5 h-5 mr-3 animate-pulse" />
              Our Story
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-custom-dark leading-tight hover:text-custom-dark/80 transition-all duration-1000 cursor-default mb-8">
              About Genify AI
            </h1>
            <p className="text-base text-custom-dark/60 leading-relaxed max-w-3xl mx-auto font-light">
              We are passionate about transforming business operations through intelligent automation and seamless integration solutions.
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
            
            {/* Our Mission */}
            <div className="mb-20 animate-in slide-in-from-bottom duration-1000">
              <div className="bg-custom-light/40 backdrop-blur-xl rounded-3xl p-12 border border-custom-light/60 hover:shadow-2xl hover:shadow-custom-light/30 transition-all duration-700 group hover:-translate-y-2">
                <h2 className="text-3xl md:text-4xl font-black text-custom-dark mb-8 hover:text-custom-dark/80 transition-all duration-1000 cursor-default flex items-center">
                  <div className="w-12 h-12 bg-custom-dark rounded-2xl flex items-center justify-center mr-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 relative overflow-hidden animate-glow">
                    <span className="absolute inset-0 bg-gradient-to-r from-custom-light/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
                    <Target className="w-6 h-6 text-white relative z-10" />
                  </div>
                  Our Mission
                </h2>
                <p className="text-custom-dark/60 leading-relaxed text-base mb-6 font-light">
                  At Genify AI, we believe that every business deserves to operate at its highest potential. Our mission is to empower organizations by streamlining their operations, reducing costs, and increasing efficiency through cutting-edge automation solutions.
                </p>
                <p className="text-custom-dark/60 leading-relaxed text-base font-light">
                  We transform the way businesses work by handling repetitive tasks, integrating disparate systems, and providing intelligent insights that drive growth and innovation.
                </p>
              </div>
            </div>

            {/* What We Do */}
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-black text-custom-dark mb-12 hover:text-custom-dark/80 transition-all duration-1000 cursor-default text-center">
                What We Do
              </h2>
              
              <div className="grid md:grid-cols-3 gap-12">
                {/* Workflow Optimization */}
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

                {/* System Integration */}
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

                {/* Smart Analytics */}
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

            {/* Our Achievements */}
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-black text-custom-dark mb-12 hover:text-custom-dark/80 transition-all duration-1000 cursor-default text-center">
                Our Achievements
              </h2>
              
              <div className="grid md:grid-cols-3 gap-12 text-center">
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
            </div>

            {/* Our Values */}
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-black text-custom-dark mb-12 hover:text-custom-dark/80 transition-all duration-1000 cursor-default text-center">
                Our Values
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center p-8 bg-custom-light/40 rounded-2xl hover:shadow-xl hover:shadow-custom-light/30 transition-all duration-700 group hover:-translate-y-2">
                  <div className="w-16 h-16 bg-custom-dark rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-700">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-custom-dark mb-4">Excellence</h3>
                  <p className="text-custom-dark/70 text-sm font-light">Delivering exceptional results in every project</p>
                </div>
                
                <div className="text-center p-8 bg-custom-light/40 rounded-2xl hover:shadow-xl hover:shadow-custom-light/30 transition-all duration-700 group hover:-translate-y-2">
                  <div className="w-16 h-16 bg-custom-dark rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-700">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-custom-dark mb-4">Partnership</h3>
                  <p className="text-custom-dark/70 text-sm font-light">Building long-term relationships with our clients</p>
                </div>
                
                <div className="text-center p-8 bg-custom-light/40 rounded-2xl hover:shadow-xl hover:shadow-custom-light/30 transition-all duration-700 group hover:-translate-y-2">
                  <div className="w-16 h-16 bg-custom-dark rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-700">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-custom-dark mb-4">Innovation</h3>
                  <p className="text-custom-dark/70 text-sm font-light">Embracing cutting-edge technology and solutions</p>
                </div>
                
                <div className="text-center p-8 bg-custom-light/40 rounded-2xl hover:shadow-xl hover:shadow-custom-light/30 transition-all duration-700 group hover:-translate-y-2">
                  <div className="w-16 h-16 bg-custom-dark rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-700">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-custom-dark mb-4">Quality</h3>
                  <p className="text-custom-dark/70 text-sm font-light">Maintaining the highest standards in everything we do</p>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mb-20">
              <div className="bg-custom-light/40 backdrop-blur-xl rounded-3xl p-12 border border-custom-light/60 hover:shadow-2xl hover:shadow-custom-light/30 transition-all duration-700 group hover:-translate-y-2">
                <h2 className="text-3xl md:text-4xl font-black text-custom-dark mb-8 hover:text-custom-dark/80 transition-all duration-1000 cursor-default text-center">
                  Why Choose Genify AI?
                </h2>
                
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-xl font-bold text-custom-dark mb-6">Our Expertise</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-custom-dark rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-custom-dark/70 text-base font-light">Trusted 500+ businesses across various industries</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-custom-dark rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-custom-dark/70 text-base font-light">Proven track record of delivering measurable results</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-custom-dark rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-custom-dark/70 text-base font-light">Custom solutions tailored to your specific needs</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-custom-dark rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-custom-dark/70 text-base font-light">Dedicated support and ongoing optimization</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-custom-dark mb-6">Our Approach</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-custom-dark rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-custom-dark/70 text-base font-light">Comprehensive analysis of your current processes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-custom-dark rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-custom-dark/70 text-base font-light">Strategic planning and implementation roadmap</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-custom-dark rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-custom-dark/70 text-base font-light">Seamless integration with minimal disruption</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-custom-dark rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-custom-dark/70 text-base font-light">Continuous monitoring and improvement</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-custom-dark mb-8 hover:text-custom-dark/80 transition-all duration-1000 cursor-default flex items-center">
                <Mail className="w-8 h-8 mr-4 text-custom-dark/70" />
                Get In Touch
              </h2>
              <div className="bg-custom-light/30 rounded-2xl p-8">
                <p className="text-custom-dark/70 leading-relaxed text-base mb-6">
                  Ready to transform your business operations? Let's discuss how we can help you achieve your goals.
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
                        <Cpu className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-500" />
                        Start Your Project
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

export default AboutUs;

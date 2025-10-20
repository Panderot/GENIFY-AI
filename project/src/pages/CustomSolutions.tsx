import React from 'react';
import Layout from '../components/Layout';
import { Target, Cpu, Users, TrendingUp, Zap, Shield, ArrowRight, Check, Mail, Phone } from 'lucide-react';

function CustomSolutions() {
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
              <Target className="w-5 h-5 mr-3 animate-pulse" />
              Custom Solutions
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-custom-dark leading-tight hover:text-custom-dark/80 transition-all duration-1000 cursor-default mb-8">
              Custom Solutions
            </h1>
            <p className="text-base text-custom-dark/60 leading-relaxed max-w-3xl mx-auto font-light">
              Advanced analytics solutions to solve your unique business challenges. From predictive insights to intelligent data processing.
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
            
            {/* What are Custom Solutions */}
            <div className="mb-20 animate-in slide-in-from-bottom duration-1000">
              <div className="bg-custom-light/40 backdrop-blur-xl rounded-3xl p-12 border border-custom-light/60 hover:shadow-2xl hover:shadow-custom-light/30 transition-all duration-700 group hover:-translate-y-2">
                <h2 className="text-3xl md:text-4xl font-black text-custom-dark mb-8 hover:text-custom-dark/80 transition-all duration-1000 cursor-default flex items-center">
                  <div className="w-12 h-12 bg-custom-dark rounded-2xl flex items-center justify-center mr-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 relative overflow-hidden animate-glow">
                    <span className="absolute inset-0 bg-gradient-to-r from-custom-light/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
                    <Cpu className="w-6 h-6 text-white relative z-10" />
                  </div>
                  What are Custom Solutions?
                </h2>
                <p className="text-custom-dark/60 leading-relaxed text-base mb-6 font-light">
                  Custom solutions are tailor-made applications and systems designed specifically for your unique business requirements. At Genify AI, we develop sophisticated solutions that go beyond standard software, creating intelligent systems that adapt to your specific workflows, processes, and objectives.
                </p>
                <p className="text-custom-dark/60 leading-relaxed text-base font-light">
                  Our custom solutions leverage cutting-edge technologies including artificial intelligence, machine learning, and advanced analytics to deliver results that off-the-shelf software simply cannot achieve.
                </p>
              </div>
            </div>

            {/* Why Choose Custom Solutions */}
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-black text-custom-dark mb-12 hover:text-custom-dark/80 transition-all duration-1000 cursor-default text-center">
                Why Choose Custom Solutions?
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center p-8 bg-custom-light/40 rounded-2xl hover:shadow-xl hover:shadow-custom-light/30 transition-all duration-700 group hover:-translate-y-2">
                  <div className="w-16 h-16 bg-custom-dark rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-700">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-custom-dark mb-4">Perfect Fit</h3>
                  <p className="text-custom-dark/70 text-sm font-light">Solutions designed specifically for your business needs</p>
                </div>
                
                <div className="text-center p-8 bg-custom-light/40 rounded-2xl hover:shadow-xl hover:shadow-custom-light/30 transition-all duration-700 group hover:-translate-y-2">
                  <div className="w-16 h-16 bg-custom-dark rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-700">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-custom-dark mb-4">Scalability</h3>
                  <p className="text-custom-dark/70 text-sm font-light">Built to grow and adapt with your business</p>
                </div>
                
                <div className="text-center p-8 bg-custom-light/40 rounded-2xl hover:shadow-xl hover:shadow-custom-light/30 transition-all duration-700 group hover:-translate-y-2">
                  <div className="w-16 h-16 bg-custom-dark rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-700">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-custom-dark mb-4">Competitive Edge</h3>
                  <p className="text-custom-dark/70 text-sm font-light">Unique capabilities that set you apart from competitors</p>
                </div>
                
                <div className="text-center p-8 bg-custom-light/40 rounded-2xl hover:shadow-xl hover:shadow-custom-light/30 transition-all duration-700 group hover:-translate-y-2">
                  <div className="w-16 h-16 bg-custom-dark rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-700">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-custom-dark mb-4">Full Control</h3>
                  <p className="text-custom-dark/70 text-sm font-light">Complete ownership and control over your solution</p>
                </div>
              </div>
            </div>

            {/* Solution Types */}
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-black text-custom-dark mb-12 hover:text-custom-dark/80 transition-all duration-1000 cursor-default text-center">
                Custom Solution Types
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-custom-light/40 rounded-2xl p-8 text-center hover:shadow-xl hover:shadow-custom-light/30 transition-all duration-700 group hover:-translate-y-2">
                  <div className="w-20 h-20 bg-custom-dark rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-700">
                    <Cpu className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-custom-dark mb-4">AI-Powered Applications</h3>
                  <p className="text-custom-dark/70 text-sm font-light mb-6">Intelligent applications that learn and adapt to improve performance over time</p>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-start text-xs">
                      <Check className="w-4 h-4 text-custom-dark mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-custom-dark/70">Machine learning models</span>
                    </li>
                    <li className="flex items-start text-xs">
                      <Check className="w-4 h-4 text-custom-dark mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-custom-dark/70">Predictive analytics</span>
                    </li>
                    <li className="flex items-start text-xs">
                      <Check className="w-4 h-4 text-custom-dark mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-custom-dark/70">Natural language processing</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-custom-light/40 rounded-2xl p-8 text-center hover:shadow-xl hover:shadow-custom-light/30 transition-all duration-700 group hover:-translate-y-2">
                  <div className="w-20 h-20 bg-custom-dark rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-700">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-custom-dark mb-4">Business Process Automation</h3>
                  <p className="text-custom-dark/70 text-sm font-light mb-6">Complete automation of complex business processes tailored to your operations</p>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-start text-xs">
                      <Check className="w-4 h-4 text-custom-dark mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-custom-dark/70">End-to-end automation</span>
                    </li>
                    <li className="flex items-start text-xs">
                      <Check className="w-4 h-4 text-custom-dark mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-custom-dark/70">Workflow orchestration</span>
                    </li>
                    <li className="flex items-start text-xs">
                      <Check className="w-4 h-4 text-custom-dark mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-custom-dark/70">Decision automation</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-custom-light/40 rounded-2xl p-8 text-center hover:shadow-xl hover:shadow-custom-light/30 transition-all duration-700 group hover:-translate-y-2">
                  <div className="w-20 h-20 bg-custom-dark rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-700">
                    <TrendingUp className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-custom-dark mb-4">Analytics & Reporting</h3>
                  <p className="text-custom-dark/70 text-sm font-light mb-6">Advanced analytics platforms that provide deep insights into your business performance</p>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-start text-xs">
                      <Check className="w-4 h-4 text-custom-dark mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-custom-dark/70">Real-time dashboards</span>
                    </li>
                    <li className="flex items-start text-xs">
                      <Check className="w-4 h-4 text-custom-dark mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-custom-dark/70">Custom reporting</span>
                    </li>
                    <li className="flex items-start text-xs">
                      <Check className="w-4 h-4 text-custom-dark mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-custom-dark/70">Data visualization</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Development Process */}
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-black text-custom-dark mb-12 hover:text-custom-dark/80 transition-all duration-1000 cursor-default text-center">
                Our Development Process
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="bg-custom-light/40 rounded-2xl p-6 hover:shadow-xl transition-all duration-700 group hover:-translate-y-1">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-custom-dark rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-all duration-700">
                        <span className="text-white font-bold text-sm">1</span>
                      </div>
                      <h3 className="font-bold text-custom-dark">Discovery & Analysis</h3>
                    </div>
                    <p className="text-custom-dark/70 text-sm font-light">Deep dive into your business requirements, challenges, and objectives to understand the full scope.</p>
                  </div>
                  
                  <div className="bg-custom-light/40 rounded-2xl p-6 hover:shadow-xl transition-all duration-700 group hover:-translate-y-1">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-custom-dark rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-all duration-700">
                        <span className="text-white font-bold text-sm">2</span>
                      </div>
                      <h3 className="font-bold text-custom-dark">Solution Design</h3>
                    </div>
                    <p className="text-custom-dark/70 text-sm font-light">Create detailed technical specifications and architecture for your custom solution.</p>
                  </div>
                  
                  <div className="bg-custom-light/40 rounded-2xl p-6 hover:shadow-xl transition-all duration-700 group hover:-translate-y-1">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-custom-dark rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-all duration-700">
                        <span className="text-white font-bold text-sm">3</span>
                      </div>
                      <h3 className="font-bold text-custom-dark">Agile Development</h3>
                    </div>
                    <p className="text-custom-dark/70 text-sm font-light">Iterative development with regular feedback and testing throughout the process.</p>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div className="bg-custom-light/40 rounded-2xl p-6 hover:shadow-xl transition-all duration-700 group hover:-translate-y-1">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-custom-dark rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-all duration-700">
                        <span className="text-white font-bold text-sm">4</span>
                      </div>
                      <h3 className="font-bold text-custom-dark">Quality Assurance</h3>
                    </div>
                    <p className="text-custom-dark/70 text-sm font-light">Comprehensive testing to ensure reliability, performance, and security.</p>
                  </div>
                  
                  <div className="bg-custom-light/40 rounded-2xl p-6 hover:shadow-xl transition-all duration-700 group hover:-translate-y-1">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-custom-dark rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-all duration-700">
                        <span className="text-white font-bold text-sm">5</span>
                      </div>
                      <h3 className="font-bold text-custom-dark">Deployment & Training</h3>
                    </div>
                    <p className="text-custom-dark/70 text-sm font-light">Seamless deployment with comprehensive training for your team.</p>
                  </div>
                  
                  <div className="bg-custom-light/40 rounded-2xl p-6 hover:shadow-xl transition-all duration-700 group hover:-translate-y-1">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-custom-dark rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-all duration-700">
                        <span className="text-white font-bold text-sm">6</span>
                      </div>
                      <h3 className="font-bold text-custom-dark">Ongoing Support</h3>
                    </div>
                    <p className="text-custom-dark/70 text-sm font-light">Continuous support, maintenance, and optimization for long-term success.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-black text-custom-dark mb-12 hover:text-custom-dark/80 transition-all duration-1000 cursor-default text-center">
                Technologies We Use
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-custom-light/40 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-custom-dark mb-6">AI & Machine Learning</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Check className="w-6 h-6 text-custom-dark mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-custom-dark/70 text-base font-light">Python, TensorFlow, PyTorch</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-6 h-6 text-custom-dark mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-custom-dark/70 text-base font-light">Natural Language Processing</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-6 h-6 text-custom-dark mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-custom-dark/70 text-base font-light">Computer Vision</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-6 h-6 text-custom-dark mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-custom-dark/70 text-base font-light">Predictive Analytics</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-custom-light/40 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-custom-dark mb-6">Development Platforms</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Check className="w-6 h-6 text-custom-dark mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-custom-dark/70 text-base font-light">Cloud Platforms (AWS, Azure, GCP)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-6 h-6 text-custom-dark mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-custom-dark/70 text-base font-light">Microservices Architecture</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-6 h-6 text-custom-dark mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-custom-dark/70 text-base font-light">Container Technologies</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-6 h-6 text-custom-dark mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-custom-dark/70 text-base font-light">API Development</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Success Stories */}
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-black text-custom-dark mb-12 hover:text-custom-dark/80 transition-all duration-1000 cursor-default text-center">
                Custom Solution Success Stories
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-custom-light/40 rounded-2xl p-8 text-center hover:shadow-xl hover:shadow-custom-light/30 transition-all duration-700 group hover:-translate-y-2">
                  <div className="text-3xl font-black text-custom-dark mb-4">80%</div>
                  <h3 className="font-bold text-custom-dark mb-4">Process Efficiency</h3>
                  <p className="text-custom-dark/70 text-sm font-light">Average improvement in process efficiency across our custom solutions</p>
                </div>
                
                <div className="bg-custom-light/40 rounded-2xl p-8 text-center hover:shadow-xl hover:shadow-custom-light/30 transition-all duration-700 group hover:-translate-y-2">
                  <div className="text-3xl font-black text-custom-dark mb-4">95%</div>
                  <h3 className="font-bold text-custom-dark mb-4">Client Satisfaction</h3>
                  <p className="text-custom-dark/70 text-sm font-light">Client satisfaction rate for our custom solution projects</p>
                </div>
                
                <div className="bg-custom-light/40 rounded-2xl p-8 text-center hover:shadow-xl hover:shadow-custom-light/30 transition-all duration-700 group hover:-translate-y-2">
                  <div className="text-3xl font-black text-custom-dark mb-4">50+</div>
                  <h3 className="font-bold text-custom-dark mb-4">Custom Projects</h3>
                  <p className="text-custom-dark/70 text-sm font-light">Successfully delivered custom solutions across various industries</p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-custom-dark mb-8 hover:text-custom-dark/80 transition-all duration-1000 cursor-default flex items-center">
                <Mail className="w-8 h-8 mr-4 text-custom-dark/70" />
                Ready for a Custom Solution?
              </h2>
              <div className="bg-custom-light/30 rounded-2xl p-8">
                <p className="text-custom-dark/70 leading-relaxed text-base mb-6">
                  Let's create a solution that's perfectly tailored to your business needs. Contact us to discuss your custom solution requirements.
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
                        <Target className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-500" />
                        Discuss Your Project
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

export default CustomSolutions;

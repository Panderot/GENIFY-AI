import React from 'react';
import Layout from '../components/Layout';
import { FileText, Scale, AlertTriangle, Shield, Users, Mail, Phone } from 'lucide-react';

function TermsOfService() {
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
              <Scale className="w-5 h-5 mr-3 animate-pulse" />
              Legal Terms
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-custom-dark leading-tight hover:text-custom-dark/80 transition-all duration-1000 cursor-default mb-8">
              Terms of Service
            </h1>
            <p className="text-base text-custom-dark/60 leading-relaxed max-w-3xl mx-auto font-light">
              These terms and conditions govern your use of Genify AI's services and website. Please read them carefully.
            </p>
            <div className="mt-8 text-sm text-custom-dark/50">
              Last updated: December 2024
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gradient-to-b from-white to-custom-light/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-custom-light to-transparent"></div>
        <div className="absolute top-20 right-20 w-80 h-80 bg-custom-light/20 rounded-full blur-3xl animate-float"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-custom-dark mb-8 hover:text-custom-dark/80 transition-all duration-1000 cursor-default flex items-center">
                <FileText className="w-8 h-8 mr-4 text-custom-dark/70" />
                Agreement to Terms
              </h2>
              <p className="text-custom-dark/60 leading-relaxed text-base mb-6 font-light">
                By accessing and using Genify AI's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
              <p className="text-custom-dark/60 leading-relaxed text-base font-light">
                These Terms of Service constitute a legally binding agreement between you and Genify AI regarding your use of our services.
              </p>
            </div>

            {/* Services Description */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-custom-dark mb-8 hover:text-custom-dark/80 transition-all duration-1000 cursor-default">Our Services</h2>
              
              <div className="bg-custom-light/30 rounded-2xl p-8 mb-8">
                <h3 className="text-xl font-bold text-custom-dark mb-4">Business Automation Solutions</h3>
                <p className="text-custom-dark/70 leading-relaxed text-base mb-4">
                  Genify AI provides comprehensive business automation and optimization services including:
                </p>
                <ul className="space-y-3 text-custom-dark/70">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-custom-dark rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Workflow optimization and process automation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-custom-dark rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>System integration and data management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-custom-dark rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Custom AI solutions and analytics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-custom-dark rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Consulting and implementation services</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* User Responsibilities */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-custom-dark mb-8 hover:text-custom-dark/80 transition-all duration-1000 cursor-default flex items-center">
                <Users className="w-8 h-8 mr-4 text-custom-dark/70" />
                User Responsibilities
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-custom-light/40 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-custom-dark mb-4">Account Security</h3>
                  <ul className="space-y-2 text-custom-dark/70 text-sm">
                    <li>• Maintain confidentiality of account credentials</li>
                    <li>• Notify us of unauthorized access</li>
                    <li>• Use strong passwords</li>
                    <li>• Keep contact information updated</li>
                  </ul>
                </div>
                <div className="bg-custom-light/40 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-custom-dark mb-4">Acceptable Use</h3>
                  <ul className="space-y-2 text-custom-dark/70 text-sm">
                    <li>• Use services for lawful purposes only</li>
                    <li>• Respect intellectual property rights</li>
                    <li>• Avoid malicious activities</li>
                    <li>• Comply with applicable laws</li>
                  </ul>
                </div>
                <div className="bg-custom-light/40 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-custom-dark mb-4">Data Accuracy</h3>
                  <ul className="space-y-2 text-custom-dark/70 text-sm">
                    <li>• Provide accurate information</li>
                    <li>• Update data when necessary</li>
                    <li>• Ensure data integrity</li>
                    <li>• Report errors promptly</li>
                  </ul>
                </div>
                <div className="bg-custom-light/40 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-custom-dark mb-4">Payment Obligations</h3>
                  <ul className="space-y-2 text-custom-dark/70 text-sm">
                    <li>• Pay fees on time</li>
                    <li>• Maintain valid payment methods</li>
                    <li>• Understand billing cycles</li>
                    <li>• Report billing disputes promptly</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Prohibited Activities */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-custom-dark mb-8 hover:text-custom-dark/80 transition-all duration-1000 cursor-default flex items-center">
                <AlertTriangle className="w-8 h-8 mr-4 text-custom-dark/70" />
                Prohibited Activities
              </h2>
              <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
                <p className="text-custom-dark/70 leading-relaxed text-base mb-6">
                  You agree not to engage in any of the following prohibited activities:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-red-700 mb-3">Illegal Activities</h4>
                    <ul className="space-y-2 text-red-600 text-sm">
                      <li>• Violating applicable laws or regulations</li>
                      <li>• Infringing intellectual property rights</li>
                      <li>• Engaging in fraudulent activities</li>
                      <li>• Distributing malicious software</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-700 mb-3">Service Abuse</h4>
                    <ul className="space-y-2 text-red-600 text-sm">
                      <li>• Attempting to gain unauthorized access</li>
                      <li>• Interfering with service operations</li>
                      <li>• Reverse engineering our systems</li>
                      <li>• Overloading our infrastructure</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-custom-dark mb-8 hover:text-custom-dark/80 transition-all duration-1000 cursor-default">Intellectual Property</h2>
              <div className="bg-custom-light/30 rounded-2xl p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-bold text-custom-dark mb-4">Our Intellectual Property</h3>
                    <p className="text-custom-dark/70 text-sm mb-4">
                      All content, software, and materials provided by Genify AI are protected by intellectual property laws and remain our exclusive property.
                    </p>
                    <ul className="space-y-2 text-custom-dark/70 text-sm">
                      <li>• Proprietary algorithms and methodologies</li>
                      <li>• Software and technical solutions</li>
                      <li>• Branding and marketing materials</li>
                      <li>• Documentation and training materials</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-custom-dark mb-4">Your Intellectual Property</h3>
                    <p className="text-custom-dark/70 text-sm mb-4">
                      You retain ownership of your data and intellectual property. We respect your rights and use your information only as permitted by our Privacy Policy.
                    </p>
                    <ul className="space-y-2 text-custom-dark/70 text-sm">
                      <li>• Business data and processes</li>
                      <li>• Customer information</li>
                      <li>• Proprietary methodologies</li>
                      <li>• Custom requirements and specifications</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-custom-dark mb-8 hover:text-custom-dark/80 transition-all duration-1000 cursor-default flex items-center">
                <Shield className="w-8 h-8 mr-4 text-custom-dark/70" />
                Limitation of Liability
              </h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8">
                <p className="text-custom-dark/70 leading-relaxed text-base mb-6">
                  To the maximum extent permitted by law, Genify AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
                </p>
                <ul className="space-y-3 text-custom-dark/70">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Loss of profits, revenue, or business opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Data loss or corruption</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Service interruptions or downtime</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Third-party actions or omissions</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service Availability */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-custom-dark mb-8 hover:text-custom-dark/80 transition-all duration-1000 cursor-default">Service Availability</h2>
              <div className="bg-custom-light/30 rounded-2xl p-8">
                <p className="text-custom-dark/70 leading-relaxed text-base mb-6">
                  While we strive to provide reliable services, we cannot guarantee uninterrupted availability. We reserve the right to:
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-custom-dark rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <AlertTriangle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-custom-dark mb-3">Maintenance</h3>
                    <p className="text-custom-dark/70 text-sm">Perform scheduled maintenance and updates</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-custom-dark rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-custom-dark mb-3">Security</h3>
                    <p className="text-custom-dark/70 text-sm">Implement security measures and restrictions</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-custom-dark rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-custom-dark mb-3">Updates</h3>
                    <p className="text-custom-dark/70 text-sm">Modify or discontinue services with notice</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Termination */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-custom-dark mb-8 hover:text-custom-dark/80 transition-all duration-1000 cursor-default">Termination</h2>
              <div className="bg-custom-light/30 rounded-2xl p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-bold text-custom-dark mb-4">Termination by You</h3>
                    <p className="text-custom-dark/70 text-sm mb-4">
                      You may terminate your account at any time by providing written notice. Upon termination:
                    </p>
                    <ul className="space-y-2 text-custom-dark/70 text-sm">
                      <li>• Access to services will be discontinued</li>
                      <li>• Data will be retained as per our policy</li>
                      <li>• Outstanding fees must be paid</li>
                      <li>• Confidentiality obligations continue</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-custom-dark mb-4">Termination by Us</h3>
                    <p className="text-custom-dark/70 text-sm mb-4">
                      We may terminate your account for:
                    </p>
                    <ul className="space-y-2 text-custom-dark/70 text-sm">
                      <li>• Violation of these terms</li>
                      <li>• Non-payment of fees</li>
                      <li>• Fraudulent activity</li>
                      <li>• Legal or regulatory requirements</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-custom-dark mb-8 hover:text-custom-dark/80 transition-all duration-1000 cursor-default flex items-center">
                <Mail className="w-8 h-8 mr-4 text-custom-dark/70" />
                Contact Information
              </h2>
              <div className="bg-custom-light/30 rounded-2xl p-8">
                <p className="text-custom-dark/70 leading-relaxed text-base mb-6">
                  For questions about these Terms of Service or our services, please contact us:
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
              </div>
            </div>

            {/* Governing Law */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-custom-dark mb-8 hover:text-custom-dark/80 transition-all duration-1000 cursor-default">Governing Law</h2>
              <div className="bg-custom-light/30 rounded-2xl p-8">
                <p className="text-custom-dark/70 leading-relaxed text-base">
                  These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction in which Genify AI operates, without regard to its conflict of law provisions. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in that jurisdiction.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}

export default TermsOfService;

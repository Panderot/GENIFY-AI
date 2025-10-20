import React from 'react';
import Layout from '../components/Layout';
import { Shield, Eye, Lock, Database, Users, Mail, Phone } from 'lucide-react';

function PrivacyPolicy() {
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
              <Shield className="w-5 h-5 mr-3 animate-pulse" />
              Privacy & Security
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-custom-dark leading-tight hover:text-custom-dark/80 transition-all duration-1000 cursor-default mb-8">
              Privacy Policy
            </h1>
            <p className="text-base text-custom-dark/60 leading-relaxed max-w-3xl mx-auto font-light">
              Your privacy is important to us. This policy explains how Genify AI collects, uses, and protects your personal information.
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
            <div className="mb-16 animate-in slide-in-from-bottom duration-1000">
              <div className="bg-custom-light/40 backdrop-blur-xl rounded-3xl p-8 border border-custom-light/60 hover:shadow-2xl hover:shadow-custom-light/30 transition-all duration-700 group hover:-translate-y-2">
                <h2 className="text-3xl md:text-4xl font-black text-custom-dark mb-8 hover:text-custom-dark/80 transition-all duration-1000 cursor-default flex items-center">
                  <div className="w-12 h-12 bg-custom-dark rounded-2xl flex items-center justify-center mr-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 relative overflow-hidden animate-glow">
                    <span className="absolute inset-0 bg-gradient-to-r from-custom-light/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
                    <Eye className="w-6 h-6 text-white relative z-10" />
                  </div>
                  Introduction
                </h2>
                <p className="text-custom-dark/60 leading-relaxed text-base mb-6 font-light">
                  At Genify AI, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
                <p className="text-custom-dark/60 leading-relaxed text-base font-light">
                  By using our services, you agree to the collection and use of information in accordance with this policy.
                </p>
              </div>
            </div>

            {/* Information We Collect */}
            <div className="mb-16 animate-in slide-in-from-bottom duration-1000 delay-200">
              <h2 className="text-3xl md:text-4xl font-black text-custom-dark mb-8 hover:text-custom-dark/80 transition-all duration-1000 cursor-default flex items-center">
                <div className="w-12 h-12 bg-custom-dark rounded-2xl flex items-center justify-center mr-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 relative overflow-hidden animate-glow">
                  <span className="absolute inset-0 bg-gradient-to-r from-custom-light/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
                  <Database className="w-6 h-6 text-white relative z-10" />
                </div>
                Information We Collect
              </h2>
              
              <div className="bg-custom-light/30 rounded-2xl p-8 mb-8">
                <h3 className="text-xl font-bold text-custom-dark mb-4">Personal Information</h3>
                <ul className="space-y-3 text-custom-dark/70">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-custom-dark rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Name and contact information (email address, phone number)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-custom-dark rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Company information and business details</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-custom-dark rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Communication preferences and project requirements</span>
                  </li>
                </ul>
              </div>

              <div className="bg-custom-light/30 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-custom-dark mb-4">Technical Information</h3>
                <ul className="space-y-3 text-custom-dark/70">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-custom-dark rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>IP address and browser information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-custom-dark rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Website usage data and analytics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-custom-dark rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Device information and operating system</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-custom-dark mb-8 hover:text-custom-dark/80 transition-all duration-1000 cursor-default flex items-center">
                <Users className="w-8 h-8 mr-4 text-custom-dark/70" />
                How We Use Your Information
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-custom-light/40 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-custom-dark mb-4">Service Delivery</h3>
                  <ul className="space-y-2 text-custom-dark/70 text-sm">
                    <li>• Providing automation solutions</li>
                    <li>• Processing your requests</li>
                    <li>• Delivering project updates</li>
                    <li>• Managing your account</li>
                  </ul>
                </div>
                <div className="bg-custom-light/40 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-custom-dark mb-4">Communication</h3>
                  <ul className="space-y-2 text-custom-dark/70 text-sm">
                    <li>• Responding to inquiries</li>
                    <li>• Sending project updates</li>
                    <li>• Providing customer support</li>
                    <li>• Sharing relevant content</li>
                  </ul>
                </div>
                <div className="bg-custom-light/40 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-custom-dark mb-4">Business Operations</h3>
                  <ul className="space-y-2 text-custom-dark/70 text-sm">
                    <li>• Analyzing website usage</li>
                    <li>• Improving our services</li>
                    <li>• Ensuring security</li>
                    <li>• Legal compliance</li>
                  </ul>
                </div>
                <div className="bg-custom-light/40 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-custom-dark mb-4">Marketing</h3>
                  <ul className="space-y-2 text-custom-dark/70 text-sm">
                    <li>• Sending newsletters</li>
                    <li>• Promoting new services</li>
                    <li>• Industry insights</li>
                    <li>• Event invitations</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Security */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-custom-dark mb-8 hover:text-custom-dark/80 transition-all duration-1000 cursor-default flex items-center">
                <Lock className="w-8 h-8 mr-4 text-custom-dark/70" />
                Data Security
              </h2>
              <div className="bg-custom-light/30 rounded-2xl p-8">
                <p className="text-custom-dark/70 leading-relaxed text-base mb-6">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-custom-dark mb-3">Technical Safeguards</h4>
                    <ul className="space-y-2 text-custom-dark/70 text-sm">
                      <li>• SSL encryption for data transmission</li>
                      <li>• Secure data storage systems</li>
                      <li>• Regular security audits</li>
                      <li>• Access controls and authentication</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-custom-dark mb-3">Administrative Safeguards</h4>
                    <ul className="space-y-2 text-custom-dark/70 text-sm">
                      <li>• Employee training on data protection</li>
                      <li>• Privacy impact assessments</li>
                      <li>• Incident response procedures</li>
                      <li>• Regular policy reviews</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-custom-dark mb-8 hover:text-custom-dark/80 transition-all duration-1000 cursor-default">Your Rights</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-custom-light/40 rounded-2xl p-6 text-center">
                  <div className="w-16 h-16 bg-custom-dark rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-custom-dark mb-3">Access</h3>
                  <p className="text-custom-dark/70 text-sm">Request access to your personal data</p>
                </div>
                <div className="bg-custom-light/40 rounded-2xl p-6 text-center">
                  <div className="w-16 h-16 bg-custom-dark rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-custom-dark mb-3">Correction</h3>
                  <p className="text-custom-dark/70 text-sm">Request correction of inaccurate data</p>
                </div>
                <div className="bg-custom-light/40 rounded-2xl p-6 text-center">
                  <div className="w-16 h-16 bg-custom-dark rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-custom-dark mb-3">Deletion</h3>
                  <p className="text-custom-dark/70 text-sm">Request deletion of your data</p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-custom-dark mb-8 hover:text-custom-dark/80 transition-all duration-1000 cursor-default flex items-center">
                <Mail className="w-8 h-8 mr-4 text-custom-dark/70" />
                Contact Us
              </h2>
              <div className="bg-custom-light/30 rounded-2xl p-8">
                <p className="text-custom-dark/70 leading-relaxed text-base mb-6">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
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

            {/* Policy Updates */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-custom-dark mb-8 hover:text-custom-dark/80 transition-all duration-1000 cursor-default">Policy Updates</h2>
              <div className="bg-custom-light/30 rounded-2xl p-8">
                <p className="text-custom-dark/70 leading-relaxed text-base">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}

export default PrivacyPolicy;

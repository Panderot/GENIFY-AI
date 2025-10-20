import React from 'react';
import Layout from '../components/Layout';
import { Cookie, Settings, Eye, Database, Mail, Phone } from 'lucide-react';

function CookiePolicy() {
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
              <Cookie className="w-5 h-5 mr-3 animate-pulse" />
              Cookie Information
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-custom-dark leading-tight hover:text-custom-dark/80 transition-all duration-1000 cursor-default mb-8">
              Cookie Policy
            </h1>
            <p className="text-base text-custom-dark/60 leading-relaxed max-w-3xl mx-auto font-light">
              Learn about how Genify AI uses cookies and similar technologies to enhance your browsing experience.
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
            
            {/* What Are Cookies */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-custom-dark mb-8 hover:text-custom-dark/80 transition-all duration-1000 cursor-default flex items-center">
                <Cookie className="w-8 h-8 mr-4 text-custom-dark/70" />
                What Are Cookies?
              </h2>
              <div className="bg-custom-light/30 rounded-2xl p-8">
                <p className="text-custom-dark/70 leading-relaxed text-base mb-6">
                  Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently and to provide information to website owners.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-custom-dark rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Database className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-custom-dark mb-3">Small Files</h3>
                    <p className="text-custom-dark/70 text-sm">Tiny text files stored on your device</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-custom-dark rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-custom-dark mb-3">Website Memory</h3>
                    <p className="text-custom-dark/70 text-sm">Remember your preferences and settings</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-custom-dark rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Settings className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-custom-dark mb-3">Enhanced Experience</h3>
                    <p className="text-custom-dark/70 text-sm">Improve website functionality and performance</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Types of Cookies */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-custom-dark mb-8 hover:text-custom-dark/80 transition-all duration-1000 cursor-default">Types of Cookies We Use</h2>
              
              {/* Essential Cookies */}
              <div className="mb-8">
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                    <span className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-xs font-bold">✓</span>
                    </span>
                    Essential Cookies
                  </h3>
                  <p className="text-green-700 mb-4">These cookies are necessary for the website to function properly.</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-green-800 mb-3">Purpose</h4>
                      <ul className="space-y-2 text-green-700 text-sm">
                        <li>• Enable basic website functionality</li>
                        <li>• Remember login status</li>
                        <li>• Maintain security features</li>
                        <li>• Store user preferences</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-green-800 mb-3">Examples</h4>
                      <ul className="space-y-2 text-green-700 text-sm">
                        <li>• Authentication cookies</li>
                        <li>• Security tokens</li>
                        <li>• Session management</li>
                        <li>• Form data retention</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-green-100 rounded-lg">
                    <p className="text-green-800 text-sm font-medium">
                      <strong>Cannot be disabled:</strong> These cookies are essential for the website to work properly.
                    </p>
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="mb-8">
                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                    <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-xs font-bold">📊</span>
                    </span>
                    Analytics Cookies
                  </h3>
                  <p className="text-blue-700 mb-4">These cookies help us understand how visitors interact with our website.</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-blue-800 mb-3">Purpose</h4>
                      <ul className="space-y-2 text-blue-700 text-sm">
                        <li>• Track website usage</li>
                        <li>• Analyze user behavior</li>
                        <li>• Improve website performance</li>
                        <li>• Generate usage statistics</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-800 mb-3">Data Collected</h4>
                      <ul className="space-y-2 text-blue-700 text-sm">
                        <li>• Page views and sessions</li>
                        <li>• User journey paths</li>
                        <li>• Time spent on pages</li>
                        <li>• Popular content areas</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                    <p className="text-blue-800 text-sm font-medium">
                      <strong>Optional:</strong> You can disable these cookies in your browser settings.
                    </p>
                  </div>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="mb-8">
                <div className="bg-purple-50 border border-purple-200 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center">
                    <span className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-xs font-bold">🎯</span>
                    </span>
                    Marketing Cookies
                  </h3>
                  <p className="text-purple-700 mb-4">These cookies are used to deliver relevant advertisements and track marketing effectiveness.</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-purple-800 mb-3">Purpose</h4>
                      <ul className="space-y-2 text-purple-700 text-sm">
                        <li>• Show relevant advertisements</li>
                        <li>• Track campaign performance</li>
                        <li>• Personalize content</li>
                        <li>• Measure ad effectiveness</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-purple-800 mb-3">Third Parties</h4>
                      <ul className="space-y-2 text-purple-700 text-sm">
                        <li>• Google Analytics</li>
                        <li>• Social media platforms</li>
                        <li>• Advertising networks</li>
                        <li>• Marketing partners</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-purple-100 rounded-lg">
                    <p className="text-purple-800 text-sm font-medium">
                      <strong>Optional:</strong> You can opt out of these cookies using the settings below.
                    </p>
                  </div>
                </div>
              </div>
            </div>


            {/* Third-Party Cookies */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-custom-dark mb-8 hover:text-custom-dark/80 transition-all duration-1000 cursor-default">Third-Party Cookies</h2>
              <div className="bg-custom-light/30 rounded-2xl p-8">
                <p className="text-custom-dark/70 leading-relaxed text-base mb-6">
                  We may use third-party services that place their own cookies on your device. These services help us provide better functionality and analyze our website performance.
                </p>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-custom-dark/20">
                        <th className="text-left py-3 px-4 font-bold text-custom-dark">Service</th>
                        <th className="text-left py-3 px-4 font-bold text-custom-dark">Purpose</th>
                        <th className="text-left py-3 px-4 font-bold text-custom-dark">Cookie Type</th>
                        <th className="text-left py-3 px-4 font-bold text-custom-dark">Opt-out</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-custom-dark/10">
                        <td className="py-3 px-4 text-custom-dark/70">Google Analytics</td>
                        <td className="py-3 px-4 text-custom-dark/70">Website analytics</td>
                        <td className="py-3 px-4 text-custom-dark/70">Analytics</td>
                        <td className="py-3 px-4">
                          <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">Opt out</a>
                        </td>
                      </tr>
                      <tr className="border-b border-custom-dark/10">
                        <td className="py-3 px-4 text-custom-dark/70">Google Tag Manager</td>
                        <td className="py-3 px-4 text-custom-dark/70">Tag management</td>
                        <td className="py-3 px-4 text-custom-dark/70">Essential</td>
                        <td className="py-3 px-4">
                          <span className="text-gray-500 text-sm">Required</span>
                        </td>
                      </tr>
                      <tr className="border-b border-custom-dark/10">
                        <td className="py-3 px-4 text-custom-dark/70">Social Media</td>
                        <td className="py-3 px-4 text-custom-dark/70">Social sharing</td>
                        <td className="py-3 px-4 text-custom-dark/70">Marketing</td>
                        <td className="py-3 px-4">
                          <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">Opt out</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Cookie Retention */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-custom-dark mb-8 hover:text-custom-dark/80 transition-all duration-1000 cursor-default">Cookie Retention</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-custom-light/40 rounded-2xl p-6 text-center">
                  <div className="w-16 h-16 bg-custom-dark rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xs font-bold">S</span>
                  </div>
                  <h3 className="font-bold text-custom-dark mb-3">Session Cookies</h3>
                  <p className="text-custom-dark/70 text-sm">Deleted when you close your browser</p>
                </div>
                <div className="bg-custom-light/40 rounded-2xl p-6 text-center">
                  <div className="w-16 h-16 bg-custom-dark rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xs font-bold">30</span>
                  </div>
                  <h3 className="font-bold text-custom-dark mb-3">Short-term</h3>
                  <p className="text-custom-dark/70 text-sm">Expire within 30 days</p>
                </div>
                <div className="bg-custom-light/40 rounded-2xl p-6 text-center">
                  <div className="w-16 h-16 bg-custom-dark rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xs font-bold">2Y</span>
                  </div>
                  <h3 className="font-bold text-custom-dark mb-3">Long-term</h3>
                  <p className="text-custom-dark/70 text-sm">May persist for up to 2 years</p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-custom-dark mb-8 hover:text-custom-dark/80 transition-all duration-1000 cursor-default flex items-center">
                <Mail className="w-8 h-8 mr-4 text-custom-dark/70" />
                Questions About Cookies?
              </h2>
              <div className="bg-custom-light/30 rounded-2xl p-8">
                <p className="text-custom-dark/70 leading-relaxed text-base mb-6">
                  If you have any questions about our use of cookies or this Cookie Policy, please contact us:
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
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on this page and updating the "Last updated" date.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}

export default CookiePolicy;

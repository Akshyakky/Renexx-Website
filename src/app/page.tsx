import { Building2, FileText, Receipt, Shield, ClipboardCheck, Globe, ArrowRight, Truck } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-32 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-500/5 blur-3xl transform rotate-12" />
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gray-700/10 blur-3xl transform -rotate-12" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Professional Property Contract
              <div className="mt-2">
                <span className="text-orange-500">Management</span> in Dubai
              </div>
            </h1>
            <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-300 leading-relaxed">
              Streamline your property contracts, leases, and proposals with our comprehensive management solutions
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contracts"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-orange-500/20 group"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-600 text-gray-300 rounded-lg font-semibold hover:border-orange-500 hover:text-orange-500 transition-all duration-200 transform hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<FileText className="h-12 w-12 text-orange-500" />}
              title="Contract Management"
              description="Comprehensive contract creation and tracking for property units"
            />
            <ServiceCard
              icon={<Building2 className="h-12 w-12 text-orange-500" />}
              title="Lease Administration"
              description="Efficient lease management and documentation services"
            />
            <ServiceCard icon={<Receipt className="h-12 w-12 text-orange-500" />} title="Invoice Generation" description="Professional invoice and receipt management system" />
            <ServiceCard icon={<Truck className="h-12 w-12 text-orange-500" />} title="Logistics Services" description="Professional logistics and transportation solutions" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Why Choose Renexx</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <FeatureCard
              icon={<Shield className="h-16 w-16 text-orange-500" />}
              title="Secure & Compliant"
              description="UAE law-compliant contract management with top-tier security"
            />
            <FeatureCard
              icon={<ClipboardCheck className="h-16 w-16 text-orange-500" />}
              title="Streamlined Process"
              description="Efficient workflow from proposal to contract termination"
            />
            <FeatureCard icon={<Globe className="h-16 w-16 text-orange-500" />} title="Dubai Expertise" description="Specialized in Dubai property management requirements" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-xl p-8 max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900">Contact Us</h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mt-4 rounded-full"></div>
            </div>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                  rows={4}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-4 rounded-lg hover:bg-orange-600 transition-all duration-200 font-semibold transform hover:scale-[1.02] shadow-lg hover:shadow-orange-500/20"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] group">
      <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-200">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{title}</h3>
      <p className="text-gray-900 text-lg text-center leading-relaxed">{description}</p>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-gray-50 transition-all duration-200 transform hover:scale-[1.02] group">
      <div className="mb-8 group-hover:scale-110 transition-transform duration-200">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-900 text-lg leading-relaxed">{description}</p>
    </div>
  );
}

import { Building2, FileText, Receipt, Shield, ClipboardCheck, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professional Property Contract
            <span className="text-orange-500"> Management</span> in Dubai
          </h1>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-300">Streamline your property contracts, leases, and proposals with our comprehensive management solutions</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contracts"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white rounded-md font-semibold hover:bg-orange-600 transition-colors group"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-600 text-gray-300 rounded-md font-semibold hover:border-orange-500 hover:text-orange-500 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mt-4"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<FileText className="h-12 w-12 text-orange-500" />}
              title="Contract Management"
              description="Comprehensive contract creation and tracking for property units"
              titleClass="text-2xl font-bold text-gray-900 mb-4"
              descriptionClass="text-gray-600 text-lg"
            />
            <ServiceCard
              icon={<Building2 className="h-12 w-12 text-orange-500" />}
              title="Lease Administration"
              description="Efficient lease management and documentation services"
              titleClass="text-2xl font-bold text-gray-900 mb-4"
              descriptionClass="text-gray-600 text-lg"
            />
            <ServiceCard
              icon={<Receipt className="h-12 w-12 text-orange-500" />}
              title="Invoice Generation"
              description="Professional invoice and receipt management system"
              titleClass="text-2xl font-bold text-gray-900 mb-4"
              descriptionClass="text-gray-600 text-lg"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Why Choose Renexx</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mt-4"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <FeatureCard
              icon={<Shield className="h-16 w-16 text-orange-500" />}
              title="Secure & Compliant"
              description="UAE law-compliant contract management with top-tier security"
              titleClass="text-2xl font-bold text-gray-900 mb-4"
              descriptionClass="text-gray-600 text-lg"
            />
            <FeatureCard
              icon={<ClipboardCheck className="h-16 w-16 text-orange-500" />}
              title="Streamlined Process"
              description="Efficient workflow from proposal to contract termination"
              titleClass="text-2xl font-bold text-gray-900 mb-4"
              descriptionClass="text-gray-600 text-lg"
            />
            <FeatureCard
              icon={<Globe className="h-16 w-16 text-orange-500" />}
              title="Dubai Expertise"
              description="Specialized in Dubai property management requirements"
              titleClass="text-2xl font-bold text-gray-900 mb-4"
              descriptionClass="text-gray-600 text-lg"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900">Contact Us</h2>
              <div className="w-20 h-1 bg-orange-500 mx-auto mt-4"></div>
            </div>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  rows={4}
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-orange-500 text-white py-4 rounded-md hover:bg-orange-600 transition-colors font-semibold">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

function ServiceCard({
  icon,
  title,
  description,
  titleClass,
  descriptionClass,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  titleClass?: string;
  descriptionClass?: string;
}) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex justify-center mb-6">{icon}</div>
      <h3 className={titleClass || "text-xl font-bold text-gray-900 mb-4"}>{title}</h3>
      <p className={descriptionClass || "text-gray-600"}>{description}</p>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  titleClass,
  descriptionClass,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  titleClass?: string;
  descriptionClass?: string;
}) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
      <div className="mb-8">{icon}</div>
      <h3 className={titleClass || "text-xl font-bold text-gray-900 mb-4"}>{title}</h3>
      <p className={descriptionClass || "text-gray-600"}>{description}</p>
    </div>
  );
}

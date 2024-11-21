// app/services/page.tsx
import { Building2, FileText, Receipt, Shield, ClipboardCheck, Globe } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-500/5 blur-3xl transform rotate-12" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl">Comprehensive property management solutions for all your needs in Dubai.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Link href="/services/residential" className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]">
            <Building2 className="h-12 w-12 text-orange-500 mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Residential Properties</h3>
            <p className="text-gray-900 mb-4">Comprehensive residential property management solutions.</p>
            <span className="text-orange-500 font-semibold">Learn more →</span>
          </Link>

          <Link href="/services/commercial" className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]">
            <FileText className="h-12 w-12 text-orange-500 mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Commercial Properties</h3>
            <p className="text-gray-900 mb-4">Professional commercial property management services.</p>
            <span className="text-orange-500 font-semibold">Learn more →</span>
          </Link>

          <Link href="/services/consultancy" className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]">
            <Receipt className="h-12 w-12 text-orange-500 mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Property Consultancy</h3>
            <p className="text-gray-900 mb-4">Expert guidance and consultation services.</p>
            <span className="text-orange-500 font-semibold">Learn more →</span>
          </Link>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Secure & Compliant</h3>
              <p className="text-gray-900">All services comply with UAE regulations and standards.</p>
            </div>
            <div className="text-center">
              <ClipboardCheck className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Efficient Process</h3>
              <p className="text-gray-900">Streamlined operations and quick response times.</p>
            </div>
            <div className="text-center">
              <Globe className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Local Expertise</h3>
              <p className="text-gray-900">Deep understanding of Dubai&apos;s property market.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-gray-900 mb-8">Contact us today to learn more about our services.</p>
          <Link href="/contact" className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-all duration-200">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

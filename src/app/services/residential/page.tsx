// app/services/residential/page.tsx
import { Home, Shield, Clock, CheckCircle } from "lucide-react";

export default function ResidentialPage() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-500/5 blur-3xl transform rotate-12" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Residential Property Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl">Comprehensive residential property management solutions tailored for Dubai&apos;s dynamic real estate market.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <Home className="h-12 w-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Property Contracts</h3>
            <p className="text-gray-900">Expert contract creation and management for residential properties.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <Shield className="h-12 w-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Tenant Screening</h3>
            <p className="text-gray-900">Thorough background checks and verification processes.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <Clock className="h-12 w-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-900">24/7 Support</h3>
            <p className="text-gray-900">Round-the-clock assistance for tenants and property owners.</p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Why Choose Our Residential Services?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-orange-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2 text-gray-900">Compliant Documentation</h3>
                <p className="text-gray-900">All contracts and agreements follow UAE real estate regulations.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-orange-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2 text-gray-900">Digital Management</h3>
                <p className="text-gray-900">Easy access to all property documents through our secure platform.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Ready to Get Started?</h2>
          <p className="text-gray-900 mb-8">Contact us today to learn more about our residential property services.</p>
          <button className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-all duration-200">Contact Us</button>
        </div>
      </div>
    </div>
  );
}

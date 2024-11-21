// app/services/commercial/page.tsx
import { Building2, BarChart, Users, Lock, CheckCircle } from "lucide-react";

export default function CommercialPage() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-500/5 blur-3xl transform rotate-12" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Commercial Property Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl">Professional commercial property management solutions for businesses in Dubai.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <Building2 className="h-12 w-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Lease Management</h3>
            <p className="text-gray-900">Comprehensive lease administration for commercial properties.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <BarChart className="h-12 w-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Performance Analysis</h3>
            <p className="text-gray-900">Detailed reporting and performance metrics for your properties.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <Users className="h-12 w-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Tenant Relations</h3>
            <p className="text-gray-900">Professional tenant relationship management services.</p>
          </div>
        </div>

        {/* Features List */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8">Commercial Property Solutions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <Lock className="h-6 w-6 text-orange-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2 text-gray-900">Secure Documentation</h3>
                <p className="text-gray-900">All commercial contracts are securely stored and managed.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-orange-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2 text-gray-900">Compliance Guaranteed</h3>
                <p className="text-gray-900">Full compliance with UAE commercial property regulations.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Elevate Your Commercial Property Management</h2>
          <p className="text-gray-900 mb-8">Let us help you optimize your commercial property operations.</p>
          <button className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-all duration-200">Get Started</button>
        </div>
      </div>
    </div>
  );
}

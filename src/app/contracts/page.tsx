// app/contracts/page.tsx
import { FileText, CheckCircle, ArrowRight } from "lucide-react";

export default function ContractsPage() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-500/5 blur-3xl transform rotate-12" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Contract Management</h1>
          <p className="text-xl text-gray-300 max-w-2xl">Streamlined contract creation and management for your property needs.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <FileText className="h-12 w-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Contract Creation</h3>
            <p className="text-gray-900">Professional contract drafting services.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <CheckCircle className="h-12 w-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Contract Review</h3>
            <p className="text-gray-900">Expert review and validation services.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <ArrowRight className="h-12 w-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Contract Tracking</h3>
            <p className="text-gray-900">Automated contract lifecycle management.</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Contract Management Solutions</h2>
          <div className="space-y-6">
            <p className="text-gray-900">
              Our comprehensive contract management system helps you create, track, and manage all your property-related contracts efficiently. From residential leases to
              commercial agreements, we ensure all your contracts are properly documented and maintained.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-orange-500 flex-shrink-0" />
                <span className="text-gray-900">Automated contract generation</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-orange-500 flex-shrink-0" />
                <span className="text-gray-900">Digital signature support</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-orange-500 flex-shrink-0" />
                <span className="text-gray-900">Secure document storage</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-orange-500 flex-shrink-0" />
                <span className="text-gray-900">Contract renewal tracking</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Start Managing Your Contracts</h2>
          <p className="text-gray-900 mb-8">Get started with our contract management system today.</p>
          <button className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-all duration-200">Create Contract</button>
        </div>
      </div>
    </div>
  );
}

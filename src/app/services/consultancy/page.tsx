// app/services/consultancy/page.tsx
import { Lightbulb, TrendingUp, FileSearch, Scale, CheckCircle } from "lucide-react";

export default function ConsultancyPage() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-500/5 blur-3xl transform rotate-12" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-gray-900">Property Consultancy Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl">Expert guidance and consultation for all your property management needs in Dubai.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <Lightbulb className="h-12 w-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Strategic Planning</h3>
            <p className="text-gray-900">Expert guidance on property management strategies.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <TrendingUp className="h-12 w-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Market Analysis</h3>
            <p className="text-gray-900">Comprehensive market research and analysis.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <FileSearch className="h-12 w-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Due Diligence</h3>
            <p className="text-gray-900">Thorough property and contract evaluation services.</p>
          </div>
        </div>

        {/* Expertise Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Our Expertise</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <Scale className="h-6 w-6 text-orange-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2 text-gray-900">Legal Compliance</h3>
                <p className="text-gray-900">Expert guidance on UAE property laws and regulations.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-orange-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2 text-gray-900">Risk Assessment</h3>
                <p className="text-gray-900">Comprehensive property risk analysis and mitigation strategies.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Need Expert Guidance?</h2>
          <p className="text-gray-900 mb-8">Schedule a consultation with our property experts today.</p>
          <button className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-all duration-200">Book Consultation</button>
        </div>
      </div>
    </div>
  );
}

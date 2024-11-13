"use client";

import Link from "next/link";
import { Building2, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold text-white">
                Ren<span className="text-orange-500">exx</span>
              </span>
            </Link>
            <p className="text-gray-400 mt-4">Professional property contract and lease management solutions in Dubai.</p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-orange-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/contracts" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Contracts
                </Link>
              </li>
              <li>
                <Link href="/leases" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Leases
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/residential" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Residential Properties
                </Link>
              </li>
              <li>
                <Link href="/services/commercial" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Commercial Properties
                </Link>
              </li>
              <li>
                <Link href="/services/consultancy" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Property Consultancy
                </Link>
              </li>
              <li>
                <Link href="/services/management" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Contract Management
                </Link>
              </li>
              <li>
                <Link href="/services/logistics" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Logistics Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <MapPin className="text-orange-500" size={20} />
                <span className="text-gray-400">Business Bay, Dubai, UAE</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-orange-500" size={20} />
                <span className="text-gray-400">+971 54 546 0875</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-orange-500" size={20} />
                <a href="mailto:info@svp-infotech.com" className="text-gray-400 hover:text-orange-500 transition-colors">
                  info@svp-infotech.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-orange-500" size={20} />
                <a href="mailto:sales@svp-infotech.com" className="text-gray-400 hover:text-orange-500 transition-colors">
                  sales@svp-infotech.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">© {currentYear} Renexx. All rights reserved.</div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-orange-500 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-orange-500 transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-orange-500 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

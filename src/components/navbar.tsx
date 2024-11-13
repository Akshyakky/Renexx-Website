"use client";

import Link from "next/link";
import { Building2, FileText, Receipt, UserCircle, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold text-white">
                Ren<span className="text-orange-500">exx</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-300 hover:text-orange-500" onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}>
                <span>Services</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link href="/services/residential" className="block px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-orange-500">
                    Residential Properties
                  </Link>
                  <Link href="/services/commercial" className="block px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-orange-500">
                    Commercial Properties
                  </Link>
                  <Link href="/services/consultancy" className="block px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-orange-500">
                    Property Consultancy
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/contracts" className="flex items-center space-x-1 text-gray-300 hover:text-orange-500">
              <FileText className="h-5 w-5" />
              <span>Contracts</span>
            </Link>
            <Link href="/leases" className="flex items-center space-x-1 text-gray-300 hover:text-orange-500">
              <Building2 className="h-5 w-5" />
              <span>Leases</span>
            </Link>
            <Link href="/invoices" className="flex items-center space-x-1 text-gray-300 hover:text-orange-500">
              <Receipt className="h-5 w-5" />
              <span>Invoices</span>
            </Link>
            <Link href="/login" className="flex items-center space-x-1 px-6 py-3 rounded-md bg-orange-500 text-white hover:bg-orange-600 transition-colors">
              <UserCircle className="h-5 w-5" />
              <span>Login</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-300 hover:text-orange-500">
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link href="/services" className="text-gray-300 hover:text-orange-500">
                Services
              </Link>
              <Link href="/contracts" className="text-gray-300 hover:text-orange-500">
                Contracts
              </Link>
              <Link href="/leases" className="text-gray-300 hover:text-orange-500">
                Leases
              </Link>
              <Link href="/invoices" className="text-gray-300 hover:text-orange-500">
                Invoices
              </Link>
              <Link href="/login" className="inline-block px-6 py-3 rounded-md bg-orange-500 text-white hover:bg-orange-600 text-center">
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

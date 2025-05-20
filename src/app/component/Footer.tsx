// components/Footer.jsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#1c1524] text-white border-t border-b border-blue-500">
      {/* Top section with logo and description */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-12 h-12 relative mr-3">
              <Image 
                src="/LOGO.png" 
                alt="VR Logo"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <span className="text-lg font-semibold text-blue-300">VR9</span>
          </div>
          <p className="text-gray-300 ml-0 md:ml-4">
            Our VR gaming website present amazing features and fantastic designs
          </p>
        </div>

        {/* Middle section with columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
          {/* Contact Column */}
          <div>
            <h3 className="font-medium text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Email: rimshashahid@gmail.com</li>
              <li>Contact no: 92+6472074296</li>
              <li>Instagram : Vrgamingpak</li>
            </ul>
          </div>

          {/* Terms Column */}
          <div>
            <h3 className="font-medium text-lg mb-4">Terms and service</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/career" className="hover:text-blue-300">Career</Link></li>
              <li><Link href="/management-team" className="hover:text-blue-300">Management team</Link></li>
            </ul>
          </div>

          {/* About Column */}
          <div>
            <h3 className="font-medium text-lg mb-4">About</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/privacy-policy" className="hover:text-blue-300">privacy policy</Link></li>
              <li><Link href="/terms-and-service" className="hover:text-blue-300">term and service</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700"></div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 py-6">
          <Link href="https://google.com" className="text-gray-300 hover:text-white">
            <span className="sr-only">Google</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032 s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2 C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
            </svg>
          </Link>
          <Link href="https://instagram.com" className="text-gray-300 hover:text-white">
            <span className="sr-only">Instagram</span>
            <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </Link>
          <Link href="https://facebook.com" className="text-gray-300 hover:text-white">
            <span className="sr-only">Facebook</span>
            <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </Link>
          <Link href="https://twitter.com" className="text-gray-300 hover:text-white">
            <span className="sr-only">Twitter</span>
            <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.159 1.2A4.92 4.92 0 0012.2 9.75c0 .388.043.766.127 1.126A13.995 13.995 0 012.608 3.3a4.917 4.917 0 001.524 6.574A4.88 4.88 0 012.4 9.183v.063a4.926 4.926 0 003.95 4.829 4.95 4.95 0 01-2.224.085 4.935 4.935 0 004.6 3.42A9.863 9.863 0 011.2 19.954a9.962 9.962 0 001.08.056A13.942 13.942 0 009.671 22c8.035 0 12.432-6.656 12.432-12.428 0-.188-.004-.377-.012-.566a8.865 8.865 0 002.206-2.27l-.045-.016z" />
            </svg>
          </Link>
        </div>

        {/* Bottom Divider */}
        <div className="border-t border-gray-700"></div>
      </div>
    </footer>
  );
}
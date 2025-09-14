import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-16">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-orange-500 text-2xl font-bold mb-6">OMS Software </h3>
            <div className="flex space-x-4 text-gray-600">
              <a
                href="https://www.linkedin.com/in/pranay-wadyalkar-00054276/recent-activity/all/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                LinkedIn
              </a>
              <span>f</span>
              <span>x</span>
              <span>yt</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-4">Platform</h3>
            <ul className="space-y-3">
              <li><a href="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</a></li>
              <li><a href="/explore-organizations" className="text-gray-600 hover:text-gray-900">Explore Organizations</a></li>
              <li><a href="/explore-industries" className="text-gray-600 hover:text-gray-900">Explore Industries</a></li>
              <li><a href="/best-practices" className="text-gray-600 hover:text-gray-900">Best Practices</a></li>
              <li><a href="/help-center" className="text-gray-600 hover:text-gray-900">Help Center</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-4">Why OMS Software</h3>
            <ul className="space-y-3">
              <li><a href="/why-different" className="text-gray-600 hover:text-gray-900">How We're Different</a></li>
              <li><a href="/success-stories" className="text-gray-600 hover:text-gray-900">Success Stories</a></li>
              <li><a href="/testimonials" className="text-gray-600 hover:text-gray-900">Testimonials</a></li>
              <li><a href="/faq" className="text-gray-600 hover:text-gray-900">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="/blog" className="text-gray-600 hover:text-gray-900">Blog</a></li>
              <li><a href="/ebooks" className="text-gray-600 hover:text-gray-900">Ebooks</a></li>
              <li><a href="/newsletter" className="text-gray-600 hover:text-gray-900">Newsletter</a></li>
              <li><a href="/about" className="text-gray-600 hover:text-gray-900">About Us</a></li>
              <li><a href="/careers" className="text-gray-600 hover:text-gray-900">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-sm text-gray-600">
          © 2025, OMS Software. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Button } from '@/components/ui/button';

const PricingSection = () => {
  const features = [
    "Unlimited security audits",
    "AI-powered security report writing",
    "Smart organization matching",
    "Real-time collaboration",
    "Custom templates",
    "Priority support",
    "API access",
    "Advanced analytics"
  ];

  return (
    <div className="py-24">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Comparison Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why choose OMS Software over spreadsheets?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Google Sheets */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  📊
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Spreadsheets</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <p className="text-gray-600">Manual data entry and formatting</p>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <p className="text-gray-600">No standardization across audits</p>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <p className="text-gray-600">Limited collaboration features</p>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <p className="text-gray-600">No automation or AI assistance</p>
                </li>
              </ul>
            </div>

            {/* OMS Software */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  ✨
                </div>
                <h3 className="text-xl font-semibold text-gray-800">OMS Software</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-600">AI-powered report generation and insights</p>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-600">Professional templates and standardization</p>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-600">Real-time collaboration and feedback</p>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-600">Smart organization matching and security recommendations</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Choose the perfect plan for your needs
            </h2>
            <p className="text-xl text-gray-600">
              14-day free trial, no credit card required
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Basic</h3>
                <p className="text-gray-600">Perfect for independent auditors</p>
              </div>
              <div className="mb-6">
                <p className="text-4xl font-bold text-gray-800">$49</p>
                <p className="text-gray-600">per audit</p>
              </div>
              <Button className="w-full mb-6">Start free trial</Button>
              <ul className="space-y-3">
                {features.slice(0, 4).map((feature) => (
                  <li key={feature} className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pro Plan */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 transform md:scale-105 relative">
              <div className="absolute top-0 right-0 -translate-y-1/2 px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                Most Popular
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Pro</h3>
                <p className="text-gray-600">For growing audit teams</p>
              </div>
              <div className="mb-6">
                <p className="text-4xl font-bold text-gray-800">$99</p>
                <p className="text-gray-600">per audit</p>
              </div>
              <Button className="w-full mb-6 bg-blue-600 hover:bg-blue-700">Start free trial</Button>
              <ul className="space-y-3">
                {features.slice(0, 6).map((feature) => (
                  <li key={feature} className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Enterprise</h3>
                <p className="text-gray-600">For large organizations</p>
              </div>
              <div className="mb-6">
                <p className="text-4xl font-bold text-gray-800">Custom</p>
                <p className="text-gray-600">contact sales</p>
              </div>
              <Button className="w-full mb-6" variant="outline">Contact sales</Button>
              <ul className="space-y-3">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;

import { Button } from '@/components/ui/button';

const PricingCallout = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your security auditing needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">Basic</h3>
              <div className="mt-2">
                <span className="text-3xl font-bold text-gray-800">$49</span>
                <span className="text-gray-600">/audit</span>
              </div>
            </div>
            <div className="text-center">
              <Button variant="outline" className="w-full">Learn More</Button>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="bg-white rounded-xl p-6 shadow-md transform scale-105 relative border-2 border-blue-200">
            <div className="absolute top-0 right-0 -translate-y-1/2 px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
              Popular
            </div>
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">Pro</h3>
              <div className="mt-2">
                <span className="text-3xl font-bold text-gray-800">$99</span>
                <span className="text-gray-600">/audit</span>
              </div>
            </div>
            <div className="text-center">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Start Free Trial</Button>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">Enterprise</h3>
              <div className="mt-2">
                <span className="text-3xl font-bold text-gray-800">Custom</span>
              </div>
            </div>
            <div className="text-center">
              <Button variant="outline" className="w-full">Contact Sales</Button>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <a href="/pricing" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
            View Full Pricing Details
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingCallout;

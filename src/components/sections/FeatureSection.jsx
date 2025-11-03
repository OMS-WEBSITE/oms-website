import { useState, useEffect } from 'react';

const FeatureSection = () => {
  const mockups = [
    {
      id: 1,
      title: "Find organizations to audit"
    },
    {
      id: 2,
      title: "Apply for opportunities"
    },
    {
      id: 3,
      title: "Create detailed reports"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % mockups.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="features" className="relative py-32 isolate">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#e0e7ff_0%,_transparent_60%)] -z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_#dbeafe_0%,_transparent_60%)] -z-10"></div>
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Powerful Features for Modern Auditing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to streamline your IT security auditing workflow, all in one place.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-center">
          <div className="md:col-span-2 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-xl p-10 border border-blue-100/50 backdrop-blur-sm transform hover:scale-[1.01] transition-transform">
            <div className="relative h-[400px] mb-6">
              {mockups.map((mockup, index) => (
                <div
                  key={mockup.id}
                  className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ${
                    index === activeIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 h-full flex flex-col border border-gray-100 shadow-xl">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-semibold text-gray-800">{mockup.title}</h3>
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                    </div>
                    <div className="flex-1 bg-white rounded-lg shadow-lg p-4 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-lg"></div>
                      <div className="relative h-full">
                        {index === 0 && (
                          <div className="grid grid-cols-2 gap-4 h-full">
                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 flex items-center justify-center transform hover:scale-105 transition-transform">
                              <div className="text-center">
                                <div className="text-4xl font-bold text-blue-600 mb-3 animate-pulse">150+</div>
                                <p className="text-sm font-medium text-gray-700">Available Organizations</p>
                                <p className="text-xs text-gray-500 mt-1">Updated daily</p>
                              </div>
                            </div>
                            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 flex items-center justify-center transform hover:scale-105 transition-transform">
                              <div className="text-center">
                                <div className="text-4xl font-bold text-purple-600 mb-3">24/7</div>
                                <p className="text-sm font-medium text-gray-700">Expert Support</p>
                                <p className="text-xs text-gray-500 mt-1">Always available</p>
                              </div>
                            </div>
                          </div>
                        )}
                        {index === 1 && (
                          <div className="space-y-4">
                            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                    🔒
                                  </div>
                                  <div>
                                    <p className="font-medium">Enterprise Tech Corp</p>
                                    <p className="text-sm text-gray-500">Available Now</p>
                                  </div>
                                </div>
                                <button className="text-blue-600 text-sm font-medium">Apply →</button>
                              </div>
                            </div>
                            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                                    🌟
                                  </div>
                                  <div>
                                    <p className="font-medium">Financial Services Inc</p>
                                    <p className="text-sm text-gray-500">Premium</p>
                                  </div>
                                </div>
                                <button className="text-blue-600 text-sm font-medium">Apply →</button>
                              </div>
                            </div>
                          </div>
                        )}
                        {index === 2 && (
                          <div className="space-y-4">
                            <div className="h-3 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                              <div className="w-3/4 h-full bg-gradient-to-r from-green-400 to-green-500 animate-pulse"></div>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                              <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                                <p className="text-sm font-medium text-gray-600 mb-1">Tasks</p>
                                <p className="text-xl font-bold text-gray-800">12/15</p>
                                <div className="mt-1 h-1 bg-blue-100 rounded-full">
                                  <div className="w-4/5 h-full bg-blue-500 rounded-full"></div>
                                </div>
                              </div>
                              <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                                <p className="text-sm font-medium text-gray-600 mb-1">Time</p>
                                <p className="text-xl font-bold text-gray-800">4d</p>
                                <div className="mt-1 h-1 bg-purple-100 rounded-full">
                                  <div className="w-1/2 h-full bg-purple-500 rounded-full"></div>
                                </div>
                              </div>
                              <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                                <p className="text-sm font-medium text-gray-600 mb-1">Status</p>
                                <p className="text-xl font-bold text-green-600">75%</p>
                                <div className="mt-1 h-1 bg-green-100 rounded-full">
                                  <div className="w-3/4 h-full bg-green-500 rounded-full"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Circular indicators */}
            <div className="flex justify-center space-x-3">
              {mockups.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">
              You Can Do It All With <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">OMS Software</span>
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Experience the future of IT security auditing with OMS Software.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center text-2xl shadow-inner transform hover:scale-105 transition-transform">
                  🔍
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">Find organizations to audit</h3>
                  <p className="text-gray-600">Access our database of organizations looking for security assessments.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl flex items-center justify-center text-2xl shadow-inner transform hover:scale-105 transition-transform">
                  ✍️
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">Apply for opportunities</h3>
                  <p className="text-gray-600">Submit applications to audit organizations that match your security expertise.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-50 rounded-2xl flex items-center justify-center text-2xl shadow-inner transform hover:scale-105 transition-transform">
                  📊
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">Create detailed reports</h3>
                  <p className="text-gray-600">Use our templates to create professional audit reports.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;

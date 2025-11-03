import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const MatchFinder = () => {
  const mockups = [
    {
      id: 1,
      title: "Organization Search"
    },
    {
      id: 2,
      title: "Match Analysis"
    },
    {
      id: 3,
      title: "Quick Actions"
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
    <div className="py-16 bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Find Best-Fit Organizations In{' '}
              <span className="marker-underline">Seconds</span>, Not Weeks
            </h2>
            
            <p className="text-lg text-gray-700 mb-6">
              Discover relevant security auditing opportunities instantly, explore over 20,000 expert-curated organizations, and find best-fit audits from a database of over 400,000. See who is supporting your peers with Peer Prospecting.
            </p>
          </div>
          
          <div className="md:col-span-2 bg-white rounded-2xl shadow-xl p-8 border border-indigo-100/50">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 h-[400px] flex flex-col border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-800">{mockups[activeIndex].title}</h3>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
              </div>

              <div className="flex-1 relative">
                {activeIndex === 0 && (
                  <div className="absolute inset-0 grid grid-cols-12 gap-6">
                    {/* Left Panel - Filters */}
                    <div className="col-span-4 bg-gray-50 rounded-lg p-4 space-y-4">
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-600">Location</p>
                        <div className="h-8 bg-white rounded border border-gray-200"></div>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-600">Organization Type</p>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <div className="w-4 h-4 rounded bg-blue-500 mr-2"></div>
                            <p className="text-sm text-gray-700">Enterprise</p>
                          </div>
                          <div className="flex items-center">
                            <div className="w-4 h-4 rounded bg-gray-200 mr-2"></div>
                            <p className="text-sm text-gray-700">SMB</p>
                          </div>
                          <div className="flex items-center">
                            <div className="w-4 h-4 rounded bg-gray-200 mr-2"></div>
                            <p className="text-sm text-gray-700">Startup</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-600">Budget Range</p>
                        <div className="h-2 bg-blue-100 rounded-full">
                          <div className="w-3/4 h-full bg-blue-500 rounded-full"></div>
                        </div>
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>$10k</span>
                          <span>$100k</span>
                        </div>
                      </div>
                    </div>

                    {/* Right Panel - Results */}
                    <div className="col-span-8 space-y-4">
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                              🔒
                            </div>
                            <div>
                              <div className="flex items-center">
                                <p className="font-medium">Global Tech Solutions</p>
                                <span className="ml-2 px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">98% match</span>
                              </div>
                              <p className="text-sm text-gray-600">New York, NY • $75,000</p>
                            </div>
                          </div>
                          <Button variant="outline" className="text-blue-600 border-blue-200">
                            View Details
                          </Button>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg p-4 border border-gray-200">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center">
                              ⭐
                            </div>
                            <div>
                              <div className="flex items-center">
                                <p className="font-medium">FinTech Innovations Ltd</p>
                                <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">85% match</span>
                              </div>
                              <p className="text-sm text-gray-600">Miami, FL • $45,000</p>
                            </div>
                          </div>
                          <Button variant="outline" className="text-blue-600 border-blue-200">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeIndex === 1 && (
                  <div className="absolute inset-0 p-4 bg-gray-50 rounded-lg">
                    <div className="grid grid-cols-2 gap-4 h-full">
                      <div className="space-y-4">
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <div className="flex items-center justify-between mb-2">
                            <p className="font-medium text-gray-800">Match Score</p>
                            <span className="text-2xl font-bold text-green-600">98%</span>
                          </div>
                          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full w-[98%] bg-green-500 rounded-full"></div>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <p className="font-medium text-gray-800 mb-3">Key Factors</p>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <p className="text-sm text-gray-600">Location Match</p>
                              <span className="text-green-600">Perfect</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <p className="text-sm text-gray-600">Budget Fit</p>
                              <span className="text-green-600">Excellent</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <p className="text-sm text-gray-600">Experience Level</p>
                              <span className="text-blue-600">Good</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <p className="font-medium text-gray-800 mb-3">Similar Successful Audits</p>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                              ✓
                            </div>
                            <div>
                              <p className="text-sm font-medium">Enterprise Systems Inc</p>
                              <p className="text-xs text-gray-500">Completed Dec 2024</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                              ✓
                            </div>
                            <div>
                              <p className="text-sm font-medium">Cloud Security Corp</p>
                              <p className="text-xs text-gray-500">Completed Nov 2024</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeIndex === 2 && (
                  <div className="absolute inset-0 grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div className="bg-blue-50 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-blue-100 rounded flex items-center justify-center text-xl">
                            📋
                          </div>
                          <div>
                            <p className="font-medium">Start Application</p>
                            <p className="text-sm text-gray-600">15 min estimated time</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-purple-50 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-purple-100 rounded flex items-center justify-center text-xl">
                            💬
                          </div>
                          <div>
                            <p className="font-medium">Contact Organization</p>
                            <p className="text-sm text-gray-600">Usually responds in 2h</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="font-medium text-gray-800 mb-3">Recent Activity</p>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <p className="text-sm text-gray-600">Viewed your profile</p>
                          <p className="text-xs text-gray-400">2h ago</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <p className="text-sm text-gray-600">Updated listing</p>
                          <p className="text-xs text-gray-400">1d ago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Circular indicators */}
            <div className="flex justify-center space-x-3 mt-6">
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
        </div>
      </div>
    </div>
  );
};

export default MatchFinder;

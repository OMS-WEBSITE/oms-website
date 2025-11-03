
const ProposalSection = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-white to-blue-50/30">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-center">
          <div className="md:col-span-2 bg-white rounded-2xl shadow-xl p-8 border border-blue-100/50">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 h-[400px] flex flex-col border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-800">AI-Powered Report Writing</h3>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
              </div>
              
              <div className="flex-1 grid grid-cols-3 gap-6">
                {/* Main Editor */}
                <div className="col-span-2 bg-gray-50 rounded-lg p-4 space-y-3">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">📝</div>
                    <p className="font-medium text-gray-800">Executive Summary</p>
                  </div>
                  <div className="h-2 bg-gray-200 w-3/4 rounded"></div>
                  <div className="h-2 bg-gray-200 w-full rounded"></div>
                  <div className="h-2 bg-gray-200 w-2/3 rounded"></div>
                  <div className="mt-6 bg-blue-50 border border-blue-100 rounded p-3">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center text-sm">💡</div>
                      <p className="text-sm font-medium text-blue-700">AI Suggestion</p>
                    </div>
                    <div className="h-2 bg-blue-100 w-full rounded"></div>
                    <div className="h-2 bg-blue-100 w-4/5 mt-2 rounded"></div>
                  </div>
                </div>

                {/* Right Panel */}
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm font-medium text-gray-600 mb-3">Document Structure</p>
                    <div className="space-y-2">
                      <div className="h-2 bg-green-500 rounded w-full"></div>
                      <div className="h-2 bg-blue-500 rounded w-full"></div>
                      <div className="h-2 bg-gray-300 rounded w-full"></div>
                      <div className="h-2 bg-gray-300 rounded w-full"></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm font-medium text-gray-600 mb-2">Writing Progress</p>
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-xl font-bold text-green-600">65%</p>
                      <p className="text-sm text-gray-500">2/4 sections</p>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full w-2/3 bg-gradient-to-r from-green-400 to-green-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Craft high-quality{' '}
              <span className="marker-underline">report drafts</span>{' '}
              in 5 minutes
            </h2>
            
            <p className="text-lg text-gray-700 mb-6">
              Enhance audit report writing with AI that learns from past applications, resurfacing your best ideas. Centralize documents securely and access active audit applications with one click.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProposalSection;

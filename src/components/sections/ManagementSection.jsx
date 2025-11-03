
const ManagementSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Streamline Audit Management And{' '}
              <span className="marker-underline">Meet Every Deadline</span>
            </h2>
            
            <p className="text-lg text-gray-700 mb-8">
              Streamline your workflow with automated deadlines, task tracking, and portfolio overviews. Boost teamwork with shared docs, reminders, and calendar integration. Tailor the platform to fit your needs.
            </p>
          </div>
          
          <div className="md:col-span-2 bg-blue-50 rounded-lg p-6">
            <div className="bg-white rounded-lg shadow-md p-4 mb-4">
              <div className="flex justify-between mb-4">
                <div className="space-y-1">
                  <p className="font-medium">Overview</p>
                </div>
                <div className="flex space-x-4">
                  <p className="text-sm text-gray-500">Payments</p>
                  <div className="flex items-center">
                    <p className="text-sm text-gray-500">Tasks</p>
                    <span className="ml-1 bg-gray-200 rounded-full w-5 h-5 flex items-center justify-center text-xs">8</span>
                  </div>
                  <div className="flex items-center">
                    <p className="text-sm text-gray-500">Documents</p>
                    <span className="ml-1 bg-gray-200 rounded-full w-5 h-5 flex items-center justify-center text-xs">3</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-yellow-500">★</span>
                <h3 className="text-lg font-medium">Luxury Resort Audit</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Submission Date:</p>
                  <p className="text-sm">Jan 15, 2023</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Date Notified:</p>
                  <p className="text-sm">Mar 1, 2023</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Amount Requested:</p>
                  <p className="text-sm">$500,000</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Start of Audit Period:</p>
                  <p className="text-sm">Jan 15, 2024</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Full Report:</p>
                  <p className="text-sm text-blue-600">📄 Full Report</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">End of Audit Period:</p>
                  <p className="text-sm">Jan 15, 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagementSection;

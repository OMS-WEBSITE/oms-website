import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-orange-100 to-blue-100">
      <div className="container mx-auto max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          The only{' '}
          <span className="marker-underline">complete audit solution</span>
        </h2>
        
        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
          Since 2015, over 4,000 organizations have used OMS Software to find and win more audit opportunities, empowering them to expand their impact on critical missions such as evaluating cybersecurity measures, ensuring data protection, and improving IT security standards.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
          <input 
            type="email" 
            placeholder="Enter your work email address" 
            className="px-4 py-3 rounded-md border border-gray-300 flex-grow"
          />
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3">
            Start your free trial
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CTASection;

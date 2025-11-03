import { Button } from '@/components/ui/button';

const CaseStudyCard = ({ 
  icon, 
  company, 
  industry, 
  description, 
  metrics = /** @type {{ value: string, label: string }[]} */ ([]), 
  className = "" 
}) => {
  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden ${className}`}>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
            {icon}
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">{company}</h3>
            <p className="text-sm text-gray-600">{industry}</p>
          </div>
        </div>
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        {metrics.length > 0 && (
          <div className="border-t border-gray-100 pt-4 mb-4">
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-xl font-bold text-blue-600">{metric.value}</div>
                  <p className="text-sm text-gray-600">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        <Button variant="outline" className="w-full">
          Read Full Case Study →
        </Button>
      </div>
    </div>
  );
};

export default CaseStudyCard;

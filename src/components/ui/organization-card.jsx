import { Button } from '@/components/ui/button';

const OrganizationCard = ({
  name,
  industry,
  description,
  icon,
  metrics = /** @type {{ value: string, label: string }[]} */ ([]),
  tags = /** @type {string[]} */ ([]),
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
            <h3 className="font-semibold text-gray-800">{name}</h3>
            <p className="text-sm text-gray-600">{industry}</p>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4">
          {description}
        </p>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

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
          View Details →
        </Button>
      </div>
    </div>
  );
};

export default OrganizationCard;

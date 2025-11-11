import { Button } from '@/components/ui/button';

const PracticeCard = ({
  title,
  description,
  icon,
  category,
  difficulty = 'Intermediate',
  timeEstimate,
  steps = /** @type {string[]} */ ([]),
  resources = /** @type {{ title: string, url: string }[]} */ ([]),
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
            <h3 className="font-semibold text-gray-800">{title}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm text-gray-600">{category}</span>
              <span className="text-gray-300">•</span>
              <span className="text-sm text-gray-600">{difficulty}</span>
              {timeEstimate && (
                <>
                  <span className="text-gray-300">•</span>
                  <span className="text-sm text-gray-600">{timeEstimate}</span>
                </>
              )}
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4">
          {description}
        </p>

        {steps.length > 0 && (
          <div className="mb-4">
            <h4 className="font-medium text-gray-800 mb-2">Key Steps:</h4>
            <ul className="space-y-2">
              {steps.map((step, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-sm mr-2 flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-gray-600">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {resources.length > 0 && (
          <div className="border-t border-gray-100 pt-4 mb-4">
            <h4 className="font-medium text-gray-800 mb-2">Resources:</h4>
            <ul className="space-y-1">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a href={resource.url} className="text-blue-600 hover:text-blue-700 text-sm">
                    {resource.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

      </div>
    </div>
  );
};

export default PracticeCard;

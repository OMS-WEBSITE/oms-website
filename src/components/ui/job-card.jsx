import { Button } from "@/components/ui/button";

const JobCard = ({
  title,
  department,
  location,
  type = "Full-time",
  experience,
  salary,
  description,
  requirements = [],
  benefits = [],
  rolesandresponsibilities = [],
  onApply, // parent callback
  className = "",
}) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ${className}`}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
            <div className="flex items-center gap-2 mt-1">
              {department && (
                <span className="text-sm text-gray-600">{department}</span>
              )}
              {location && (
                <>
                  <span className="text-gray-300">•</span>
                  <span className="text-sm text-gray-600">{location}</span>
                </>
              )}
            </div>
          </div>
          <div className="flex flex-col items-end">
            <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">
              {type}
            </span>
          </div>
        </div>

        {/* Experience & Salary */}
        <div className="flex flex-wrap gap-6 mb-4">
          {experience && (
            <div>
              <p className="text-sm text-gray-500">Experience</p>
              <p className="font-medium">{experience}</p>
            </div>
          )}
          {salary && (
            <div>
              <p className="text-sm text-gray-500">Salary Range</p>
              <p className="font-medium">{salary}</p>
            </div>
          )}
        </div>

        {/* Description */}
        {description && <p className="text-gray-600 mb-6">{description}</p>}

        {/* Requirements */}
        {requirements.length > 0 && (
          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 mb-2">Requirements</h4>
            <ul className="space-y-2 list-disc list-inside text-gray-600">
              {requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Benefits */}
        {benefits.length > 0 && (
          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 mb-2">Benefits</h4>
            <ul className="space-y-2 list-disc list-inside text-gray-600">
              {benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        )}

        {rolesandresponsibilities.length > 0 && (
          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 mb-2">
              Roles And Responsibilities
            </h4>
            <ul className="space-y-2 list-disc list-inside text-gray-600">
              {benefits.map((rolesandresponsibilities, index) => (
                <li key={index}>{rolesandresponsibilities}</li>
              ))}
            </ul>
          </div>
        )}

        {/* ✅ Apply Button */}
        <div className="flex justify-end">
          <Button
            className="bg-orange-500 hover:bg-orange-600 text-white"
            onClick={onApply}
          >
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;

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
  onApply,
  className = "",
}) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ${className}`}
    >
      <div className="p-4 sm:p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2 sm:gap-0">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800">{title}</h3>
            <div className="flex flex-wrap items-center gap-2 mt-1 text-sm text-gray-600">
              {department && <span>{department}</span>}
              {location && (
                <>
                  <span className="text-gray-300">•</span>
                  <span>{location}</span>
                </>
              )}
            </div>
          </div>
          <div className="flex-shrink-0 mt-2 sm:mt-0">
            <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">
              {type}
            </span>
          </div>
        </div>

        {/* Experience & Salary */}
        {(experience || salary) && (
          <div className="flex flex-wrap gap-4 sm:gap-6 mb-4 text-sm sm:text-base">
            {experience && (
              <div>
                <p className="text-gray-500">Experience</p>
                <p className="font-medium">{experience}</p>
              </div>
            )}
            {salary && (
              <div>
                <p className="text-gray-500">Salary Range</p>
                <p className="font-medium">{salary}</p>
              </div>
            )}
          </div>
        )}

        {/* Description */}
        {description && <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">{description}</p>}

        {/* Requirements */}
        {requirements.length > 0 && (
          <div className="mb-4 sm:mb-6">
            <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Requirements</h4>
            <ul className="space-y-1 sm:space-y-2 list-disc list-inside text-gray-600 text-sm sm:text-base">
              {requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Benefits */}
        {benefits.length > 0 && (
          <div className="mb-4 sm:mb-6">
            <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Benefits</h4>
            <ul className="space-y-1 sm:space-y-2 list-disc list-inside text-gray-600 text-sm sm:text-base">
              {benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Roles And Responsibilities */}
        {rolesandresponsibilities.length > 0 && (
          <div className="mb-4 sm:mb-6">
            <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Roles And Responsibilities</h4>
            <ul className="space-y-1 sm:space-y-2 list-disc list-inside text-gray-600 text-sm sm:text-base">
              {rolesandresponsibilities.map((role, index) => (
                <li key={index}>{role}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Apply Button */}
        <div className="flex justify-center sm:justify-end mt-2">
          <Button
            className="bg-orange-500 hover:bg-orange-600 text-white w-full sm:w-auto"
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

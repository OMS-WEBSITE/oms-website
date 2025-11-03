import { useState } from "react";
import JobCard from "./job-card";
import ApplyModal from "./apply-modal";

const ReactJobList = ({ jobs }) => {
  const [selectedJob, setSelectedJob] = useState(null);

  if (!jobs || jobs.length === 0) {
    return (
      <p className="text-gray-600 text-center">
        No open positions at the moment.
      </p>
    );
  }

  return (
    <>
      <div className="flex flex-wrap justify-center gap-8 w-[80%] mx-auto">
        {jobs.map((job, index) => (
          <JobCard
            key={index}
            title={job.title}
            department={job.department}
            location={job.location}
            type={job.type}
            experience={job.experience}
            salary={job.salary}
            description={job.description}
            requirements={
              job.requirements?.split(";").map((r) => r.trim()) || []
            }
            benefits={job.benefits?.split(";").map((b) => b.trim()) || []}
            rolesandresponsibilities={
              job.rolesandresponsibilities?.split(";").map((a) => a.trim()) ||
              []
            }
            onApply={() => setSelectedJob(job)}
          />
        ))}
      </div>

      {selectedJob && (
        <ApplyModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </>
  );
};

export default ReactJobList;

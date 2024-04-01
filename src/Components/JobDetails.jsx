import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const allJobs = useLoaderData();
  const { id } = useParams();
  const job = allJobs.find((job) => job.id == id);
  console.log(job);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 my-5">
      <div>
        <h1>Job Description:</h1>
        <h1>Job Responsibility:</h1>
        <h1>Educational Requirements:</h1>
        <h1>Experiences:</h1>
      </div>
      <div>
        <div className="bg-violet-200 p-5">
          <h1>Job Details</h1>
          <hr />
          <p>Salary:</p>
          <p>Job Title:</p>
          <hr />
          <h1>Contact Information:</h1>
          <p>Phone:</p>
          <p>Email:</p>
          <p>Address:</p>
        </div>
        <button className="btn-primary">Apply Now</button>
      </div>
    </div>
  );
};

export default JobDetails;

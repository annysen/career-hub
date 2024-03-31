import { CurrencyDollarIcon, MapPinIcon } from "@heroicons/react/24/solid";

const Job = ({ job }) => {
  const { companyName, position, logo, jobType, jobTime, jobLocation, salary } =
    job;
  console.log(job);
  return (
    <div className="border p-5 mx-5">
      <h1 className="font-bold">{position}</h1>
      <p>{companyName}</p>
      <div className="mt-5 ">
        <small className="border p-2 text-violet-700 mr-3 ">{jobType}</small>
        <small className="border p-2 text-violet-700 mr-3 ">{jobTime}</small>
      </div>
      <div className="flex gap-5 items-center mt-5 ">
        <div className="flex gap-1 items-center">
          <MapPinIcon className="h-6 w-6 text-gray-500"></MapPinIcon>
          <small>{jobLocation}</small>
        </div>
        <div className="flex gap-1 items-center">
          <CurrencyDollarIcon className="h-6 w-6 text-gray-500"></CurrencyDollarIcon>
          <small>{salary} BDT</small>
        </div>
      </div>
      <button className="btn-primary mt-5">View Details</button>
    </div>
  );
};

export default Job;

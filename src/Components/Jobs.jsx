import { CalculatorIcon } from "@heroicons/react/24/solid";

const Jobs = () => {
  return (
    <div>
      <div className="flex justify-center mt-5">
        <div className=" text-center">
          <h1 className="font-extrabold text-5xl">Job Category List</h1>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
          <div className="flex flex-col md:flex-row gap-5 justify-between ">
            <div className="bg-blue-200 p-10">
              <div className="bg-slate-200 p-3 rounded-lg ">
                <CalculatorIcon className="h-10 w-10 text-sky-600 "></CalculatorIcon>
              </div>
              <h1>Account & Finance</h1>
              <p>300 Jobs Available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;

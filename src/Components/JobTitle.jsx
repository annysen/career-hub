import {
  CalculatorIcon,
  CpuChipIcon,
  LightBulbIcon,
  SpeakerWaveIcon,
} from "@heroicons/react/24/solid";

const JobTitle = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 justify-between  py-5 mx-5 md:mx-auto">
      <div className="  bg-violet-100 p-10">
        <div className=" bg-violet-200 w-14 h-14 p-3 flex justify-center items-center rounded-lg ">
          <CalculatorIcon className="h-10 w-10 text-violet-600 "></CalculatorIcon>
        </div>
        <h1 className="text-lg font-bold">Account & Finance</h1>
        <p>300 Jobs Available</p>
      </div>
      <div className="bg-violet-100 p-10">
        <div className="bg-violet-200 w-14 h-14 p-3 flex justify-center items-center rounded-lg  ">
          <LightBulbIcon className="h-10 w-10 text-violet-600 "></LightBulbIcon>
        </div>
        <h1 className="text-lg font-bold">Creative Design</h1>
        <p>100 Jobs Available</p>
      </div>
      <div className="bg-violet-100 p-10">
        <div className="bg-violet-200 w-14 h-14 p-3 flex justify-center items-center rounded-lg  ">
          <SpeakerWaveIcon className="h-10 w-10 text-violet-600 "></SpeakerWaveIcon>
        </div>
        <h1 className="text-lg font-bold">Marketing & Sales</h1>
        <p>200 Jobs Available</p>
      </div>
      <div className="bg-violet-100 p-10">
        <div className="bg-violet-200 w-14 h-14 p-3 flex justify-center items-center rounded-lg  ">
          <CpuChipIcon className="h-10 w-10 text-violet-600 "></CpuChipIcon>
        </div>
        <h1 className="text-lg font-bold">Engineering Job</h1>
        <p>500 Jobs Available</p>
      </div>
    </div>
  );
};

export default JobTitle;

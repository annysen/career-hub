import { createContext, useState } from "react";
import Header from "./Header";
import Jobs from "./Jobs";
export const JobContext = createContext(0);

const Home = () => {
  const jobArray = [
    {
      jobType: "Account & Finance",
      jobCount: 300,
      iconLink: "../assets/image/icon/account.png",
    },
    {
      jobType: "Software Development",
      jobCount: 500,
      iconLink: "../assets/image/icon/devloper.jpg",
    },
    {
      jobType: "Marketing",
      jobCount: 200,
      iconLink: "../assets/image/icon/marketing.png",
    },
    {
      jobType: "Customer Service",
      jobCount: 400,
      iconLink: "../assets/image/icon/Customer.jpg",
    },
  ];

  const [jobs, setJobs] = useState([]);

  return (
    <div>
      <Header></Header>
      <JobContext.Provider value={jobArray}>
        <Jobs></Jobs>
      </JobContext.Provider>
    </div>
  );
};

export default Home;

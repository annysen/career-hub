import { createContext, useState } from "react";
import Header from "./Header";
import Jobs from "./Jobs";
export const JobContext = createContext(0);
import accountImage from "../assets/image/icon/account.png";
import softImg from "../assets/image/icon/devloper.jpg";
import markImg from "../assets/image/icon/marketing.png";
import custImg from "../assets/image/icon/Customer.jpg";

const Home = () => {
  const jobArray = [
    {
      jobType: "Account & Finance",
      jobCount: 300,
      iconLink: accountImage,
    },
    {
      jobType: "Software Development",
      jobCount: 500,
      iconLink: softImg,
    },
    {
      jobType: "Marketing",
      jobCount: 200,
      iconLink: markImg,
    },
    {
      jobType: "Customer Service",
      jobCount: 400,
      iconLink: custImg,
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

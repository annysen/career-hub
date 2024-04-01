import cover from "../assets/cover.jpg";

const Header = () => {
  return (
    <div className="bg-gray-100 ">
      <section className="grid grid-cols-1 md:grid-cols-2  justify-items-center ">
        <div className="w-1/2 flex items-center">
          <div>
            <h1 className="text-black font-extrabold text-5xl">
              One Step Closer <br /> To Your <br />
              <span className="text-violet-500">Dream Job</span>
            </h1>

            <p className="text-gray py-5">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button className="btn-primary mt-5">Get Standard</button>
          </div>
        </div>
        <div className="w-1/2">
          <img src={cover} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Header;

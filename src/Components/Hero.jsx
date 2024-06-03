import { NavLink } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

const Hero = () => {
  return (
    <header className="text-white h-[100vh] bg-home-hero bg-cover bg-no-repeat bg-[#14274A] bg-blend-multiply bg-opacity-[0.3] bg-center common-padding flex flex-col items-center justify-center  lg:block lg:pt-[30rem]">
      <div className="max-w-[52rem]">
        <h1 className="flex flex-col uppercase leading-[7.5rem]">
          <span className="text-[3rem] lg:text-[5rem] ">welcome to</span>
          <span className="logo uppercase text-[6rem]  lg:text-[9rem] ">
            andurar
          </span>
          <span className="text-[3rem] lg:text-[5rem] font-[700]">hotels</span>
        </h1>
        <p className="text-[3rem]">
          Book your stay and enjoy Luxury redefined at the most affordable
          rates.
        </p>
      </div>
      <div className="w-full flex flex-col items-center justify-center space-y-[3.5rem] bottom-[2.5rem] absolute left-0">
        <NavLink
          to="/rooms"
          className={`text-[2rem] bg-[#E0B973] hover:bg-[#d3a550] transition-all ease-in-out duration-150 text-white font-[600] py-[1.5rem] px-[3.2rem] rounded-[15px]`}
        >
          Book Now
        </NavLink>
        <div className="flex flex-col items-center space-y-[0.5rem] ">
          <p className="text-[2.5rem] capitalize">scroll</p>
          <FaAngleDown className="text-[2rem] bg-white rounded-full text-black" />
        </div>
      </div>
    </header>
  );
};

export default Hero;

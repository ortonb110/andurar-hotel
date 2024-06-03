import { Outlet, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav className="lg:flex justify-between px-[50px] py-[10px] lg:py-0 lg:px-[210px] items-center absolute top-0 w-full">
        <div className="hidden md:block bg-[#E0B973] px-[25px] py-[20px] rounded-b-[20px]">
          <p className="text-[#14274A] font-[600] uppercase flex flex-col items-center">
            <span className="logo text-[1.5rem] md:text-[1.8rem] lg:text-[2rem]">
              andurar
            </span>
            <span className="text-[1.5rem]">hotels</span>
          </p>
        </div>
        <div className="text-[2.5rem] flex justify-between w-[100%] lg:w-[40%] text-white font-[400]">
          <NavLink to="/" className={`hover:underline `}>
            Home
          </NavLink>
          <NavLink to="/facilities" className={`hover:underline `}>
            Facilities
          </NavLink>
          <NavLink to="/rooms" className={`hover:underline `}>
            Rooms
          </NavLink>
          <NavLink to="/contact" className={`hover:underline `}>
            Contact
          </NavLink>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;

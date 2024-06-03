import {Outlet, NavLink} from 'react-router-dom'

const Navigation = () => {
  return (
    <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/facilities">Facilities</NavLink>
        <NavLink to="/rooms">Rooms</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <Outlet />
    
    </>
  )
}

export default Navigation
import { Link } from "react-router-dom";

import logo from '../assets/logo.svg'
import CustomAuth from "../custom/CustomAuth";


const Navbar = () => {

    const { logOut, user } = CustomAuth()

    const handleLogOut = () => {

        logOut()
            .then(() => {
                console.log("logOut is successful")
            })
    }

    const Links = <>


        <li> <Link to={'/'} > Home </Link> </li>
        <li> <Link to={'/about'} > About </Link> </li>
        <li> <Link to={'/service'} > Service  </Link> </li>

        <li> <Link to={'/signUp'} > SignUp  </Link> </li>

       
        {
            user ?

                <>

                    <li> <Link to={'/bookings'} > My Bookings  </Link> </li>

                    <li onClick={handleLogOut} className=" w-20 flex items-center justify-center btn ml-2"> LogOut </li>

                </>




                :
                <li> <Link to={'/login'} > Login  </Link> </li>
        }


    </>
    return (
        <div className="navbar bg-base-100 h-28">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                        {Links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"> <img src={logo} alt="" /> </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    {Links}

                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-outline btn-secondary">Appointment </a>
            </div>
        </div>
    );
};

export default Navbar;
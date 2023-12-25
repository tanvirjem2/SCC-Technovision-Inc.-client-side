import { Link } from "react-router-dom";
import { BiAlarm } from "react-icons/bi";


const NavBar = () => {

    const NavLink = <>
        <Link to={"/"}><li><a>Home</a></li></Link>
        <Link to={"/login"}><li><a>Login</a></li></Link>
        <Link to={"/signUp"}><li><a>Register</a></li></Link>
    </>

    return (
        <div className="navbar rounded-lg shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>

                    {/* For Small devices */}

                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                        {NavLink}

                    </ul>

                </div>
                <Link to={"/"}><a className="btn btn-ghost text-xl"><BiAlarm />SCC Technovision Inc.</a></Link>
            </div>
            <div className="navbar-center hidden lg:flex">

                {/* For large devices */}

                <ul className="menu menu-horizontal px-1 gap-6">

                    {NavLink}

                </ul>

            </div>
            <div className="navbar-end">
                <a className="btn rounded-full">Button</a>
            </div>
        </div>
    );
};

export default NavBar;
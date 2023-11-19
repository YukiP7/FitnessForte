import {Link , NavLink} from 'react-router-dom';

export default function Header(){
    return(
        <header className="shadow sticky z-50 top-0 ">
        <nav className=" bg-white border-slate-900 px-4 lg:px-6 py-2.5 text-slate-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl m-4">
        <Link to="/" className="flex items-center gap-2 text-2xl ">
        <img src="../assests/fitness.jpg" alt='fitness'
        className='h-10'/>
        <p>WORKOUT</p>
        </Link>
        <div className="flex items-center lg:order-2 mr-0">
        <Link
            to="/login"
            className="text-black hover:bg-blue-600 hover:text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none "
        >
            LOG IN
        </Link>
        <Link
            to="/"
            className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none border-b-4 border-l-4 border-black border-2 hover:border-none"
        >
            GET STARTED
        </Link>
        <div className='flex ml-2 font-semibold justify-center items-center'>
            <img src="https://lens-storage.storage.googleapis.com/png/a1099a6c388f44a9ad5b53e0c19cd719" alt="Streak"  
            className='h-10 hover:scale-105'/>
            <p className='ml-2'>STREAKS</p>
        </div>
        </div>
        <div
        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 ml-16"
        id="mobile-menu-2"
        >
        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
                <NavLink to="/"
                    className={({isActive}) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                    }
                >
                    HOME
                </NavLink>
            </li>
            <li>
                <NavLink to="/"
                    className={({isActive}) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                    }
                >
                    WORKOUTS
                </NavLink>
            </li>
            <li>
                <NavLink to="/programs"
                    className={({isActive}) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                    }
                >
                    PROGRAMS
                </NavLink>
            </li>
            <li>
                <NavLink to="/"
                    className={({isActive}) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                    }
                >
                    PRICING
                </NavLink>
            </li>
            <li>
                <NavLink to="/"
                    className={({isActive}) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                    }
                >
                    ABOUT
                </NavLink>
            </li>
            <li>
                <NavLink to="/"
                    className={({isActive}) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                    }
                >
                    CONTACT US
                </NavLink>
            </li>
            
        </ul>
        </div>
</div>
</nav>
</header>
    )
}
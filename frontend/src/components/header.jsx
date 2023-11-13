import {Link , NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDumbbell} from '@fortawesome/free-solid-svg-icons'

export default function Header(){
    return(
        <header className="shadow sticky z-50 top-0">
        <nav className="bg-black border-gray-200 px-4 lg:px-6 py-2.5 text-white ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl m-4">
        <Link to="/" className="flex items-center gap-2 text-lg ">
        <img src='https://thumbs.dreamstime.com/z/bodybuilding-powerlifting-kettlebell-workout-fitness-logo-template-gym-club-logotype-bodybuilder-sportsman-model-illustration-sign-123514457.jpg' alt='fitness'
        className='h-10'/>
        <p>WORKOUT</p>
        </Link>
<div className="flex items-center lg:order-2">
<Link
    to="#"
    className=" hover:bg-orange-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
>
    LOG IN
</Link>
<Link
    to="#"
    className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
>
    GET STARTED
</Link>
</div>
<div
className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
id="mobile-menu-2"
>
<ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
    <li>
        <NavLink to="/"
            className={({isActive}) =>
                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
        >
            HOME
        </NavLink>
    </li>
    <li>
        <NavLink to="/"
            className={({isActive}) =>
                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
        >
            PROGRAMS
        </NavLink>
    </li>
    <li>
        <NavLink to="/"
            className={({isActive}) =>
                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
        >
            SUCCESS STORIES
        </NavLink>
    </li>
    <li>
        <NavLink to="/"
            className={({isActive}) =>
                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
        >
            ABOUT
        </NavLink>
    </li>
    <li>
        <NavLink to="/"
            className={({isActive}) =>
                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
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
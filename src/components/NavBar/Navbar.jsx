import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
// import PropTypes from 'prop-types';

const Navbar = () => {
    const [icon, setIcon] = useState(false)
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'NotFound' },
    ];

    return (
        <div className="bg-red-500 text-white p-4">
            <div className="text-2xl md:hidden" onClick={()=> setIcon(!icon)}>
                {
                    icon === true ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu></AiOutlineMenu>
                }
            </div>
            <div className={`md:flex duration-1000 gap-10 absolute
            ${icon? 'top-12' : '-top-80'}
            bg-red-500 rounded-xl md:static md:text-2xl`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </div>
        </div>
    );
};

export default Navbar;
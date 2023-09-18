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
        <div>
            <div className="text-2xl md:hidden" onClick={()=> setIcon(!icon)}>
                {
                    icon === true ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu></AiOutlineMenu>
                }
            </div>
            <div className="md:flex gap-10">
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </div>
        </div>
    );
};

export default Navbar;
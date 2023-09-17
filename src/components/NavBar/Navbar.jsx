import Link from "../Link/Link";


const Navbar = () => {
    const routes = [
        { id: 1, path: '/', name: 'Home'},
        { id: 2, path: '/about', name: 'About'},
        { id: 3, path: '/services', name: 'Services'},
        { id: 4, path: '/contact', name: 'Contact'},
        { id: 5, path: '*', name: 'NotFound'},
      ];
      
    return (
        <div>
            {
                routes.map(route=><Link key={route.id} route={route}></Link>)
            }
        </div>
    );
};

export default Navbar;

const Link = (route) => {
    console.log(route)
    return (
        <div>
            <ol>
            <li><a href={route.path}>{route.name}</a></li>
            </ol>
        </div>
    );
};

export default Link;
import PropTypes from 'prop-types';

const Link = ({route}) => {
    console.log(route)
    return (
        <div>
            <ol className='hover:bg-red-700 p-4 rounded-md'>
            <li><a href={route.path}>{route.name}</a></li>
            </ol>
        </div>
    );
};
Link.propTypes ={
    route: PropTypes.object
}

export default Link;
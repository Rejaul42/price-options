import PropTypes from 'prop-types';

const Link = ({route}) => {
    console.log(route)
    return (
        <div>
            <ol className=''>
            <li><a href={route.path}>{route.name}</a></li>
            </ol>
        </div>
    );
};
Link.propTypes ={
    route: PropTypes.object
}

export default Link;
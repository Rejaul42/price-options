import PropTypes from 'prop-types';
import { AiFillCheckCircle } from "react-icons/ai";
const Feature = ({feature}) => {
    return (
        <div className=''>
            <p className='flex gap-2 items-center pl-6'><AiFillCheckCircle className='bg-green-600 text-yellow-400'></AiFillCheckCircle> {feature}</p>
        </div>
    );
};
Feature.propTypes ={
    feature:PropTypes.string
}
export default Feature;
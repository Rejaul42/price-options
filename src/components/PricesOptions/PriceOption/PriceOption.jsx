import PropTypes from 'prop-types';
import Feature from '../../Feature/Feature';
const PriceOption = ({ option }) => {
    const { name, features, price } = option;
    return (
        <div className='bg-blue-500 text-white p-8 rounded-xl flex flex-col'>
            <h1 className='text-center font-bold'>
                <span className='text-7xl'>{price}</span>
                <span className='text-2xl'>\mon</span>
            </h1>
            <h4 className='text-3xl text-center my-4 font-semibold'>{name}</h4>
            <div className='flex-grow'>
                {
                    features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                }
            </div>
            <button className='text-2xl w-full bg-green-700 rounded-lg py-2 mt-8 hover:bg-green-900'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}
export default PriceOption;
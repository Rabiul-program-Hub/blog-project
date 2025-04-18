
import PropTypes from 'prop-types';

const BookMark = ({bookMark}) => {
    const{title}=bookMark
    return (
        <div>
            <h1 className='text-3xl bg-gray-300 rounded-xl mt-2'>{title} </h1>
        </div>
    );
};

BookMark.propTypes = {
    bookMark:PropTypes.object
};

export default BookMark;
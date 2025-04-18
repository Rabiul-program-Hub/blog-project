import React from 'react';
import PropTypes from 'prop-types';
import BookMark from '../BookMark/BookMark';

const BookMarks = ({bookMarks,readingTimes})=> {
    return (
        <div className='bg-pink-300 w-1/3 text-center'>
            <h1 className='text-3xl font-semibold border-2 p-1 rounded-xl'>Reding Time:{readingTimes}</h1>
            <h1 className='text-2xl font-semibold'>Add book mark: {bookMarks.length}</h1>
            {
                bookMarks.map((bookMark,idx)=> <BookMark
                 key={idx} bookMark={bookMark}
                
                ></BookMark>)
            }
        </div>
    );
};

BookMarks.propTypes = {
    bookMarks:PropTypes.array,
    readingTimes:PropTypes.number
};

export default BookMarks;
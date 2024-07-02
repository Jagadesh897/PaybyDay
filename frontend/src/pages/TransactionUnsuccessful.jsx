import React from 'react';
import { Link } from 'react-router-dom';

const TransactionUnsuccessful = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <div className="bg-white p-6 md:mx-auto">
        <svg viewBox="0 0 24 24" className="text-red-600 w-16 h-16 mx-auto my-6">
          <path
            fill="currentColor"
            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm3.707,8.707a1,1,0,0,1,0,1.414L13.414,12l2.293,2.293a1,1,0,1,1-1.414,1.414L12,13.414,9.707,15.707a1,1,0,1,1-1.414-1.414L10.586,12,8.293,9.707a1,1,0,1,1,1.414-1.414L12,10.586l2.293-2.293A1,1,0,0,1,15.707,8.707Z"
          />
        </svg>
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Transaction Unsuccessful</h3>
          <p className="text-gray-600 my-2">Unfortunately, your payment could not be processed at this time.</p>
          <p> Please try again later. </p>
          <div className="py-10 text-center">
            <Link to={"/dashboard"}><a  className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3">
              TRY AGAIN
            </a></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionUnsuccessful;

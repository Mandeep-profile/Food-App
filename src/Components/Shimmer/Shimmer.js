import React from 'react';
import './Shimmer.scss';

const Shimmer = () => {
  const shimmerCards = Array.from({ length: 9 }).map((_, index) => (
    <div className='shimmer-cards' key={index}>
      <div className='shimmer-img'></div>
      <div className='shimmer-heading'></div>
    </div>
  ));

  return (
    <div className='shimmer-container'>
      {shimmerCards}
    </div>
  );
};

export default Shimmer;
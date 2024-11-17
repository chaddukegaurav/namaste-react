import React from 'react';
import ReactDOM from 'react-dom/client';
import { CDN_URL } from '../utils/constant';

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    locality,
    areaName,
    costForTwo,
    cuisines,
    avgRating,
  } = resData?.info;

  return (
    <div className='m-4 p-4 w-[200px] rounded-lg hover:bg-orange-100 bg-yellow-50 '>
      <img className='rounded-lg' src={CDN_URL + cloudinaryImageId} />
      <h3 className='font-bold py-2'>{name}</h3>
      <h3 className='py-1'>{locality}</h3>
      <h3 className='py-1'>{areaName}</h3>
      <h3 className='py-1'>{costForTwo}</h3>
      <h3 className='py-1'>{cuisines.join(',  ')}</h3>
      <h3 className='py-1'>{avgRating}</h3>
    </div>
  );
};

export default RestaurantCard;

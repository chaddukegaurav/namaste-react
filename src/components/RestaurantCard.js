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
    <div className='res-card'>
      <img className='res-logo' src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h3>{locality}</h3>
      <h3>{areaName}</h3>
      <h3>{costForTwo}</h3>
      <h3>{cuisines.join(',  ')}</h3>
      <h3>{avgRating}</h3>
    </div>
  );
};

export default RestaurantCard;

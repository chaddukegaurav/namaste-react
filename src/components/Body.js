import RestaurantCard from './RestaurantCard';

import React, { useEffect, useState } from 'react';
import Shimmer from './Shimmer';

const Body = () => {
  const [listOfRestaurants, setRestaurantList] = useState([]);

  const [searchText, setSearchText]=useState("")
  
  //useEffect takes two arguments " first = Arrow Function(call back function) , second is Dependency Array"

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();
    console.log(json);
    //console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setRestaurantList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //Conditional Rendering
  // if(listOfRestaurants.length ===0){
  //   return <Shimmer/>
  // }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className='body'>
      <div className='filter'>
        <div className='search'>
          <input type='text' placeholder='search ' value={searchText}/>

          <button>search</button>
        </div>
        <button
          className='filter-btn'
          onClick={() => {
            const updateList = listOfRestaurants.filter(
              (data) => data.info.avgRating > 4.1
            );
            setRestaurantList(updateList);
          }}
        >
          Top Rating Restaurant
        </button>
      </div>
      <div className='res-container'>
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            restaurantName={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;

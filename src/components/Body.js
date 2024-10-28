import { useEffect, useState } from 'react';
import RestaurantCard from '../components/RestaurantCard';
// import { resObj } from '../utils/mockData';
import Shimmer from './Shimmer';
import { logDOM } from '@testing-library/react';
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([])
  const [searchText, setSearchText] = useState('');
  console.log(searchText);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();
    console.log(json);
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className='body'>
      <div className='filter'>
        <div className='search'>
          <input type='text' className='search-box' value={searchText} onChange={(e) => setSearchText(e.target.value)} />

          <button onClick={() => {
            const filteredList = listOfRestaurants.filter((f) => f.info.name.toLowerCase().includes(searchText))

            if (filteredList.length === 0) {
              alert("Oops, no matching restaurants found!");
            }
            setFilteredRestaurant(filteredList)


          }}>Search</button>
        </div>
        <button
          className='filter-btn'
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (f) => f.info.avgRating > 4.5
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>

      </div>

      <div className='res-container'>
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

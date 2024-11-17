import { useEffect, useState } from 'react';
import RestaurantCard from '../components/RestaurantCard';
// import { resObj } from '../utils/mockData';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
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
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onof = useOnlineStatus()
  
  if(onof === false){
    return <div style={{content: "center"}}>
      <h1>OOP'S... You are offline</h1> 
    </div>
  }

  
  
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
    <div className="filter flex justify-center items-center m-4 p-4">
      {/* Search Input */}
      <input
        type="text"
        className="border border-solid  rounded px-2 py-1 mr-4"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
  
      {/* Search Button */}
      <button
        className="px-4 py-2 bg-green-100 rounded-lg mr-4"
        onClick={() => {
          const filteredList = listOfRestaurants.filter((f) =>
            f.info.name.toLowerCase().includes(searchText)
          );
          if (filteredList.length === 0) {
            setFilteredRestaurant(() => {
              return message();
            });
          }
          setFilteredRestaurant(filteredList);
        }}
      >
        Search
      </button>
  
      {/* Top Rated Restaurant Button */}
      <button
        className="px-4 py-2 bg-green-200 rounded-lg"
        onClick={() => {
          const filteredList = listOfRestaurants.filter(
            (f) => f.info.avgRating > 4.5
          );
          setFilteredRestaurant(filteredList);
        }}
      >
        Top Rated Restaurant
      </button>
    </div>

    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
  
    {/* Restaurant Cards */}
    <div className="flex flex-wrap ps-6">
      {filteredRestaurant.map((restaurant) => (
        <Link
          className="list-link"
          key={restaurant.info.id}
          to={'/restaurants/' + restaurant.info.id}
        >
          <RestaurantCard resData={restaurant} />
        </Link>
      ))}
    </div>
  </div>
  

  );
};

export default Body;

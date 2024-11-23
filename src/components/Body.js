import { useEffect, useState, useContext } from 'react';
import RestaurantCard, {
  withPromotedLable,
} from '../components/RestaurantCard';
// import { resObj } from '../utils/mockData';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState('');
  console.log(searchText);
  useEffect(() => {
    fetchData();
  }, []);

  const {setUserName, loggedInUser} = useContext(UserContext)

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

  console.log('list of res', listOfRestaurants);
  const onof = useOnlineStatus();

  if (onof === false) {
    return (
      <div style={{ content: 'center' }}>
        <h1>OOP'S... You are offline</h1>
      </div>
    );
  }

  const RestaurantWithPromotedLable = withPromotedLable(RestaurantCard);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className='body'>
      <div className='filter flex justify-center items-center m-4 p-4'>
        {/* Search Input */}
        <input
          type='text'
          className='border border-solid  rounded px-2 py-1 mr-4'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        {/* Search Button */}
        <button
          className='px-4 py-2 bg-green-100 rounded-lg mr-4'
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
          className='px-4 py-2 bg-green-200 rounded-lg'
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (f) => f.info.avgRating > 4.5
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
         
        
        <label className='ps-2'>UserName : </label>
        <input 
          className='border border-black '
          onChange={(e) => setUserName(e.target.value) }
          value={loggedInUser}
        
        />
      </div>

      {/* Restaurant Cards */}
      <div className='flex flex-wrap ps-6'>
        {filteredRestaurant.map((restaurant) => (
          <Link
            className='list-link'
            key={restaurant.info.id}
            to={'/restaurants/' + restaurant.info.id}
          >
            {restaurant.info.promoted ? (
              <RestaurantWithPromotedLable resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

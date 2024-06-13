import { CON_URL } from "../utils/constants";


const RestaurantCard = ({ restaurantName }) => {

    const { name, costForTwo, cuisines, cloudinaryImageId, avgRating} = restaurantName.info
   
    
    return (
      <div className="res-card">
        <img className="res-logo" alt="food-item" src={ CON_URL + cloudinaryImageId} />
        <h3>{name}</h3>
        <h3>{costForTwo}</h3>
        <h3>{avgRating}</h3>
        <h3>{cuisines.join(", ")}</h3>
      </div>
    );
  };

export default RestaurantCard
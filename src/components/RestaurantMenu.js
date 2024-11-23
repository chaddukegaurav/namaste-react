import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_URL_API } from '../utils/constant';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantsCategory';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null); // Initially, no category is shown

  const { itemCards = [] } =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card || {};

  const category =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (f) =>
        f.card?.card?.['@type'] ===
        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    ) || [];

  return (
    <div className="text-center">
      <h1 className="font-bold mt-8 text-2xl">
        {resInfo?.cards[2]?.card?.card?.info?.name}
      </h1>
      <p className="font-semibold text-lg">
        {resInfo?.cards[2]?.card?.card?.info?.cuisines?.join(", ")} -{" "}
        {resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}
      </p>

      {category.map((c, index) => (
        <RestaurantCategory
          key={c?.card?.card?.info?.title}
          data={c?.card?.card}
          showItems={index === showIndex} // Show if the index matches
          setShowIndex={setShowIndex} // Pass the function to toggle the state
          index={index} // Pass the index of the category
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;

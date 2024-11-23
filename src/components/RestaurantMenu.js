import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_URL_API } from '../utils/constant';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantsCategory';
const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null)

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(
  //     MENU_URL_API + resId + "&catalog_qa=undefined&submitAction=ENTER"
  //   );
  //   const json = await data.json()
  //   console.log(json);
  //   setResInfo(json.data)
  // };

  //   const {name, costForTwoMessage,cuisines} =

  const { itemCards = [] } =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card || {};

  //   console.log(itemCards);

  // console.log("Pha br",resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const category =
  resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
    (f) =>
      f.card?.card?.['@type'] ===
      'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
  ) || [];


  console.log(category);
  return (
    <div className='text-center'>
      <h1 className='font-bold mt-8 text-2xl'>{resInfo?.cards[2]?.card?.card?.info?.name}</h1>
      <p className='font-semibold text-lg'>{resInfo?.cards[2]?.card?.card?.info?.cuisines?.join(', ')} - {resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage} </p>

      {category.map((c) => (<RestaurantCategory  data={c?.card?.card}/>))}
    </div>


  );
};

export default RestaurantMenu;

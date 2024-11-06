import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_URL_API } from '../utils/constant';
const RestaurantMenu = () => {

  const [resInfo, setResInfo] = useState(null)

  const {resId} = useParams()
  

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      MENU_URL_API + resId + "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json()
    console.log(json);
    setResInfo(json.data)
  };

//   const {name, costForTwoMessage,cuisines} = 

     const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
//   console.log(itemCards);

  return (
    <div className='menu'>
    
      <h1>{resInfo?.cards[2]?.card?.card?.info?.name}</h1>
      <h3>{resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}</h3>
      <h3>{resInfo?.cards[2]?.card?.card?.info?.cuisines?.join(', ')}</h3>
      
      <ul>
        {itemCards.map((item)=>(
            <li>
                {item.card.info.name}
            </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;

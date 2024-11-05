import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();

    useEffect(() => {
        fetchMenu();
    }, [resId]); // Add resId as a dependency to refetch if it changes

    const fetchMenu = async () => {
        try {
            const data = await fetch(
                `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
            );
            const json = await data.json();
            console.log(json);
            setResInfo(json.data);
        } catch (error) {
            console.error('Error fetching menu:', error);
        }
    };

    // Extract `itemCards` safely with optional chaining
    const itemCards =
        resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
            ?.card?.itemCards;

    return (
        <div className='menu'>
            {!resInfo ? (
                <Shimmer /> // Show loading shimmer while data is fetching
            ) : (
                <>
                    <h1>{resInfo?.cards?.[2]?.card?.card?.info?.name}</h1>
                    <h3>{resInfo?.cards?.[2]?.card?.card?.info?.costForTwoMessage}</h3>
                    <h3>{resInfo?.cards?.[2]?.card?.card?.info?.cuisines?.join(', ')}</h3>

                    <ul>
                        {itemCards &&
                            itemCards.map((item) => (
                                <li key={item.card.info.id}>
                                    {' '}
                                    {/* Use a unique key */}
                                    {item.card.info.name}
                                </li>
                            ))}
                    </ul>
                </>
            )}
        </div>
    );
};

export default RestaurantMenu;

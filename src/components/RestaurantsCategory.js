import { useState } from 'react';
import ItemList from './ItemList';

const RestaurantCategory = ({ data, showItems, setShowIndex, index }) => {
  const handleClick = () => {
    setShowIndex(showItems ? null : index); // Toggle the index based on current state
  };

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>{showItems ? "🔼" : "🔽"}</span> {/* Toggle arrow based on showItems */}
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
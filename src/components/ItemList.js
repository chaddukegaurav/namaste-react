import { CDN_URL } from '../utils/constant';

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <div
          key={`${item.card.info.id}-${index}`}
          className="p-2 mt-2 border-b-2 w-full text-left flex"
        >
          {/* Left Section */}
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-bold">{item.card.info.name}</span>
              <span className="font-semibold">
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p>{item.card.info.description}</p>
          </div>

          {/* Right Section */}
          <div className="w-3/12 p-4 flex flex-col items-center">
            {/* Image */}
            <img
              src={item?.card?.info?.imageId ? CDN_URL + item.card.info.imageId : '/path/to/default-image.jpg'}
              alt={item?.card?.info?.name || 'No Image Available'}
              className="w-full rounded-xl"
            />
            <button className="p-2 rounded-lg bg-slate-50 shadow-lg mb-7">
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

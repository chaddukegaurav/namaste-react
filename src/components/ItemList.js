import { CDN_URL } from '../utils/constant';

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className='p-2 mt-2 border-b-2 w-full text-left flex'
        >
          <div className='w-9/12'>
            <div className='py-2'>
              <span className='font-bold'>{item.card.info.name}</span>
              <span className='font-semibold'>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p>{item.card.info.description}</p>
          </div>
          <div className='w-3/12 p-4 '>
            <div className='absolute'>
              <button className='p-2 ms-14 mt-20 rounded-lg bg-slate-50 shadow-lg'>
                Add +
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className='w-full rounded-xl'
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

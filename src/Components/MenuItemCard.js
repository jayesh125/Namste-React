import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { useState } from "react";
import { addItems } from "../utils/Store/cartSlice";
const MenuItemCard = ({ card }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const info = card?.card?.info;
  // console.log(card);
  // console.log(info);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      key={info?.id}
      className="flex p-2 justify-between rounded-xl m-3 items-center border-black border-b border-r"
    >
      {/* Item Info */}
      <div className="w-[500px] h-full">
        {info?.ribbon?.text ? (
          <p className="item-bestseller flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-4 h-4 mr-2"
            >
              <polygon
                fill="#d44539"
                points="12.3 15.94 15.8 22 17.4 18.77 21 19 17.5 12.94 12.3 15.94"
              ></polygon>
              <polygon
                fill="#d44539"
                points="11.7 15.94 8.2 22 6.6 18.77 3 19 6.5 12.94 11.7 15.94"
              ></polygon>
              <circle cx="12" cy="9" r="7" fill="#f4d45a"></circle>
              <path
                fill="#ecb12a"
                d="M12.3,6.32l.75,1.51,1.66.24a.34.34,0,0,1,.19.58L13.69,9.82,14,11.47a.34.34,0,0,1-.49.36L12,11.05l-1.49.78a.34.34,0,0,1-.49-.36l.29-1.65L9.1,8.65a.34.34,0,0,1,.19-.58L11,7.83l.75-1.51A.33.33,0,0,1,12.3,6.32Z"
              ></path>
            </svg>
            <span>{info.ribbon.text}</span>
          </p>
        ) : null}

        <h4 className="font-gilroy font-bold py-2">{info?.name}</h4>

        <h4 className="font-bold font-mono">
          ₹ {info?.defaultPrice ? info?.defaultPrice / 100 : info?.price / 100}
        </h4>

        <div className="flex">
          {info?.ratings?.aggregatedRating?.rating ? (
            <p className="font-semibold font-gilroy text-gray-800 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5 mr-2"
              >
                <circle cx="12" cy="12" r="10" fill="#2BB673" />
                <polygon
                  points="12 6.5 13.9 10.9 18.6 11.3 15 14.5 16.2 19 12 16.5 7.8 19 9 14.5 5.4 11.3 10.1 10.9"
                  fill="#ffffff"
                />
              </svg>
              {info.ratings.aggregatedRating.rating + " "}
            </p>
          ) : null}

          <p className="font-semibold  text-gray-800">
            {info?.ratings?.aggregatedRating?.ratingCountV2
              ? "( " + info?.ratings?.aggregatedRating?.ratingCountV2 + " ) "
              : null}
          </p>
        </div>

        <p
          className={`${
            isExpanded ? "whitespace-normal " : "line-clamp-2"
          } break-words text-gray-500`}
        >
          {info?.description}
        </p>
        {info?.description?.length > 0 && (
          <button
            onClick={toggleExpand}
            className="text-gray-800 mt-2 hover:underline"
          >
            {isExpanded ? "Show less" : "Read more"}
          </button>
        )}
      </div>

      {/* Item Image */}
      <div className="w-56 h-40 p-1 drop-shadow-md">
        <img
          src={CDN_URL + info?.imageId}
          alt={info?.name}
          className="rounded-xl w-56 h-[100%] object-cover"
        />
      </div>
    </div>
  );
};

export const withAddBtn = (MenuItemCard) => {
  return (props) => {
    const dispatch = useDispatch();
    const info = props;

    const handleAddItem = (item) => {
      dispatch(addItems(item));
    };
    
    return (
      <div className="relative ">
        <button
          className="absolute top-[145px] right-24 bg-white border-black border p-1  rounded text-green-700 font-bold z-10"
          onClick={() => handleAddItem(info)}
        >
          Add +
        </button>
        <MenuItemCard {...props} />
      </div>
    );
  };
};

export default MenuItemCard;

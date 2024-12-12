import { CDN_URL } from "../utils/constants";

const ResCard = ({ resData }) => {
  const { name, areaName, avgRating, cloudinaryImageId, cuisines, sla, id } =
    resData.info;

  // console.log(resData);
  

  return (
    <div data-testid="REScard" className="group mb-8 transition-transform duration-300 ease-in-out hover:scale-90">
      <div className="w-56 h-40 p-1 drop-shadow-md">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt={name}
          className="rounded-xl w-56 h-[100%] object-cover"
        />
      </div>
      <div className="px-2">
        <h1 className="font-gilroy font-bold text-gray-900 text-ellipsis overflow-hidden whitespace-nowrap w-56">
          {name}
        </h1>
        <div className="res-rating flex items-center">
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
          <p className="font-bold">
            {avgRating} - {sla.slaString}
          </p>
        </div>
        <p className="text-gray-600 text-ellipsis overflow-hidden whitespace-nowrap w-56">
          {cuisines.join(", ")}
        </p>
        <h3 className="text-gray-600">{areaName}</h3>
      </div>
    </div>
  );
};

//Higher Order Componenet
export const withDiscountInfo = (ResCard) => {
  //Paasing main component props here
  return (props) => {
    const discountInfo = props?.resData?.info?.aggregatedDiscountInfoV3;

    return (
      <div className="relative group transition-transform duration-300 mr-5 m-2 ease-in-out hover:scale-90 w-56">
        {discountInfo && (
          <div className="absolute m-1 z-10 bg-black bg-opacity-60 text-white px-2 py-1 rounded-t-xl w-[97%]">
            <h1 className="text-sm font-bold">
              {discountInfo?.header} {discountInfo?.subHeader}
            </h1>
          </div>
        )}

        <ResCard {...props} />
      </div>
    );
  };
};


export default ResCard;

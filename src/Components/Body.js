import { useState } from "react";
import ResCard, { withDiscountInfo } from "./ResCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useTopRatedRes from "../utils/useTopRatedRes";
import useSearchRes from "../utils/useSearchRes";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const { filteredRes, topRatedBtn, toggleRestaurants } = useTopRatedRes();
  const listOfRes = useSearchRes(filteredRes, searchText);
  const onlineStatus = useOnlineStatus();
  const DiscountInfo = withDiscountInfo(ResCard);

  if (onlineStatus === false) {
    return <h1 className="bg-rose-500 text-white justify-center m-10 p-3">No Internet PLease Check Internet Connection</h1>;
  }

  return (
    <div className="w-[80%] justify-self-center">
      <div className="justify-center flex space-x-8 p-6">
        <div className="relative">
          <div className=" absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-900 dark:text-gray-900"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            data-testid = "searchInput"
            id="default-search"
            className="block w-[560px] p-4 ps-10 text-sm text-gray-300 border border-gray-300 rounded-lg bg-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-300 dark:border-gray-300 dark:placeholder-gray-900 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for restaurants..."
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <button
          onClick={toggleRestaurants}
          className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
        >
          <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
          <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
            <span className="relative text-white">{topRatedBtn}</span>
          </span>
        </button>
      </div>
      <div className="flex flex-wrap justify-around">
        {listOfRes?.length > 0 ? (
          listOfRes.map((restaurant, index) => (
            <Link key={index} to={"/restaurants/" + restaurant?.info?.id}>
              {restaurant.info?.aggregatedDiscountInfoV3 ? (
                <DiscountInfo resData={restaurant} />
              ) : (
                <ResCard resData={restaurant} />
              )}
            </Link>
          ))
        ) : (
          <Shimmer />
        )}
      </div>
    </div>
  );
};

export default Body;

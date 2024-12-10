import MenuList from "./MenuList";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import Shimmer2 from "./Shimmer2";
import useOnlineStatus from "../utils/useOnlineStatus";

const ResMenu = () => {
  const { resInfo, resMenuInfo } = useRestaurantInfo();
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1 className="bg-rose-500 text-white justify-center m-10 p-3">No Internet PLease Check Internet Connection</h1>;
  }

  if (!resInfo || !resMenuInfo) {
    return <Shimmer2 />;
  }

  return (
    <div className="w-[70%] justify-self-center">
      <h1 className="font-gilroy font-bold text-2xl p-2 mx-2 my-4">
        {resInfo?.name}
      </h1>
      <div className="border-2 p-3 mx-8 my-3 rounded-xl shadow-xl">
        <p className="res-card-rating flex font-gilroy font-bold">
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
          {resInfo?.avgRating} ({resInfo?.totalRatingsString}) -{" "}
          {resInfo?.costForTwoMessage}
        </p>
        <p className="text-rose-500 font-bold">
          {resInfo?.cuisines?.join(", ")}
        </p>
        <p className="text-gray-500 font-light">Outlet - {resInfo?.city}</p>
        <p className="text-gray-900 font-mono">{resInfo?.sla?.slaString}</p>
      </div>
      <h3 className="text-lg tracking-[8px] font-gilroy font-bold text-center my-8">MENU</h3>
      <div className="menu-section">
        {resMenuInfo?.map((itemCards, index) => (
          <MenuList key={index} cards={itemCards} />
        ))}
      </div>
    </div>
  );
};

export default ResMenu;

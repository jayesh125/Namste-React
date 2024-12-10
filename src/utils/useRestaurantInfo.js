import { useEffect, useState } from "react";
import { SWIGGY_RES_MENU_URL } from "./constants";
import { useParams } from "react-router-dom";

const useRestaurantInfo = () => {
  const [resInfo, setResInfo] = useState();
  const [resMenuInfo, setResMenuInfo] = useState();
  const {resId} = useParams();

  useEffect(() => {
    fetchData();
  }, [resId]);

  const fetchData = async () => {
    try {
      // 
      const data = await fetch(`${SWIGGY_RES_MENU_URL}${resId}`);
      const json = await data.json();

      const resInfo = json?.data?.cards[2]?.card?.card?.info;

      const resMenuInfo =
        json?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards;

      setResInfo(resInfo);
      setResMenuInfo(resMenuInfo);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  };

  return {
    resInfo,
    resMenuInfo,
  };
};

export default useRestaurantInfo;

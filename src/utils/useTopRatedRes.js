import { useState, useEffect } from "react";
import useRestaurants from "./useRestaurants";

const useTopRatedRes = () => {
    const [topRatedBtn, setTopRatedBtn] = useState("Top Rated Restaurants");
    const restaurants = useRestaurants();
    const [filteredRes, setFilteredRes] = useState([]);

    useEffect(() => {
        if (restaurants.length > 0) {
            if (topRatedBtn !== "Top Rated Restaurants") {
                const filtered = restaurants.filter((res) => res?.info?.avgRating > 4);
                setFilteredRes(filtered);
            } else {
                setFilteredRes(restaurants);
            }
        }
    }, [restaurants, topRatedBtn]);

    const toggleRestaurants = () => {
        setTopRatedBtn((prev) =>
            prev === "Top Rated Restaurants" ? "See All Restaurants" : "Top Rated Restaurants"
        );
    };

    return {
        filteredRes,
        topRatedBtn,
        toggleRestaurants,
    };
};

export default useTopRatedRes;

import { useState, useEffect } from "react"

const useSearchRes = (restaurants, searchText) => {
    const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);

    useEffect(() => {
        if (!searchText.trim()) {
            setFilteredRestaurants(restaurants);
        } else {
            const filtered = restaurants.filter((res) =>
                res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(filtered);
        }
    }, [searchText, restaurants]);

    return filteredRestaurants;
}

export default useSearchRes;
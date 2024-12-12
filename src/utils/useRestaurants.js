import { useEffect, useState } from "react"
import { SWIGGY_URL } from "./constants";
import useFindeIndex from "./useFindIndex";

const useRestaurants = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    useEffect(() =>{
        fetchData();
    },[]);

    const fetchData = async () => {
        try {
            const response = await fetch(SWIGGY_URL);
            const json = await response.json();
    
            const cards = json?.data?.cards;
    
            const indexOfCard = useFindeIndex(cards);
            const restaurants = cards[indexOfCard]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            
            // console.log("Restaurants:", restaurants);
            setListOfRestaurants(restaurants || []);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    return listOfRestaurants;
}

export default useRestaurants;
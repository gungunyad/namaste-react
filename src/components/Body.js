import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
// import resList from "./utils/mockData";
import restLists from "./utils/swiggyData";

const Body = () => {

    const [listOfRestaurant, setlistOfRestaurant] = useState(restLists);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2183307&lng=72.9780897&collection=83637&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
        );

        const json = await data.json();
     
    console.log(json);
    // setlistOfRestaurant(json.data.cards)
};
    
    
    return (
    <div className="body">
        <div className="filter">
            <button 
              className="filter-btn" 
              onClick={() => {
                const filteredList = listOfRestaurant.filter(
                    (res) => res.rating > 4
                );
                setlistOfRestaurant(filteredList);
            }}
            >
                Top Rated Restaurants
            </button>
        </div>
        <div className="res-container">
            {
              listOfRestaurant.map((restaurant) => ( 
              <RestaurantCard key={restaurant.id} resData={restaurant} />
            ))}
        </div>
    </div>
    );
};

export default Body;

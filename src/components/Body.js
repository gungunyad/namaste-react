import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer";
// import resList from "./utils/mockData";
const Body = () => {

    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    
    const [ filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText , setSearchText] = useState("");

    
    
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
         "https://dummyjson.com/recipes"
         );

        const json = await data.json();
  
        console.log(json);
 
        //Optional Chaining
 
        setListOfRestaurant(json?.recipes);
        setFilteredRestaurant(json?.recipes);
};
    // Conditional Rendering - 
    return listOfRestaurant.length === 0 ? 
            ( <Shimmer /> ) :
    (
    <div className="body">
        <div className="filter">
            <div className="search">
                <input type="text"
                   className="search-box"
                   value={searchText}
                   onChange={(e) => {
                    setSearchText(e.target.value);
                   }}/>
                <button 
                    onClick={() => {


                        console.log("Search",searchText);

                        const filteredRestaurant = listOfRestaurant.filter(
                            (res) => res.name.toLowerCase().includes(searchText.toLowerCase())
                        );

                        setFilteredRestaurant(filteredRestaurant);
                    }}
                   >
                    Search
                </button>
            </div>
            <button 
              className="filter-btn" 
              onClick={() => {
                console.log("listOfRestaurant", listOfRestaurant);
                
                const filteredList = listOfRestaurant.filter(
                    (res) => res.rating > 4.5
                );

                console.log("filteredList", filteredList);
                
                setFilteredRestaurant(filteredList);
            }}
            >
                Top Rated Restaurants
            </button>
        </div>
        <div className="res-container">
            {
              filteredRestaurant.map((restaurant) => ( 
              <RestaurantCard key={restaurant.id} resData={restaurant} />
            ))}
        </div>
    </div>
    );
};

export default Body;

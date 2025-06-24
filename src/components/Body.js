import { useEffect, useState, useContext } from "react";
import RestaurantCard, { withPromtedLabel } from "./RestaurantCard";
import Shimmer from "./shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {

    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    
    const [ filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText , setSearchText] = useState("");

    const RestaurantCardPromoted = withPromtedLabel(RestaurantCard);

    
    
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


    const onlineStatus = useOnlineStatus();
    
    if(onlineStatus === false)
        return(
         <h1>You are Offline..!!
             Please Check Your Internet Connection👻👾...
         </h1>
         );

         const { loggedInUser, setUserName } = useContext(UserContext);


    // Conditional Rendering - 
    return listOfRestaurant.length === 0 ? 
            ( <Shimmer /> ) :
    (
    <div className="body bg-whit">
        <div className="filter flex">
            <div className="search m-4 p-4">
                <input type="text"
                   className="border border-solid border-black rounded-2xl"
                   value={searchText}
                   onChange={(e) => { 
                    setSearchText(e.target.value);
                   }}/>
                <button className="px-4 py-1 bg-gray-300 m-4 rounded-2xl"
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
            <div className="m-4 p-4 flex items-center">
            <button 
              className="filter-btn px-4 py-1 bg-gray-300 rounded-2xl" 
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
            <div className="serch m-4 p-4 flex items-center">
                <label>UserName : </label>
                <input className="border border-black p-2 m-2 rounded-2xl"
                    value={loggedInUser}
                    onChange={(e) => setUserName(e.target.value)}  />
            </div>
        </div>
        <div className="flex flex-wrap">
            {
              filteredRestaurant.map((restaurant) => ( 
              <RestaurantCard key={restaurant.id} resData={restaurant} />
            ))}
        </div>
    </div>
    );
};

export default Body;



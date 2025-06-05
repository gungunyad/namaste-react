# Namaste React🚀


# Parcel
- Dev Build
- local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - Written in C++
- Caching - Faster Builds
- Image Optmization
- Minification
- Bundling
- Compress 
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking
- Different dev and prod bundles



# Namaste Food

  Header
  - Logo
  - Nav Items
  Body
  - Search
  - Restaurantcontainer
   - ResturantCard
    - Img 
    - Name of Res, Star Rating, cuisine, delary time
  Footer
   - Copyright
   - Links
   - Address
   - Contact



# Two types of Export/Impport

- Default Export/Import

export default Component;
import Component from "path";

- Named Export/Import

export const Component;
import {Component} from "path";


# image spliting

  in RestaurantCard.js

    let imageSplit = image.split("/");
    let uniqueImageName = imageSplit[imageSplit.length - 1];

    src={ CDN_LOGO + uniqueImageName}
           

# RestaurantCard
import { SWIGGY_IMG } from "../utils/component";

const RestaurantCard = (props) => {
    const { resData } = props;
    
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        areaName,
    } = resData?.data?.cards[3]?.card?.card?.info;
    console.log(resData);

    return (
        <div className="res-card" style={{backgroundColor:"rgb(234, 231, 231)"}}>
         <img 
          className="res-logo"
          alt="res-logo"
          src={ SWIGGY_IMG + cloudinaryImageId }
           />
            <h3>{name}</h3>
            <h4>{cuisines.join(" , ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{areaName}</h4>
        </div>
    ); 
};

export default RestaurantCard;       


# Body 
import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer";

const Body = () => {

    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    
    const [ filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText , setSearchText] = useState("");

    
    
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&collection=83637&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
         );

        const json = await data.json();
  
        //console.log(json);
 
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
            {/* <button 
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
            </button> */}
        </div>
        <div className="res-container">
            {
              filteredRestaurant.map((restaurant) => ( 
              <RestaurantCard key={restaurant.data.cards[3].card.card.info.id} resData={restaurant} />
            ))}
        </div>
    </div>
    );
};

export default Body;


              <Link 
                key={restaurant.id}
                to={"/restaurants/" + restaurant.id }> 
                <RestaurantCard resData={restaurant} />
              </Link>



# UserClass.js
   import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);
       
        this.state = {
           count : 0
        } }
   render() {

        const { Name, Location} = this.props;
        const { count } = this.state;

        return (
            <div className="User-Card">
                <h2>Count : {count}</h2>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count + 1,
                    });
                }}
                >
                    Count Increase
                </button>
                <h2>Name:{Name}</h2>
                <h3>Location:{Location}</h3>
            </div>
        ) } }
export default UserClass;

# State variable
  Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)


# Menu ID
  799184 - B Burger
  32399  - McDonald's
  78036  - Burger King
  709523 - Speak Burgers by Vicky Ratnani
  65221  - The Barn Grill
  6990   - Jumboking Burgers
  52767  - KFC


# Other Bundelr
 - Chunking
 - Code Splitting
 - Dynamic Bundling
 - Lazy Loading
 - On Demand Loading
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
import { CDN_LOGO } from "./utils/component";

const RestaurantCard = (props) => {
    const { resData } = props;
    
    const {
        image,
        name,
        cuisine,
        rating,
        tags,
        mealType,
    } = resData;

    let imageSplit = image.split("/");
    let uniqueImageName = imageSplit[imageSplit.length - 1];

    return (
        <div className="res-card" style={{backgroundColor:"rgb(234, 231, 231)"}}>
          <img 
          className="res-logo"
          alt="res-logo"
          src={ CDN_LOGO + uniqueImageName}
           />
            <h3>{name}</h3>
            <h4>{cuisine}</h4>
            <h4>{rating} stars</h4>
            <h4>{tags.join(" , ")}</h4>
            <h4>{mealType.join(" , ")}</h4>
        </div>
    ); 
};

export default RestaurantCard;           


# Body 
import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "./utils/mockData";

const Body = () => {

    const [listOfRestaurant, setlistOfRestaurant] = useState(resList);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2183307&lng=72.9780897&collection=83637&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
        );

        const json = await data.json();
     
    console.log(json);
    setlistOfRestaurant(json.data.cards)
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
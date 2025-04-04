import { CDN_LOGO } from "../utils/component";

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

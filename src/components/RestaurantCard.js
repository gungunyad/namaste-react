// import { CDN_LOGO } from "./utils/component";

const RestaurantCard = (props) => {
    const { resData } = props;
    
    const {
        cloudinaryImageId,
        name,
        cuisine,
        avgRating,
        costForTwo
    } = resData.cards;

    // let imageSplit = image.split("/");
    // let uniqueImageName = imageSplit[imageSplit.length - 1];

    return (
        <div className="res-card" style={{backgroundColor:"rgb(234, 231, 231)"}}>
          <img 
          className="res-logo"
          alt="res-logo"
          src=

           />
            <h3>{name}</h3>
            <h4>{cuisine}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
        </div>
    ); 
};

export default RestaurantCard;

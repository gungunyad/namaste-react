import { CDN_LOGO } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { 
         image, 
         name, 
         cuisine, 
         rating, 
         tags, 
         mealType 
        } = resData;

  let imageSplit = image.split("/");
  let uniqueImageName = imageSplit[imageSplit.length - 1];

  return (
    <div className="m-4 p-4 w-[250px] 
                    rounded-2xl
                   bg-gray-200 hover:bg-gray-500 shadow-2xl">
      <img
        className="res-logo rounded-2xl"
        alt="res-logo"
        src={CDN_LOGO + uniqueImageName}
      />
      <h3 className="font-extrabold">{name}</h3>
      <h4 className="font-mono">{cuisine}</h4>
      <h4 className="text-xs">{rating} stars</h4>
      <h4 className="font-semibold text-sm">{tags.join(" , ")}</h4>
      <h4 className="font-semibold text-sm">{mealType.join(" , ")}</h4>
    </div>
  );
};

// Higher Order Component

// input - RestaurantCard =>> RestaurantCardPromoted

export const withPromtedLabel = (RestaurantCard) => {
  return () => {
    return (
      <div>
        <label>Promotwd</label>
        <RestaurantCard />
      </div>
    )
  }
}

export default RestaurantCard;

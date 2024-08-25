import { restaurants } from "../../constants/mock";
import { Restaurant } from "../restaurant/restaurant";

export const RestaurantPage = ({ title }) => {
    return (
        <div>
            <h1>{title}</h1>

            {restaurants.map(({ name, menu, reviews }) => (
                <Restaurant
                    name={name}
                    menu={menu}
                    reviews={reviews}
                />
            ))}
        </div>
    );
    return (<div></div>);
};

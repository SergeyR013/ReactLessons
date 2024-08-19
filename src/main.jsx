import { createElement } from "react";
import { createRoot } from "react-dom/client";
import { restaurants } from "/materials/mock.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const Restaurant = (restaurant) => {
    return (
        <div>
            <hr />
            <h2>{restaurant.name}</h2>
            <h3>Menu</h3>
            <ul>
                {restaurant.menu.map(item => (
                    <li key={item.id}>
                        {item.name} - ${item.price}
                    </li>
                ))}
            </ul>
            <h3>Reviews</h3>
            <ul>
                {restaurant.reviews.map(review => (
                    <li key={review.id}>
                        <strong>{review.user}</strong>: {review.text} (Rate: {review.rating})
                    </li>
                ))}
            </ul>
        </div>
    );
};

root.render(
    createElement("div", {},
        restaurants.map(restaurant => Restaurant(restaurant))
    )
);

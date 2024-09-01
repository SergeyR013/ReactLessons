import { Reviews } from "../restaurant-review/restaurant-review";
import { Menu } from "../restaurant-menu/restaurant-menu"
import { ReviewForm } from "../review-form/review-form";

export const Restaurant = ({ name, menu, reviews }) => {
    if (!name) {
        return null;
    }

    return (
        <section>
            <h2>{name}</h2>
            <h3>Menu</h3>
            {menu?.length ? <Menu menu={menu} /> : <div>Empty menu</div>}
            <h3>Review</h3>
            {reviews?.length ? <Reviews reviews={reviews} /> : <div>Empty review</div>}
            <ReviewForm/>
        </section>
    );
};
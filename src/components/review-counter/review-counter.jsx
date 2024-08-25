import { Counter } from "../counter/counter.jsx"

export const ReviewCounter = ({ rating, onRatingChange }) => {

    const handleIncrease = () => {
        if (rating < 5) {
            onRatingChange(rating + 1);
        }
    };

    const handleDecrease = () => {
        if (rating > 1) {
            onRatingChange(rating - 1);
        }
    };

    return (
        <div>
            <Counter
                value={rating}
                onIncrease={handleIncrease}
                onDecrease={handleDecrease} />
        </div>
    )
}
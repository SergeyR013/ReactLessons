export const Reviews = ({ reviews }) => {
    return (
        <div>
            {reviews?.map((review) => (
                <li key={review.id}>
                   <strong>{review.user}</strong>: {review.text} (Rate: {review.rating})
                </li>
            ))}
        </div>
    );
};
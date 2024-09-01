import { Counter } from "../counter/counter.jsx"
import { ReviewCounter } from "../review-counter/review-counter.jsx";
import { useForm } from "../review-form/use-form.js"

export const ReviewForm = () => {
    const { form, setName, setText, setRate, clear } = useForm();
    const { name, text, rate } = form;


    return (
        <div>
            <div>
                <span>Name</span>
                <input type='text' value={name} onChange={setName} />
            </div>
            <div>
                <span>Text</span>
                <input type='text' value={text} onChange={setText} />
            </div>
            <div>
                <span>Rate</span>
                <ReviewCounter
                    rating={rate}
                    onRatingChange={setRate} />
            </div>
            <div>
                <button onClick={clear}>Clear</button>
            </div>

        </div>
    );
};
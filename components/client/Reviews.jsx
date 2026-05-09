import { useEffect, useState } from "react";
import ReviewCard from "../ui/ReviewCard";
import axios from "axios";

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        async function getReviews(){

            const token = localStorage.getItem("token");

            let url = "http://localhost:5067/api/client/get-reviews";

            try {
                const response = await axios.get(url, {
                    headers: {
                        "Authorization" : `Bearer ${token}`,
                        "Content-Type" : "application/json"
                    },withCredentials: true
                })

                console.log(response.data);
            } catch (error) {
                console.log("Error fetching reviews: ", error);
            }
        }
        getReviews();
    },[])

    return ( 
        <>
        <section className="h-max w-full px-10 pb-10">
            <h2>Reviews</h2>
            <div className="h-max w-full sm:w-3/5 mt-5">
                {
                    reviews.length > 0 ? (reviews.map((review) => (
                        <ReviewCard key={review.id} review={review} />
                    ))) : (
                        <div className="h-max w-full flex items-center justify-start py-10">
                            <p>You do not have any reviews yet!</p>
                        </div>
                    )
                }
            </div>
        </section>
        </>
     );
}
 
export default Reviews;
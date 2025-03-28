import { useState } from "react";

export default function CustomerReviews() {
  const [reviews, setReviews] = useState([
    { id: 1, customer: "John Doe", rating: 5, comment: "Excellent product! Highly recommend." },
    { id: 2, customer: "Jane Smith", rating: 4, comment: "Good quality, but a bit expensive." },
    { id: 3, customer: "Emily Johnson", rating: 5, comment: "Absolutely love it! Worth every penny." },
  ]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-xl font-bold mb-4">Customer Reviews</h2>
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">{review.customer}</h3>
            <p className="text-yellow-500">{"⭐".repeat(review.rating)}</p>
            <p className="text-gray-600 mt-2">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import ReviewItem from "./ReviewItem";
const Reviews = () => {
  const reviews = [
    { _id: 1, name: "Winson Harry", comment: " ", img: people1 },
    { _id: 2, name: "Winson Harry", comment: " ", img: people2 },
    { _id: 3, name: "Winson Harry", comment: " ", img: people3 },
  ];
  return (
    <div className="my-10">
      <div className="flex justify-between items-center">
        <div>
          <h4 className="uppercase  mt-16  font-medium text-secondary text-[20px]">
            Testimonial
          </h4>
          <h5 className="text-[35px] text-accent mb-[60px]">
            What Our Patients Say
          </h5>
        </div>
        <div>
          <img className="w-24 lg:w-48" src={quote} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <ReviewItem key={review._id} review={review}></ReviewItem>
        ))}
      </div>
    </div>
  );
};

export default Reviews;

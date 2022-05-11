import React from "react";

const ReviewItem = ({ review }) => {
  return (
    <div className="card  bg-base-100 shadow-xl">
      <div className="card-body">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, esse!
          Voluptates nemo sapiente ea autem assumenda et veniam. A, iure.
        </p>

        <div className="flex items-center">
          <div className="avatar mr-7 mt-4">
            <div className="w-16 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
              <img src={review.img} alt="" />
            </div>
          </div>
          <div>
            <h3 className="text-[20px] font-semibold">{review.name}</h3>
            <p>California</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;

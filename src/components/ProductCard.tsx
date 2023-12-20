import Image from "next/image";
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface PropsType {
  img: string;
  title: string;
  desc: string;
  rating: number;
  price: string;
}

const ProductCard: React.FC<PropsType> = ({ img, title, desc, rating, price }) => {
  const generateRating = (rating: number) => {
    const filledStars = Array.from({ length: rating }, (_, index) => (
      <AiFillStar key={index} />
    ));
    const emptyStars = Array.from({ length: 5 - rating }, (_, index) => (
      <AiOutlineStar key={rating + index} />
    ));

    return (
      <div className="flex gap-1 text-[20px] text-[#FF9529]">
        {filledStars}
        {emptyStars}
      </div>
    );
  };

  return (
    <div className="px-4 border border-gray-200 rounded-xl max-w-[400px]">
      <div>
        <Image className="w-full h-auto" src={img} width={200} height={300} alt={title} />
      </div>

      <div className="space-y-2 py-2">
        <h2 className="text-accent font-medium uppercase">{title}</h2>
        <p className="text-gray-500 max-w-[150px]">{desc}</p>
        <div>{generateRating(rating)}</div>

        <div className="font-bold flex gap-4">
          ${price}
          <del className="text-gray-500 font-normal">${parseFloat(price) + 50}.00</del>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

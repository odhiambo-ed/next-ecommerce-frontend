import Image from "next/image";
import React from "react";

const Reviews = () => {
  return (
    <div className="container pt-16 pb-16">
      <h2 className="font-medium text-2xl pb-4">Testimonials</h2>
      <div className="grid lg:grid-cols-[300px,1fr] gap-4">
        {/* Testimonial Card */}
        <div className="border border-gray-300 rounded-2xl p-6 lg:p-0 grid place-items-center">
          <div className="text-center space-y-2">
            <Image
              className="rounded-full inline-block"
              src="/images/user.jpg"
              width={80}
              height={80}
              alt="dp"
            />
            <h2 className="text-gray-500 font-black text-2xl">Elsa Doe</h2>
            <p>CEO & Founder Invision</p>
            <div className="flex items-center justify-center">
              <Image
                className="inline-block py-2"
                src="/images/quotes.svg"
                width={30}
                height={30}
                alt="quotes"
              />
            </div>
            <p className="max-w-[200px] text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              placeat officiis nobis aspernatur accusantium!
            </p>
          </div>
        </div>

        {/* Banner */}
        <div className="bg-[url(/images/cta-banner.jpg)] bg-cover h-[500px] rounded-2xl grid place-items-center">
          <div className="bg-[#ffffffab] min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 sm:px-8 px-2 grid place-items-center gap-3">
            <button className="bg-blackish text-white p-2 rounded-md">
              25% DISCOUNT
            </button>
            <h2 className="font-extrabold text-2xl text-[#272727]">
              Summer Collection
            </h2>
            <p className="text-gray-500 text-2xl">
              Starting @ $20 <b>Shop Now</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;

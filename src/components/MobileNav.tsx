import React from "react";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoMenuOutline } from "react-icons/io5";
import { AiOutlineHome, AiOutlineAppstore } from "react-icons/ai";

const MobileNav = () => {
  return (
    <div className="lg:hidden fixed bottom-0 w-full bg-white left-[50%] -translate-x-[50%] max-w-[500px] mob_navbar px-8">
      <div className="flex justify-between text-[28px] py-2">
        <IoMenuOutline />

        {/* Shopping Bag Icon with Item Count */}
        <div className="relative">
          <HiOutlineShoppingBag />
          <div className="badge">0</div>
        </div>

        <AiOutlineHome />

        {/* Heart Icon with Item Count */}
        <div className="relative">
          <FiHeart />
          <div className="badge">0</div>
        </div>

        <AiOutlineAppstore />
      </div>
    </div>
  );
};

export default MobileNav;

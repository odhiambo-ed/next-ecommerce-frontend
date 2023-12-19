import React from 'react'
import { CiSearch, CiUser, CiHeart } from "react-icons/ci";
import { FaOpencart } from "react-icons/fa6";

function HeaderMain() {
  return (
      <div className="border-b border-gray-200 py-6">
          <div className="container sm:flex justify-between items-center">
              <div className="font-bold text-4xl text-center text-blackish">
                  MyShop
              </div>
              <div className="relative w-full sm:w-[300px] md:[70%]">
                  <input
                      type="text"
                      className='border border-gray-200 rounded-lg w-full px-4 p-2 focus:outline-none focus:ring-2 focus:ring-gray-300'
                      placeholder='Search for products'
                  />
                  <CiSearch
                        className='absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-400'
                        size={20}
                  />
              </div>
              <div className="hidden lg:flex gap-4 text-gray-500  text-[30px]">
                  <CiUser />
                  <div className="relative">
                      <CiHeart />
                        <div className="absolute top-0 right-0 w-[15px] h-[15px] bg-red-500 rounded-full text-[10px] text-white text-center">
                          2
                        </div>
                  </div>
                  <div className="relative">
                      <FaOpencart />
                        <div className="absolute top-0 right-0 w-[15px] h-[15px] bg-red-500 rounded-full text-[10px] text-white text-center">
                          2
                        </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default HeaderMain
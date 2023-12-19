import React from 'react'
import { IoLogoFacebook } from 'react-icons/io5'
import { FaXTwitter, FaGithub, FaLinkedin } from 'react-icons/fa6'

function HeaderOne() {
  return (
      <div className="border-b border-gray-200 hidden sm:block">
          <div className="container py-4">
              <div className="flex justify-between items-center">
                  <div className="hidden lg:flex gap-1">
                      <div className="header_one__icon_wrapper"><IoLogoFacebook /></div>
                      <div className="header_one__icon_wrapper"><FaXTwitter /></div>
                      <div className="header_one__icon_wrapper"><FaGithub /></div>
                      <div className="header_one__icon_wrapper"><FaLinkedin /></div>
                  </div> 
                  <div className="text-gray-500 text-[12px]">
                      <b>Free Shipping:</b> On all orders over $75
                  </div>
              </div>
          </div>
      </div>
  )
}

export default HeaderOne
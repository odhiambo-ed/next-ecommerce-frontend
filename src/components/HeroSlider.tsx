'use client'

import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slide from './Slide'

function HeroSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
    };

    const slideData = [
        {
        id: 0,
        img: "/images/banner-1.jpg",
        title: "Trending Item",
        mainTitle: "WOMEN'S LATEST FASHION SALE",
        price: "$20",
        },
        {
        id: 1,
        img: "/images/banner-2.jpg",
        title: "Trending Accessories",
        mainTitle: "MODERN SUNGLASSES",
        price: "$15",
        },
        {
        id: 2,
        img: "/images/banner-3.jpg",
        title: "Sale Offer",
        mainTitle: "NEW FASHION SUMMER SALE",
        price: "$30",
        },
        ];
    
  return (
      <div>
      <div className="container pt-6 lg:pt-0">
        <Slider {...settings}>
          {slideData.map((item) => (
            <Slide
              key={item.id}
              img={item.img}
              title={item.title}
              mainTitle={item.mainTitle}
              price={item.price}
            />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default HeroSlider
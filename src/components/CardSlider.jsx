import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardSlider = () => {
    
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 cards at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 cards on tablets
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 card on mobile
        },
      },
    ],
  };

  const cards = [
    { id: 1, title: "Card 1", description: "This is the first card." },
    { id: 2, title: "Card 2", description: "This is the second card." },
    { id: 3, title: "Card 3", description: "This is the third card." },
    { id: 4, title: "Card 4", description: "This is the fourth card." },
    { id: 5, title: "Card 5", description: "This is the fifth card." },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-5">
      <h2 className="text-2xl font-bold text-center mb-4">Card Slider</h2>
      <Slider {...settings}>
        {cards.map((card) => (
          <div key={card.id} className="p-4">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const SimpleCarousel = ({ hotelImages }) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, [slider1, slider2]);

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: ".slider-nav",
  };

  const settingsThumbs = {
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: true,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: "10px",
  };

  return (
    <div className="slider-wrapper">
      <Slider
        {...settingsMain}
        asNavFor={nav2}
        ref={(slider) => setSlider1(slider)}
      >
        {hotelImages.map((hi) => (
          <div className="slick-slide" key={hi.id}>
            {/* <h6 className="slick-slide-title"></h6> */}
            <img
              alt="Carousel"
              width={800}
              height={400}
              className="slick-slide-image"
              src={`http://127.0.0.1:8000${hi.image}`}
            />
            {/* <label className="slick-slide-label"></label> */}
          </div>
        ))}
      </Slider>
      <div>
        <div className="thumbnail-slider-wrap">
          <Slider
            {...settingsThumbs}
            asNavFor={nav1}
            ref={(slider) => setSlider2(slider)}
          >
            {hotelImages.map((hi) => (
              <div className="slick-slide" key={hi.id}>
                <img
                  alt="Carousel"
                  width={160}
                  height={100}
                  className="slick-slide-image"
                  src={`http://127.0.0.1:8000${hi.image}`}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

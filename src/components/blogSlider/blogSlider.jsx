import React from "react";
import Slider from "react-slick";
import BlogDesign from "../BlogDesign/BlogDesign";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

const BlogSlider = () => {
  const slider = React.useRef(null);

  return (
    <section className="container mx-auto px-4 md:px-0 mb-10">
      <div className="mt-10 flex justify-between items-center">
        <div>
          <h2 className="font-bold text-black/80 text-xl md:text-3xl">
            Related Blog News
          </h2>
        </div>
        <div className="md:flex gap-2 hidden">
          <button
            className={`text-2xl p-3 bg-[#F4FCFF] rounded-full hover:text-white g4`}
            onClick={() => slider?.current?.slickPrev()}
          >
            <GoArrowLeft />
          </button>
          <button
            className={`text-2xl p-3 bg-[#F4FCFF] rounded-full hover:text-white g4`}
            onClick={() => slider?.current?.slickNext()}
          >
            <GoArrowRight />
          </button>
        </div>
      </div>
      <div className="hidden md:block">
        <Slider ref={slider} {...settings}>
          {[1, 2, 3, 4, 5, 6, 7].map((item, idx) => {
            return (
              <div key={idx} className="py-10 pt-7">
                <BlogDesign data={item} />
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:hidden">
        {[1, 2, 3, 4, 5, 6, 7].slice(0,4).map((item, idx) => {
          return (
              <BlogDesign data={item} key={idx}/>
          )
        })}
      </div>
    </section>
  );
};

export default BlogSlider;

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
};

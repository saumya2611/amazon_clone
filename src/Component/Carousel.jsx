import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const Carousel = () => {
  return (
    <div className="h-[600px] bg-white">
      <Swiper
        loop={true}
        spaceBetween={0}
        // slidesPerView={3}
        autoplay={{
          delay: 4500,
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper h-[50%]"
      >
        <SwiperSlide>
          <img
            src={`${process.env.PUBLIC_URL}/images/carousel_1.jpg`}
            alt="Slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={`${process.env.PUBLIC_URL}/images/carousel_2.jpg`}
            alt="Slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <video controls muted="muted">
            <source src={"../images/carousel_vid.mp4"} type="video/mp4" />
          </video>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={`${process.env.PUBLIC_URL}/images/carousel_3.jpg`}
            alt="Slide 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={`${process.env.PUBLIC_URL}/images/carousel_4.jpg`}
            alt="Slide 4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={`${process.env.PUBLIC_URL}/images/carousel_5.jpg`}
            alt="Slide 2"
          />
        </SwiperSlide>
      </Swiper>
      <div className="h-[50%] bg-gradient-to-b from-stone-900"></div>
    </div>
  );
};

export default Carousel;

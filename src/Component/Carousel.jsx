import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const Carousel = () => {
  return (
    <div className="h-[600px] bg-white">
      <Swiper
        loop={true}
        spaceBetween={0}
        navigation={true}
        className="h-[50%]"
      >
        <SwiperSlide>
          <img src={"../images/carousel_1.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/carousel_2.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/carousel_3.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/carousel_4.jpg"} />
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default Carousel;

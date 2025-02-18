import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
const CarouselProduct = () => {
  return (
    <div className="m-3 bg-white">
      <div className="text-2xl font-semibold p-3">Best Seller</div>
      <Swiper
        slidesPerView={7}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
      >
        {Array.from({ length: 13 }, (_, i) => (
          <SwiperSlide key={i}>
            <Link to={`/productpage/${i}`}>
              <img src={`../images/product_${i}_small.jpg`} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselProduct;

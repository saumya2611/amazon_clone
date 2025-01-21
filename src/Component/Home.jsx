import React from "react";
import Carousel from "./Carousel";
import HomePageCard from "./HomePageCard";
import CarouselCategory from "./CarouselCategory";
import CarouselProduct from "./CarouselProduct";

function Home() {
  return (
    <div className="bg-slate-100">
      <div className="min-w-[1000px] max-w-[1500px] m-auto">
        <Carousel />
        <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
          <HomePageCard
            title={"We have surprice for you"}
            img={"../images/home_grid_1.jpg"}
            link={"See terms and conditions"}
          />
          <HomePageCard
            title={"Watch The Rings of Power"}
            img={"../images/home_grid_2.jpg"}
            link={"Start streaming now"}
          />
          <HomePageCard
            title={"Unlimited streaming"}
            img={"../images/home_grid_3.jpg"}
            link={"Find out more"}
          />
          <HomePageCard
            title={"More titles to explore"}
            img={"../images/home_grid_4.jpg"}
            link={"Browse kindle unlimited"}
          />
          <HomePageCard
            title={"Shop pet supplies"}
            img={"../images/home_grid_5.jpg"}
            link={"See more"}
          />
          <HomePageCard
            title={"Spring sale"}
            img={"../images/home_grid_6.jpg"}
            link={"See the deals"}
          />
          <HomePageCard
            title={"Echo buds"}
            img={"../images/home_grid_7.jpg"}
            link={"See more"}
          />
          <HomePageCard
            title={"Family plan: 3 months free"}
            img={"../images/home_grid_8.jpg"}
            link={"Learn more"}
          />
          <div className="m-3 pt-8">
            <img className="xl:hidden" src={"../images/banner_image_2.jpg"} />
          </div>
        </div>
        <CarouselProduct />
        <CarouselCategory />
        <div className="h-[200px]">
          <img className="h-[100%] m-auto" src={"../images/banner_image.jpg"} />
        </div>
      </div>
    </div>
  );
}

export default Home;

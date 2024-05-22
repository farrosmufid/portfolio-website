import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

// import required modules
import { Pagination, Navigation, EffectCoverflow, Autoplay } from 'swiper/modules';

export default function Carousel() {
  return (
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        speed={1000}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}

        // navigation={true}

        pagination={{
          clickable: true,
        }}
        // pagination={true}
        // navigation={true}
        // loop={true}
        // modules={[EffectCoverflow, Pagination, Navigation]}
        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/images/sudata_pictures/Sudata_1.jpg" alt="Sudata 1"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/sudata_pictures/Sudata_2.jpg" alt="Sudata 2"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/sudata_pictures/Sudata_3.jpg" alt="Sudata 3"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/sudata_pictures/Sudata_4.jpg" alt="Sudata 4"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/sudata_pictures/Sudata_5.jpg" alt="Sudata 5"/>
        </SwiperSlide>
      </Swiper>
  );
}

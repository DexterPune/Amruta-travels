
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import core Swiper styles
import 'swiper/css/navigation'; // Import Navigation styles
import 'swiper/css/pagination'; // Import Pagination styles
import { Navigation, Pagination, Autoplay } from 'swiper';
const SliderSection = () => {
  return (
    <div className="slider-section ">
      <Swiper
        className="main-slider-2 w-100 "
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 100,
          disableOnInteraction: false,
         }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev',
        }}
      >
        <SwiperSlide>
          <div className="slider-img w-100 ">
            <img src="\img\Sildes\Slides-01.jpg" alt="img" className="kenburns w-100 " style={{ animationDuration: '12000ms' }} />
          </div>
          <div className="slider-content-wrap d-flex align-items-center text-left">
          
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-img w-100 ">
            <img src="/img/Slides-02.jpg" alt="img" className="kenburns w-100 " style={{ animationDuration: '12000ms' }} />
          </div>
          <div className="slider-content-wrap d-flex align-items-center text-left">
          
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-img w-100 ">
            <img src="/img/Sliders 1-02.jpg" alt="img" className="kenburns w-100 " style={{ animationDuration: '12000ms' }} />
          </div>
          <div className="slider-content-wrap d-flex align-items-center text-left">
          
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-img w-100 ">
            <img src="\img\Sildes\Sliders 1-03.jpg" alt="img" className="kenburns w-100 " style={{ animationDuration: '12000ms' }} />
          </div>
          <div className="slider-content-wrap d-flex align-items-center text-left">
          
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-img w-100">
            <img src="\img\Sildes\Sliders 1-04.jpg" alt="img" className="kenburns" style={{ animationDuration: '12000ms' }} />
          </div>
          <div className="slider-content-wrap d-flex align-items-center text-left">
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="slider-img">
            <img src="\img\Sildes\Sliders 1-05.jpg" alt="img" className="kenburns" style={{ animationDuration: '12000ms' }} />
          </div>
          <div className="slider-content-wrap d-flex align-items-center text-left">
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <div className="slider-img">
            <img src="/img/Sliders 1-01.jpg" alt="img" className="kenburns" style={{ animationDuration: '12000ms' }} />
          </div>
          <div className="slider-content-wrap d-flex align-items-center text-left">
           
            
          </div>
        </SwiperSlide>
      </Swiper>
     
    </div>
  );
};

export default SliderSection;
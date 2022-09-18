
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";


const Swiperr = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        // mousewheel={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}

        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="card">
          <img src={require('./One.png')} alt="" />
          <div className="start">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <p>I am using this app, it's really helpful to improve your English and correct your errors same time. Recommended to everyone who is interested to improve their English, thanks</p>
          <h4>Name</h4>
          <span>Title</span>
        </SwiperSlide>

        <SwiperSlide className="card">
          <img src={require('./One.png')} alt="" />
          <div className="start">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <p>I am using this app, it's really helpful to improve your English and correct your errors same time. Recommended to everyone who is interested to improve their English, thanks</p>
          <h4>Name</h4>
          <span>Title</span>
        </SwiperSlide>

        <SwiperSlide className="card">
          <img src={require('./One.png')} alt="" />
          <div className="start">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <p>I am using this app, it's really helpful to improve your English and correct your errors same time. Recommended to everyone who is interested to improve their English, thanks</p>
          <h4>Name</h4>
          <span>Title</span>
        </SwiperSlide>

        <SwiperSlide className="card">
          <img src={require('./One.png')} alt="" />
          <div className="start">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <p>I am using this app, it's really helpful to improve your English and correct your errors same time. Recommended to everyone who is interested to improve their English, thanks</p>
          <h4>Name</h4>
          <span>Title</span>
        </SwiperSlide>

        <SwiperSlide className="card">
          <img src={require('./One.png')} alt="" />
          <div className="start">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <p>I am using this app, it's really helpful to improve your English and correct your errors same time. Recommended to everyone who is interested to improve their English, thanks</p>
          <h4>Name</h4>
          <span>Title</span>
        </SwiperSlide>

        <SwiperSlide className="card">
          <img src={require('./One.png')} alt="" />
          <div className="start">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <p>I am using this app, it's really helpful to improve your English and correct your errors same time. Recommended to everyone who is interested to improve their English, thanks</p>
          <h4>Name</h4>
          <span>Title</span>
        </SwiperSlide>

        <SwiperSlide className="card">
          <img src={require('./One.png')} alt="" />
          <div className="start">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <p>I am using this app, it's really helpful to improve your English and correct your errors same time. Recommended to everyone who is interested to improve their English, thanks</p>
          <h4>Name</h4>
          <span>Title</span>
        </SwiperSlide>

        <SwiperSlide className="card">
          <img src={require('./One.png')} alt="" />
          <div className="start">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <p>I am using this app, it's really helpful to improve your English and correct your errors same time. Recommended to everyone who is interested to improve their English, thanks</p>
          <h4>Name</h4>
          <span>8</span>
        </SwiperSlide>




        
      </Swiper>
    </>
  );
}

export default Swiperr



import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <i class="fa-solid fa-less-than" style={{ color: "white", fontSize: "20px" }}></i>
    </div>
  );
};

const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <i class="fa-solid fa-greater-than" style={{ color: "white", fontSize: "20px" }}></i>
    </div>
  );
};


const Carousel = () => {

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow :<PreviousBtn />,
    nextArrow: <NextBtn />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div style={{ margin: "30px" }} className="carousel">
      <Slider {...settings} >
          <div className="card">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consectetur molestiae reprehenderit commodi sapiente fuga vero amet voluptatum autem praesentium. Voluptas natus consequuntur odio libero illum veritatis labore nam mollitia.</p>
          </div>
          <div className="card">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consectetur molestiae reprehenderit commodi sapiente fuga vero amet voluptatum autem praesentium. Voluptas natus consequuntur odio libero illum veritatis labore nam mollitia.</p>
          </div>
          <div className="card">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consectetur molestiae reprehenderit commodi sapiente fuga vero amet voluptatum autem praesentium. Voluptas natus consequuntur odio libero illum veritatis labore nam mollitia.</p>
          </div>
          <div className="card">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consectetur molestiae reprehenderit commodi sapiente fuga vero amet voluptatum autem praesentium. Voluptas natus consequuntur odio libero illum veritatis labore nam mollitia.</p>
          </div>
          <div className="card">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consectetur molestiae reprehenderit commodi sapiente fuga vero amet voluptatum autem praesentium. Voluptas natus consequuntur odio libero illum veritatis labore nam mollitia.</p>
          </div>
          <div className="card">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consectetur molestiae reprehenderit commodi sapiente fuga vero amet voluptatum autem praesentium. Voluptas natus consequuntur odio libero illum veritatis labore nam mollitia.</p>
          </div>
       

      </Slider>
    </div>
  );
};

export default Carousel;
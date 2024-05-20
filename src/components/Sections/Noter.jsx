import texts from "../../sections.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomPrevArrow = ({ onClick }) => (
  <button className="slick-prev" onClick={onClick}>
    Previous
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button className="slick-next" onClick={onClick}>
    Next
  </button>
);

function Noter() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1.7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Tiempo en milisegundos entre cada transición
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <section>
      <div className="flex flex-col mb-7">
        <h1 className="mx-auto text-5xl font-bold mb-10">Check our Work</h1>
        <p className="mx-auto text-center" style={{ maidth: "450px" }}>
          Take a look at some of our recent projects to see how we{"'"}ve helped
          businesses like yours succeed online.
        </p>
      </div>
      <Slider {...settings}>
        <div className=" p-5 rounded ">
          <img
            src="https://res.cloudinary.com/db60chvpz/image/upload/v1715832407/FasterUI/syk6s3jvnccmdpohttob.png"
            alt="img1"
            className="border-8 border-white rounded-lg"
            style={{ borderWidth: "20px" }}
          />
        </div>
        <div className=" p-5 rounded ">
          <img
            src="https://res.cloudinary.com/db60chvpz/image/upload/v1715832406/FasterUI/fix1egvlr4hglsck8fnv.png"
            alt="img2"
            className="border-8 border-white rounded-lg"
            style={{ borderWidth: "20px" }}
          />
        </div>
        <div className=" p-5 rounded ">
          <img
            src="https://res.cloudinary.com/db60chvpz/image/upload/v1715832406/FasterUI/gflzzw74xwbxtofwqdfk.png"
            alt="img3"
            className="border-8 border-white rounded-lg"
            style={{ borderWidth: "20px" }}
          />
        </div>
      </Slider>
    </section>
  );
}
export default Noter;

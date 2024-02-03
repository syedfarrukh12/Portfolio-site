import Slider from "react-slick";
import SkillCard from "./SkillCard";

const SkillsSlider = ({ skills }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {skills?.map((item) => (
        <SkillCard
          key={item.name}
          name={item.name}
          component={item.component}
        />
      ))}
    </Slider>
  );
};

export default SkillsSlider;

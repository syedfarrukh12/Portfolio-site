import { useState, useEffect } from "react";
import workwise1 from "../assets/workwise/ww1.png";
import workwise4 from "../assets/workwise/ww4.png";
import workwise6 from "../assets/workwise/ww6.png";
import workwise7 from "../assets/workwise/ww7.png";
import Footer from "../components/Footer";

const Workwise = () => {
  const width = window.screen.width;
  const [blurValue, setBlurValue] = useState(5);
  const [headingSize, setHeadingSize] = useState(8); // Adjusted base font size
  const [textSize, setTextSize] = useState(4); // Adjusted base font size

  const [isHeadingVisible, setIsHeadingVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newBlurValue =
        width < 768
          ? Math.max(0, 5 - (scrollPosition - 100) * 0.02)
          : Math.max(0, 5 - (scrollPosition - 1000) * 0.02);
      const newTextSize =
        width < 768
          ? Math.max(0, 4 + (scrollPosition - 500) * 0.01)
          : Math.max(0, 4 + (scrollPosition - 1200) * 0.01);
      const newHeadingSize = Math.max(0, 8 + (scrollPosition + 100) * 0.01);
      const newIsHeadingVisible = newHeadingSize > 0;

      // Set the state values
      setBlurValue(newBlurValue);
      setTextSize(newTextSize);
      setHeadingSize(newHeadingSize);
      setIsHeadingVisible(newIsHeadingVisible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-gray-800 w-full text-white overflow-hidden">
      <div
        className={`flex items-center justify-center h-[85vh] flex-col top-1/4 ${
          isHeadingVisible ? "" : "hidden"
        }`}
      >
        <div
          className="text-2xl md:text-4xl lg:text-6xl"
          style={{ fontSize: `${headingSize}vw` }}
        >
          WorkWise
        </div>
        <div className="text-base md:text-lg lg:text-xl">
          Modern way to manage work
        </div>
        <div className="text-base text-yellow-500 mt-10">coming soon! </div>
      </div>

      <div className="p-3 relative flex items-center justify-center mt-[20vh] md:mt-[85vh]">
        <img
          className="absolute w-full opacity-50"
          style={{ filter: `blur(${blurValue}px)` }}
          src={workwise1}
          alt=""
        />
        <div
          className="absolute text-base md:text-lg lg:text-2xl"
          style={{ fontSize: `${textSize}vw` }}
        >
          Impressive UI
        </div>
      </div>

      <div className="p-3 space-y-5 lg:space-x-16 lg:flex lg:items-center lg:justify-around mt-[20vh] sm:mt-[40vh] lg:mt-[60vh]">
        <img className="w-full lg:w-1/2 rounded-xl" src={workwise4} alt="" />
        <div className="flex flex-col space-y-5">
          <div className="text-lg md:text-xl lg:text-2xl font-bold">
            Manage Teams
          </div>
          <div className="text-base lg:text-lg">
            Empower your project management experience with dynamic team
            management! Seamlessly create sub-teams within projects, assign
            features to specific teams, and foster enhanced collaboration with
            dedicated groups. Elevate your project organization and achieve peak
            efficiency effortlessly.
          </div>
        </div>
      </div>

      <div className="p-3 space-y-5 lg:space-x-16 lg:flex lg:items-center lg:justify-around">
        <div className="flex flex-col space-y-5">
          <div className="text-lg md:text-xl lg:text-2xl font-bold">
            Ticket Management and Discussions
          </div>
          <div className="text-base lg:text-lg">
            Enhance collaboration and streamline communication with Workwise!
            Effortlessly manage tickets and comments to keep your projects on
            track, ensuring seamless teamwork and efficient problem-solving.
          </div>
        </div>
        <img className="w-full lg:w-1/2 rounded-xl" src={workwise6} alt="" />
      </div>

      <div className="p-3 relative flex items-center flex-col md:flex-row justify-between mt-[20vh] md:my-[30vh]">
        <div className="flex items-center justify-center">
          <img
            className="absolute w-full rounded-xl top-5 md:w-1/2 md:left-0 md:top-0"
            src={workwise1}
            alt=""
          />
          <img
            className="absolute w-full rounded-xl md:w-1/2 md:left-[10%]"
            src={workwise7}
            alt=""
          />
        </div>

        <div className="flex flex-col w-full md:w-1/3 space-y-5 mt-96 md:mt-0">
          <div className="text-lg md:text-xl lg:text-2xl font-bold">
            Available in both board and list view
          </div>
          <div className="text-base lg:text-lg">
            Revolutionize your project management experience with our innovative
            board and card views! Seamlessly manage your tasks and tickets using
            an intuitive drag-and-drop interface. Effortlessly switch between
            board and card views to tailor your workflow to perfection. Elevate
            your project organization with flexibility and efficiency – because
            managing your projects should be as dynamic as your team's
            creativity. Explore the power of agile project management like never
            before!
          </div>
        </div>
      </div>
      <div></div>
      <Footer />
    </div>
  );
};

export default Workwise;

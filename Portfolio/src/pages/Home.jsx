import Banner from "../components/Banner";
import Footer from "../components/Footer";
import SkillsSlider from "../components/SkillSlider";
import { skills } from "../utils/skillObjects";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { shuffleArray } from "../utils/utils";
import Projects from "./Projects";
import { projectsList } from "../utils/projects";
import WorkwiseComp from "../components/WorkwiseComp";
import JobCard from "../components/JobCard";
import { experiences } from "../utils/experience";
import Certification from "../components/Certification";
import Contact from "../components/Contact";

const Home = () => {
  const randomSkills = shuffleArray(skills);
  return (
    <>
      <Banner />

      <div className="transition-all duration-500 ease-in-out bg-gray-950 p-10 flex justify-around items-center space-y-10 md:space-y-0 xl:px-96 flex-col md:flex-row text-[#f9f9f9]">
        <div className="text-center">
          <h1 className=" text-5xl font-extrabold mb-5">3+</h1>
          <h1 className=" text-2xl">Years Experience</h1>
        </div>
        <div className="text-center">
          <h1 className=" text-5xl font-extrabold mb-5">6+</h1>
          <h1 className=" text-2xl">Completed Projects</h1>
        </div>
        <div className="text-center">
          <h1 className=" text-5xl font-extrabold mb-5">1</h1>
          <h1 className=" text-2xl">Personal Project</h1>
        </div>
      </div>

      {/* <div className="transition-all duration-500 ease-in-out bg-gradient-to-t from-gray-800/90 to-gray-800/95 p-10">
        <h1 className="text-center text-[#f9f9f9] text-3xl mb-5">
          Frameworks and Libraries
        </h1>
        <div className="grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 ">
          {shuffleArray(frameworks).map((item) => (
            <SkillCard
              key={item.name}
              name={item.name}
              component={item.component}
            />
          ))}
        </div>
      </div> */}

      <div className="transition-all duration-500 ease-in-out bg-gradient-to-t from-gray-800/85 to-gray-800/90 p-10">
        <h1 className="text-center text-[#f9f9f9] text-3xl mb-5">Skillset</h1>
        <SkillsSlider skills={randomSkills} />
      </div>

      {/* <div className="transition-all duration-500 ease-in-out bg-gradient-to-t from-gray-800/80 to-gray-800/85 p-10">
        <h1 className="text-center text-[#f9f9f9] text-3xl mb-5">Languages</h1>
        <div className="grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 ">
          {shuffleArray(Languages).map((item) => (
            <SkillCard
              key={item.name}
              name={item.name}
              component={item.component}
            />
          ))}
        </div>
      </div> */}

      <div className="transition-all duration-500 ease-in-out bg-gradient-to-t from-gray-800/80 to-gray-800/85 p-10">
        <h1 className="text-center text-[#f9f9f9] text-3xl mb-5">Projects</h1>
        <Projects projects={projectsList} />
      </div>

      <div className="transition-all duration-500 ease-in-out bg-[#182536] py-5 lg:p-10">
        <WorkwiseComp />
      </div>

      <div className="transition-all duration-500 ease-in-out bg-gradient-to-t from-gray-800/85 to-gray-800/75 p-10">
        <h1 className="text-center text-[#f9f9f9] text-3xl mb-5">
          Work Experience
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {experiences.map((experience) => (
            <JobCard key={experience.title} experience={experience} />
          ))}
        </div>
      </div>

      <div className="transition-all duration-500 ease-in-out bg-gradient-to-t from-gray-800/95 to-gray-800/85 p-10">
        <h1 className="text-center text-[#f9f9f9] text-3xl mb-5">
          Certifications and Achievements
        </h1>
        <Certification />
      </div>

      <div className="transition-all duration-500 ease-in-out bg-gradient-to-t from-gray-900 to-gray-800/95 p-10">
        <h1 className="text-center text-[#f9f9f9] text-3xl mb-5">
          Let&apos;s connect
        </h1>
        <div className="flex flex-col justify-around lg:flex-row">
          <Contact />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;

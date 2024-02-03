import profileimg from "../assets/pic4.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Banner() {
  return (
    <div className="transition-all duration-500 ease-in-out bg-gradient-to-t from-gray-800/95 to-gray-800 p-10">
      <div className="flex flex-col-reverse sm:flex-row lg:justify-around justify-center items-center h-[90vh] p-10 w-full  text-[#f9f9f9]">
        <div className="flex items-center md:items-start justify-center flex-col space-y-10 ">
          <div className="space-y-3">
            <div className="text-3xl lg:text-6xl font-extrabold">
              <span className="text-yellow-500">Hey!</span> I am Farrukh Gilani
            </div>
            <div className="text-lg lg:text-3xl">
              Full stack software Engineer
            </div>
          </div>
          <div className="flex items-center justify-center space-y-2 lg:space-y-0 lg:space-x-2 lg:flex-row flex-col">
            <a
              href="https://www.linkedin.com/in/farrukhgilani/"
              className="bg-gray-600 rounded-full p-5 hover:bg-gray-700"
            >
              Visit my LinkedIn
              <LinkedInIcon className="ml-3" />
            </a>
            <a
              href="https://github.com/syedfarrukh12"
              className="bg-gray-600 rounded-full p-5 hover:bg-gray-700 flex items-center justify-center"
            >
              Visit my GitHub
              <GitHubIcon className="ml-3" />
            </a>
          </div>
        </div>
        <div className="mb-10 md:mb-0 lg:flex items-start justify-center flex-col">
          <img
            className="rounded-full w-[500px]"
            src={profileimg}
            alt="profile_pic"
          />
        </div>
      </div>
    </div>
  );
}

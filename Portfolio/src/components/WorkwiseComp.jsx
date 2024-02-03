import GitHubIcon from "@mui/icons-material/GitHub";
import workwise1 from "../assets/workwise/ww1.png";
import workwise2 from "../assets/workwise/ww2.png";
import workwise3 from "../assets/workwise/ww3.png";
import workwise4 from "../assets/workwise/ww4.png";
import workwise5 from "../assets/workwise/ww5.png";
import workwise6 from "../assets/workwise/ww6.png";

export default function WorkwiseComp() {
  const imgArray = [
    workwise1,
    workwise2,
    workwise6,
    workwise3,
    workwise4,
    workwise5,
  ];
  return (
    <div className="flex flex-col lg:flex-row w-full">
      <div className="w-full md:grid md:grid-cols-2 xl:grid-cols-3 gap-4 hidden ">
        {imgArray.map((item, index) => (
          <img
            key={index}
            src={item}
            className="rounded-lg"
            alt="workwise snap"
          />
        ))}
      </div>
      <div className="w-full flex flex-row max-w-full md:hidden mb-5">
        <img src={workwise1} className="rounded-lg" alt="workwise snap" />
      </div>
      <div className="w-full flex items-center flex-col justify-center">
        <h1 className="text-center text-[#f9f9f9] text-3xl mb-5">WorkWise</h1>
        <div className="text-[#f9f9f9] mb-5 lg:w-[60%] mx-5 lg:mx-0">
          Workwise is an open source Project management tool with mobile
          friendly user interface and an exceptional user experience. Now you
          can manage your tasks on your handheld device on the go. It comes with
          both List and Board view.
          <p className="text-[#f9f9f9] text-xl mb-5 w-1/2 font-bold mt-3">
            Technologies:
          </p>
          NodeJs, ExpressJs, ReactJs, MongoDB, ReduxJS, Tailwind Css
          <div className="mt-10">
            <a
              href="https://github.com/syedfarrukh12/Workwise"
              className="rounded-full p-3 bg-[#a5b9c9] text-black font-semibold hover:bg-[#DDE6ED]"
            >
              Github Repository
              <GitHubIcon className="ml-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

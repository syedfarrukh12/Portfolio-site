import microsoft from "../assets/microsoft.png";
import deeplearning from "../assets/deeplearning.png";

export default function Certification() {
  return (
    <>
      <div className="flex flex-col lg:flex-row w-full text-[#f9f9f9]">
        <div className="grid grid-cols-1 mb-5">
          <img src={microsoft} className="rounded-lg " alt="workwise snap" />
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className=" mb-5 text-xl lg:text-2xl">
            Microsoft Technology Associate
          </h1>
          <div className=" mb-5 lg:mx-0 lg:text-xl text-base">
            <ul className="list-disc">
              <li>Microsoft Certified Software Developer</li>
              <li>MTA 98-361 Certification</li>
              <li>Date of Achievement: December 20, 2020</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row w-full text-[#f9f9f9]">
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className=" mb-5 text-xl lg:text-2xl">
            Deep learning and AI using Tensorflow
          </h1>
          <div className=" mb-5 lg:mx-0 lg:text-xl text-base">
            <ul className="list-disc">
              <li>Deep learning using tensorflow, Keras</li>
              <li>Completed with 98.5% Grades</li>
              <li>Total Time: 17 Hrs</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 mb-5">
          <img src={deeplearning} className="rounded-lg " alt="workwise snap" />
        </div>
      </div>
    </>
  );
}

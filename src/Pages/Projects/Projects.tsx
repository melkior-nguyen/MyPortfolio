import PJIMG from "../../assets/Projects/Project4/pj4_1.jpg";
import PJIMG2 from "../../assets/Projects/Project1/pj1_1.jpg";
import PJIMG3 from "../../assets/Projects/Project2/pj2_1.jpg";
import PJIMG4 from "../../assets/Projects/Project3/pj3_1.jpg";
import AppButton from "../../components/AppButton/AppButton";

const Projects = () => {
  return (
    <>
      {/* Project Info */}
      <div className="flex h-full flex-[1] flex-col gap-3  ">
        <div className="flex flex-[1] flex-col ">
          <span className=" text-9xl">01</span>
          <span className="text-5xl">Front-End Project</span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            magnam ex! Perferendis voluptate consectetur soluta, assumenda animi
            error veritatis sed blanditiis iure est, delectus ipsam, nemo
            tenetur? Quas, eaque repellat.
          </p>
          <div>
            <span>React js</span>,<span>Tailwind Css</span>
          </div>
          <div className="flex gap-3">
            <AppButton label="Demo" handleClick={() => {}} />
            <AppButton label="Code" handleClick={() => {}} />
          </div>
        </div>
        <div className="flex h-8 gap-3"></div>
      </div>
      {/* Project Slide */}
      <div className="flex h-full flex-[1] flex-col gap-3 ">
        <div className="flex-[1]">
          <div className="h-full bg-red-500"></div>
        </div>
        <div className="flex justify-center gap-3">
          <AppButton label="prev" handleClick={() => {}} />
          <AppButton label="next" handleClick={() => {}} />
        </div>
      </div>
    </>
  );
};

export default Projects;

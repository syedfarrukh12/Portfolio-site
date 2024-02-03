import "../App.css";
export default function Project({ project }) {
  return (
    <div className="relative lg:p-4 xl:p-10  w-full text-[#f9f9f9]">
      <div className="rounded-lg shadow-2xl overflow-hidden relative group box_industries">
        <img
          src={project.image}
          alt={project.title}
          className="h-96 w-full object-cover rounded-lg shadow-2xl transform transition-transform  mx-auto my-auto"
        />

        <div className="font-bold text-xl p-5">{project.title}</div>
        <div className="content">
          <div className="font-bold text-xl pt-5">{project.title}</div>
          <div className="text-base p-5">{project.description}</div>
          <div className="font-bold">Technologies</div>
          {project.technologies.map((item) => (
            <span key={item}>{item}, </span>
          ))}
        </div>
      </div>
    </div>
  );
}

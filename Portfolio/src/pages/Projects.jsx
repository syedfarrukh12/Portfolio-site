import Project from "../components/Project";

const Projects = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
      {projects.map((item) => (
        <Project key={item.id} project={item} />
      ))}
    </div>
  );
};
export default Projects;

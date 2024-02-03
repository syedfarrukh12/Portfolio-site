const SkillCard = ({ name, component: Component }) => {
  return (
    <div className="w-32 mx-auto lg:mx-5 bg-[#f9f9f7] shadow-2xl rounded-lg overflow-hidden">
      <div className="px-4 py-2">
        <Component />
      </div>
      <div className="flex justify-center items-center h-8 bg-gray-700">
        <h2 className="text-[#f9f9f9] text-base">{name}</h2>
      </div>
    </div>
  );
};

export default SkillCard;

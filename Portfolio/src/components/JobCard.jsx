export default function JobCard({ experience }) {
  return (
    <div className="max-w-md mx-auto bg-gray-900 text-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
      <img
        className="w-full h-40 object-cover object-center bg-white"
        src={experience.img}
        alt="Company Logo"
      />

      <div className="p-6">
        <h2 className="font-bold text-xl mb-2">{experience.title}</h2>
        <p className="text-sm">{experience.company}</p>
        <div className="mt-4">
          <ul>
            {experience.desc.map((item, index) => (
              <li key={index} className="list-disc">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-white px-6 py-4 flex items-center justify-between">
        <span className="text-gray-600 text-sm font-semibold">
          {experience.startDate} - {experience.endDate}
        </span>
      </div>
    </div>
  );
}

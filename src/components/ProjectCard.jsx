function ProjectCard({ title, domain, image, link }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-500">{domain}</p>
        <a href={link} className="text-indigo-600 mt-2 block">View Demo</a>
      </div>
    </div>
  );
}
export default ProjectCard;

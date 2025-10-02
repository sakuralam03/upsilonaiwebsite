function ServiceCard({ title, description, icon }) {
  return (
    <div className="bg-white shadow-md p-6 rounded-lg text-center">
      <div className="text-3xl mb-2">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
export default ServiceCard;

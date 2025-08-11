import { FaLaptopCode, FaMobileAlt, FaBullhorn, FaTools, FaServer, FaPaintBrush } from "react-icons/fa";

export default function ServicesSection() {
  const services = [
    {
      title: "Website Development",
      icon: <FaLaptopCode size={40} />,
      image: "https://via.placeholder.com/150",
      bg: "bg-green-500/20 hover:bg-green-500/40"
    },
    {
      title: "App Development",
      icon: <FaMobileAlt size={40} />,
      image: "https://via.placeholder.com/150",
      bg: "bg-cyan-500/20 hover:bg-cyan-500/40"
    },
    {
      title: "Digital Marketing",
      icon: <FaBullhorn size={40} />,
      image: "https://via.placeholder.com/150",
      bg: "bg-pink-500/20 hover:bg-pink-500/40"
    },
    {
      title: "Website Maintenance",
      icon: <FaTools size={40} />,
      image: "https://via.placeholder.com/150",
      bg: "bg-yellow-500/20 hover:bg-yellow-500/40"
    },
    {
      title: "Logo Design",
      icon: <FaPaintBrush size={40} />,
      image: "https://via.placeholder.com/150",
      bg: "bg-purple-500/20 hover:bg-purple-500/40"
    },
    {
      title: "Mern Stack Development",
      icon: <FaServer size={40} />,
      image: "https://via.placeholder.com/150",
      bg: "bg-purple-500/20 hover:bg-purple-500/40"
    },
  ];

  return (
    <section className="bg-[#0a0a0a] py-12 rounded-sm">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-green-500 text-sm mb-2">All Services</p>
        <h2 className="text-4xl font-bold text-white mb-6">Our Services</h2>
        <p className="text-gray-400 max-w-2xl mb-10">
          Comprehensive Website Services to Ignite Your Online Success. Empower your business
          with powerful online services from our website.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-lg p-5 transition-all duration-300 cursor-pointer ${service.bg}`}
            >
              <div className="flex justify-between items-start">
                <div className="text-green-400">{service.icon}</div>
                <div className="text-green-400 text-xl">↗</div>
              </div>
              <h3 className="text-white font-semibold mt-4 mb-2">{service.title}</h3>
              <img
                src={service.image}
                alt={service.title}
                className="rounded-md mt-2"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

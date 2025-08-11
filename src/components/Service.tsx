import { FaLaptopCode, FaMobileAlt, FaBullhorn, FaTools, FaServer, FaPaintBrush } from "react-icons/fa";
import image1 from "../assets/top-view-unrecognizable-hacker-performing-cyberattack-night.jpg";
export default function ServicesSection() {
  const services = [
    {
      title: "Website Development",
      icon: <FaLaptopCode size={40} />,
      image: image1,
      bg: "bg-green-600 hover:bg-green-400"
    },
    {
      title: "App Development",
      icon: <FaMobileAlt size={40} />,
     image: image1,
      bg: "bg-cyan-600 hover:bg-cyan-400"
    },
    {
      title: "Digital Marketing",
      icon: <FaBullhorn size={40} />,
      image: image1,
      bg: "bg-pink-600 hover:bg-pink-400"
    },
    {
      title: "Website Maintenance",
      icon: <FaTools size={40} />,
      image: image1,
      bg: "bg-yellow-600 hover:bg-yellow-400"
    },
    {
      title: "Logo Design",
      icon: <FaPaintBrush size={40} />,
      image: image1,
      bg: "bg-purple-600 hover:bg-purple-400"
    },
    {
      title: "Mern Stack Development",
      icon: <FaServer size={40} />,
      image: image1,
      bg: "bg-blue-600 hover:bg-blue-400"
    },
  ];

  return (
    <section className="bg-dark py-12 rounded-sm">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-green-500 text-sm mb-2">All Services</p>
        <h2 className="text-4xl font-bold text-black mb-6">Our Services</h2>
        <p className="text-black max-w-2xl mb-10 mx-auto">
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
                <div className="text-green-800">{service.icon}</div>
                <div className="text-green-700 text-xl">↗</div>
              </div>
              <h3 className="text-white font-semibold mt-4 mb-2">{service.title} </h3>
              <img
                src={service.image}
                alt={service.title}
                className="mt-2 w-full h-32 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

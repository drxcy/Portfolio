import { CheckCircle } from "lucide-react";
import { Button } from "./ui/button"; 

const WhyChooseUs = () => {
  const features = [
    {
      icon: <CheckCircle className="w-8 h-8 text-purple-600" />,
      title: "Innovation & Creativity",
      description: "Learn from top industry professionals who bring years of real-world experience to the classroom, providing you with the latest tools, techniques, and insights needed to excel in your field."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-purple-600" />,
      title: "Expert Team",
      description: "Earn certifications that are highly regarded by employers, helping you to enhance your resume, gain industry recognition, and open doors to new career opportunities."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-purple-600" />,
      title: "Customer-Centric Approach",
      description: "web services offers over 100 courses that cover essential skills in today's tech industry. Whether you're a beginner or an experienced professional, our courses in web development, data science, and cybersecurity provide practical, hands-on learning to help you apply your skills immediately & competitive."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-purple-600" />,
      title: "Quality & Precision",
      description: "At web services, we understand the importance of balancing learning with a busy lifestyle. That's why our courses are available on-demand, allowing you to learn at your own pace, anytime and anywhere. Whether you're a working professional or a student, you can customize your schedule to fit your needs."
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">WHY CHOOSE US</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why <span className="text-purple-600">Web Services</span> is The Right Choice for You
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
            Start Free Trial
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const cardData = [
  {
    title: "Interactive Learning",
    description:
      "Hands-on lessons, real-time feedback, and engaging quizzes make learning Java fun and effective. Whether you're practicing syntax or exploring concepts, our interactive modules help you master Java with ease.",
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    title: "Beginner Friendly",
    description:
      "No prior coding experience? No worries! We start from the absolute basics and guide you step-by-step. With visuals and easy explanations, anyone can start their Java journey with Java Buddy.",
    img: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
  },
  {
    title: "Expert-Curated Content",
    description:
      "Our lessons are crafted by experienced Java professionals and carefully reviewed by educators to ensure clarity, accuracy, and real-world relevance.",
    img: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
  },
  {
    title: "Apply as You Learn",
    description:
      "Reinforce your understanding with real-life coding exercises that connect theory with practical use. Learn Java by doing, not just watching.",
    img: "https://cdn-icons-png.flaticon.com/512/1828/1828911.png",
  },
];

const teamData = [
  {
    name: "Bijeta",
    role: "Frontend Developer",
    img: "https://cdn-icons-png.flaticon.com/512/4140/4140047.png",
  },
  {
    name: "Sailaja Das",
    role: "UI/UX Designer",
    img: "https://cdn-icons-png.flaticon.com/512/4140/4140051.png",
  },
  {
    name: "Sudhansu",
    role: "Content Creator",
    img: "https://cdn-icons-png.flaticon.com/512/4140/4140039.png",
  },
  {
    name: "Rupesh",
    role: "Java Expert",
    img: "https://cdn-icons-png.flaticon.com/512/4140/4140061.png",
  },
];

const About = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prev) => (prev + 1) % cardData.length);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-x-hidden min-h-screen bg-gradient-to-br from-[#1A1A2E] via-[#0F3460] to-[#16213E] text-white py-20 px-6 md:px-20">
      {/* Section: Why Java Buddy */}
      <h2 className="text-5xl font-bold text-center mb-12 text-[#00ADB5]">Why Choose Java Buddy?</h2>

      {/* Concept Cards */}
      <div className="space-y-16">
        {cardData.map((card, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <div
              key={idx}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <motion.img
                src={card.img}
                alt={card.title}
                className="w-32 h-32 rounded-xl shadow-2xl"
                initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                animate={visibleIndex >= idx ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7 }}
              />

              <motion.div
                className="bg-[#0F3460]/60 text-white backdrop-blur-md p-6 rounded-xl shadow-lg max-w-xl"
                initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                animate={visibleIndex >= idx ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <h3 className="text-2xl font-semibold mb-2 text-[#00ADB5]">{card.title}</h3>
                <p className="text-gray-300">{card.description}</p>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Team Section */}
      <div className="mt-24">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#00ADB5]">Meet the Java Buddy Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {teamData.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="rounded-xl bg-[#1A1A2E]/70 backdrop-blur-lg shadow-md p-6 text-center transition-all duration-300 hover:shadow-2xl"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-20 h-20 mx-auto rounded-full shadow-md mb-3 transition-transform duration-300 hover:scale-110"
              />
              <h3 className="text-lg font-semibold hover:text-cyan-400 transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-sm text-gray-400">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="mt-24 text-center">
        <h2 className="text-3xl font-bold mb-6 text-[#00ADB5]">Built With the Best</h2>
        <div className="flex justify-center items-center gap-12 flex-wrap">
          {/* React */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 3 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex flex-col items-center cursor-pointer"
          >
            <img
              src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
              alt="React"
              className="w-16 h-16"
            />
            <p className="mt-2 font-medium text-white">React</p>
          </motion.div>

          {/* Tailwind CSS */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: -3 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex flex-col items-center cursor-pointer"
          >
            <img
              src="https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg"
              alt="Tailwind CSS"
              className="w-16 h-16"
            />
            <p className="mt-2 font-medium text-white">Tailwind CSS</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;

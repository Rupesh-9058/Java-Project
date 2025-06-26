
import React, { useState, useEffect } from "react";
import Footer from "../components/footer/Footer";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [topicIndex, setTopicIndex] = useState(0);

  // Java code animation states
  const javaSnippet = [
    "public class HelloWorld {",
    "    public static void main(String[] args) {",
    '        System.out.println("Hello, Java Buddy!👋");',
    "    }",
    "}",
    "o/p:- Hello,Java Buddy!👋",
  ];
  const [displayedCode, setDisplayedCode] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setTopicIndex((prev) => (prev + 1) % 6);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Java code animation effect
  useEffect(() => {
    if (lineIndex < javaSnippet.length) {
      if (charIndex < javaSnippet[lineIndex].length) {
        const timeout = setTimeout(() => {
          setDisplayedCode((prev) => prev + javaSnippet[lineIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 40);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setDisplayedCode((prev) => prev + "\n");
          setLineIndex((prev) => prev + 1);
          setCharIndex(0);
        }, 300);
        return () => clearTimeout(timeout);
      }
    }
  }, [lineIndex, charIndex]);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white font-sans overflow-hidden">
      {/* Background animation */}

      <main className="flex-grow relative z-10">
        {/* Hero Section */}
        <section className="relative px-6 md:px-20 py-32 flex flex-col md:flex-row justify-between items-center">
          <div
            className={`max-w-xl transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-[1.3] mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              <Typewriter
                words={["Master Java the Smart Way"]}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h1>
  
            <p className="text-lg text-gray-300 mb-6 animate-fade-in-up">
              "Java Buddy is your smart Java notes companion-explaining core
              concepts like OOP, Collections, and Exception Handling in a
              simple, visual, and beginner-friendly way. No setup needed-just
              easy, structured notes with animations and real-life examples."
            </p>

            <div className="flex gap-4 animate-fade-in-up">
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/50 animate-bounce">
              <Link to="/dashboard">  Get Started</Link>
              </button>
              {/* <button className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                Learn More
              </button> */}
            </div>
          </div>

          <div
            className={`mt-10 md:mt-0 transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100 rotate-0"
                : "translate-x-full opacity-0 rotate-180"
            }`}
          >
            <div className="relative">
              <img
                src="https://cdn-icons-png.flaticon.com/512/226/226777.png"
                alt="Java Logo"
                className="w-52 h-52 object-contain animate-spin-slow hover:animate-pulse transition-all duration-300 transform hover:scale-110"
              />
              <div className="absolute inset-0 rounded-full border-4 border-green-500 opacity-50 animate-ping"></div>
              <div className="absolute inset-4 rounded-full border-2 border-blue-500 opacity-30 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Java Code Animation Card */}
        <section className="px-6 md:px-20 pb-20 flex justify-center">
          <div className="bg-gray-900 border border-green-500 rounded-xl p-6 w-full max-w-2xl shadow-lg">
            <h2 className="text-xl font-semibold text-green-400 mb-4">
              Java Code
            </h2>
            <div className="bg-black text-green-400 font-mono text-sm md:text-base p-4 rounded-lg overflow-x-auto whitespace-pre-wrap leading-relaxed border-l-4 border-green-500">
              <pre>{displayedCode}</pre>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;

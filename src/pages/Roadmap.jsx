
import React, { useState, useEffect } from 'react';
import {
  ChevronDown, ChevronRight, Code, Database, Cog, Package, Shield, Zap,
  BookOpen, Target, Star
} from 'lucide-react';

const Roadmap = () => {
  const [expandedSections, setExpandedSections] = useState(() => JSON.parse(localStorage.getItem('expandedSections')) || {});
  const [completedItems, setCompletedItems] = useState(() => JSON.parse(localStorage.getItem('completedItems')) || {});
  const [animateItems, setAnimateItems] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);

  const roadmapData = [
    {
      id: 'intro',
      title: 'Java Intro',
      icon: BookOpen,
      color: 'from-indigo-500 to-blue-400',
      description: 'Start your Java journey here',
      items: []
    },
    {
      id: 'setup',
      title: 'Setup & Config',
      icon: Cog,
      color: 'from-fuchsia-500 to-pink-400',
      description: 'Environment setup and JDK installation',
      items: []
    },
    {
      id: 'basics',
      title: 'Java Basics',
      icon: Code,
      color: 'from-yellow-400 to-orange-500',
      description: 'Understand Java fundamentals',
      items: ['Data Type', 'Variables', 'Type Casting', 'Operators', 'Flow Control']
    },
    {
      id: 'oop',
      title: 'OOP Concepts',
      icon: Target,
      color: 'from-teal-500 to-green-400',
      description: 'Master OOP with Java',
      items: [
        'Class', 'Methods', 'Features of Method', 'Inheritance',
        'Method Overloading', 'Method Overriding', 'Modifiers',
        'Constructors', 'Interface', 'Blocks', 'Object Type Casting',
        'Factory Method', 'Singleton Class', 'Data Hiding',
        'Abstraction', 'Encapsulation', 'Polymorphism'
      ]
    },
    {
      id: 'lang',
      title: 'java.lang',
      icon: Package,
      color: 'from-rose-500 to-red-400',
      description: 'Explore java.lang classes',
      items: ['Object', 'String', 'Wrapper Classes', 'Autoboxing']
    },
    {
      id: 'exception',
      title: 'Exception Handling',
      icon: Shield,
      color: 'from-sky-500 to-blue-300',
      description: 'Handle errors and runtime exceptions',
      items: ['Try-Catch', 'Throw vs Throws', 'Custom Exception']
    },
    {
      id: 'collection',
      title: 'Collections',
      icon: Zap,
      color: 'from-lime-500 to-green-500',
      description: 'Master Java collections',
      items: ['List', 'Set', 'Map', 'Queue', 'Iterator']
    }
  ];

  useEffect(() => {
    setAnimateItems(true);
  }, []);

  useEffect(() => {
    localStorage.setItem('completedItems', JSON.stringify(completedItems));
  }, [completedItems]);

  useEffect(() => {
    localStorage.setItem('expandedSections', JSON.stringify(expandedSections));
  }, [expandedSections]);

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const toggleComplete = (itemId) => {
    setCompletedItems((prev) => {
      const updated = { ...prev, [itemId]: !prev[itemId] };

      roadmapData.forEach((section) => {
        if (section.items.length > 0) {
          const allDone = section.items.every((_, i) => updated[`${section.id}-${i}`]);
          if (allDone) {
            updated[section.id] = true;
          } else {
            delete updated[section.id];
          }
        }
      });

      return updated;
    });
  };

  const getCompletionPercentage = () => {
    const total = roadmapData.reduce((sum, section) => sum + Math.max(1, section.items.length || 1), 0);
    const completed = Object.values(completedItems).filter(Boolean).length;
    return Math.round((completed / total) * 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-3 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Java Buddy Roadmap
          </h1>
          <p className="text-lg text-gray-400 mb-4">Track your Java learning progress</p>
          <div className="w-full h-4 bg-gray-700 rounded-full overflow-hidden mb-2">
            <div
              className="h-full bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-1000 ease-out"
              style={{ width: `${getCompletionPercentage()}%` }}
            />
          </div>
          <p className="text-sm text-gray-400">Progress: {getCompletionPercentage()}%</p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 to-blue-500 h-full opacity-20" />

          {roadmapData.map((section, index) => (
            <div
              key={section.id}
              className={`relative mb-12 ${animateItems ? 'animate-fadeIn' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-0">
                <div className={`w-14 h-14 flex items-center justify-center rounded-full shadow-xl border-4 border-white bg-gradient-to-br ${section.color}`}>
                  <section.icon className="text-white w-6 h-6" />
                </div>
              </div>

              <div className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className="w-6/12 px-4">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-xl hover:bg-white/15 transition duration-300 hover:scale-[1.02]">
                    <div
                      onClick={() => toggleComplete(section.id)}
                      className="flex items-center justify-between cursor-pointer mb-2"
                    >
                      <h2 className="text-white font-bold text-xl">{section.title}</h2>
                      <div className="flex items-center space-x-2">
                        {completedItems[section.id] && <Star className="text-yellow-400 fill-yellow-400" />}
                        <div className={`w-5 h-5 rounded-full border-2 ${
                          completedItems[section.id] ? 'bg-green-500 border-green-500' : 'border-gray-400'
                        }`} />
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm">{section.description}</p>

                    {section.items?.length > 0 && (
                      <>
                        <button
                          onClick={() => toggleSection(section.id)}
                          className="flex items-center text-blue-300 mt-3"
                        >
                          {expandedSections[section.id] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                          <span className="ml-1 text-sm">{section.items.length} topics</span>
                        </button>
                        {expandedSections[section.id] && (
                          <ul className="mt-3 space-y-2">
                            {section.items.map((item, idx) => {
                              const itemKey = `${section.id}-${idx}`;
                              return (
                                <li
                                  key={itemKey}
                                  onClick={() => toggleComplete(itemKey)}
                                  className="text-sm text-gray-300 cursor-pointer hover:text-white flex items-center space-x-2"
                                >
                                  <div className={`w-4 h-4 rounded-full border-2 ${
                                    completedItems[itemKey] ? 'bg-green-400 border-green-400' : 'border-gray-500'
                                  }`} />
                                  <span className={completedItems[itemKey] ? 'line-through text-green-400' : ''}>
                                    {item}
                                  </span>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white/5 p-8 rounded-xl border border-white/10">
            <h2 className="text-2xl text-white font-bold mb-2">Done for Today?</h2>
            <p className="text-gray-400 mb-4">Bookmark your progress and come back tomorrow!</p>
            <button
              onClick={() => setShowReviewModal(true)}
              className="bg-gradient-to-r from-green-500 to-blue-500 px-6 py-2 rounded-full text-white font-semibold hover:scale-105 transition"
            >
              Review Progress
            </button>
          </div>
        </div>

        {showReviewModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="bg-slate-300   text-black p-8 rounded-lg w-full max-w-md shadow-2xl relative">
              <h3 className="text-xl font-bold mb-4 text-center">Your Java Learning Summary</h3>

              <div className="space-y-2 max-h-64 overflow-y-auto">
                {roadmapData.map((section) => {
                  const subCount = section.items.length;
                  const subDone = section.items.filter((_, i) => completedItems[`${section.id}-${i}`]).length;
                  const total = subCount > 0 ? subCount : 1;
                  const completed = subDone + (completedItems[section.id] && subCount === 0 ? 1 : 0);
                  return (
                    <div key={section.id} className="flex justify-between items-center text-sm border-b py-1">
                      <span>{section.title}</span>
                      <span className="font-medium">{completed}/{total} done</span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-900 mb-4">
                  Total Progress: <strong>{getCompletionPercentage()}%</strong>
                </p>
                <button
                  onClick={() => setShowReviewModal(false)}
                  className="mt-2 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-900 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Roadmap;

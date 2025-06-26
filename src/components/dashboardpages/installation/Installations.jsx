import React from 'react';

const Installations = () => {
  const installationCards = [
    {
      id: 1,
      title: "Step 1",
      description: "Download and install the JDK (Java Development Kit)",
      process: "How to Download",
      steps: [
        "-> Java Compiler (javac)",
        "-> Java Runtime Environment (JRE)",
        "-> Debuggers and tools to develop Java applications",
        "-> How to Download?",
        "Visit the official JDK page: https://www.oracle.com/java/technologies/javase-downloads.html",
        "Choose the latest LTS version (e.g., Java 17 or Java 21)",
        "Select the installer based on your OS:",
        "... (.exe) for Windows",
        "... (.dmg) for macOS",
        "... (.deb) / (.rpm) or .tar.gz for Linux",
        "Windows: Double-click the .exe and follow the setup wizard.",
        "macOS: Open the .dmg file and follow the prompts.",
        "Linux: Use a terminal:",
        "sudo apt install openjdk-21-jdk (Ubuntu/Debian)",
        "sudo dnf install java-21-openjdk (Fedora/RHEL)"
      ]
    },
    {
      id: 2,
      title: "Step 2",
      description: "Set Up Environment Variables",
      process: "Setup in different OS is a little different",
      information: "On Windows",
      steps: [
        "Press Windows + S and search for 'Environment Variables'",
        "Click 'Edit the system environment variables'",
        "Under 'System Variables', find and click Path → Edit",
        "Click New and add the path to the JDK's bin folder:",
        "C:\\Program Files\\Java\\jdk-21\\bin"
      ]
    },
    {
      id: 3,
      title: "Step 3",
      description: "Write and Run Your First Java Program",
      process: "Create a file named HelloWorld.java",
      steps: [
        "To compile: javac HelloWorld.java",
        "To run: java HelloWorld"
      ]
    },
    {
      id: 4,
      title: "Step 4 (Recommended)",
      description: "Use an IDE for Better Productivity",
      information: "You can write Java code using any text editor, but IDEs provide:",
      steps: [
        "-> Autocomplete",
        "-> Debugging tools",
        "-> GUI design tools",
        "-> Error highlighting"
      ],
      recommendationIDE: [
        "Eclipse: https://www.eclipse.org/downloads/",
        "IntelliJ IDEA: https://www.jetbrains.com/idea/download/",
        "VS Code: https://code.visualstudio.com/"
      ]
    },
    {
      id: 5,
      title: "Step 5",
      description: "Summary",
      steps: [
        "-> Install JDK",
        "-> Set Environment Variables",
        "-> Write and Run Java Programs Manually",
        "-> Switch to an IDE for Real Projects"
      ]
    }
  ];

  return (
    <div className="p-4">
      <h1 className="text-4xl md:text-5xl font-bold text-purple-700 dark:text-purple-300 mb-10">
        The Path Of Installation And Set Up For Java
      </h1>

      <div className="flex flex-col gap-8">
        {installationCards.map((card) => (
          <div key={card.id} className="p-6 border rounded-2xl shadow-md bg-white dark:bg-gray-800">
            <h2 className="text-2xl font-semibold text-purple-600">{card.title}</h2>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{card.description}</p>
            {card.process && (
              <p className="mt-1 font-medium text-indigo-600 dark:text-indigo-300">🛠 {card.process}</p>
            )}
            {card.information && (
              <p className="mt-1 italic text-sm text-gray-500">💡 {card.information}</p>
            )}
            {card.steps && (
              <ul className="mt-4 list-disc pl-6 text-gray-800 dark:text-gray-200">
                {card.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            )}
            {card.recommendationIDE && (
              <div className="mt-4">
                <p className="font-semibold text-purple-500">Recommended IDEs:</p>
                <ul className="list-disc pl-6">
                  {card.recommendationIDE.map((ide, idx) => (
                    <li key={idx} className="text-blue-600 hover:underline">
                      <a href={ide.split(": ")[1]} target="_blank" rel="noopener noreferrer">
                        {ide.split(": ")[0]}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installations;

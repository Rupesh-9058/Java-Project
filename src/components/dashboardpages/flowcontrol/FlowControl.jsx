import React from 'react';

const FlowControl = () => {
  const FlowControlCard = [
    {
      id: 1,
      topic: "Introduction of Control Flow",
      Defination: "The flow of execution in our program is known as control flow of our code.",
      typesOfControlFlow: ["if-else", "switch-case", "for loop", "while loop", "do-while", "break", "continue", "return"]
    },
    {
      id: 2,
      topic: "If-Else Statement",
      definition: "Executes a block of code based on a condition.",
      example: [
        "int age = 18;",
        "if (age >= 18) {",
        "    System.out.println(\"You are an adult.\");",
        "} else {",
        "    System.out.println(\"You are not an adult.\");",
        "}"
      ]
    },
    {
      id: 3,
      topic: "Switch Case",
      definition: "Simplifies long else-if ladders for equality checks.",
      example: [
        "int day = 3;",
        "switch(day) {",
        "    case 1: System.out.println(\"Monday\"); break;",
        "    case 2: System.out.println(\"Tuesday\"); break;",
        "    case 3: System.out.println(\"Wednesday\"); break;",
        "    default: System.out.println(\"Invalid day\");",
        "}"
      ]
    },
    {
      id: 4,
      topic: "For Loop",
      definition: "Used to iterate a block of code a specific number of times.",
      example: [
        "for (int i = 0; i < 5; i++) {",
        "    System.out.println(i);",
        "}"
      ]
    },
    {
      id: 5,
      topic: "While Loop",
      definition: "Executes a block repeatedly as long as a condition is true.",
      example: [
        "int i = 0;",
        "while (i < 5) {",
        "    System.out.println(i);",
        "    i++;",
        "}"
      ]
    },
    {
      id: 6,
      topic: "Do-While Loop",
      definition: "Executes the block at least once before checking the condition.",
      example: [
        "int i = 0;",
        "do {",
        "    System.out.println(i);",
        "    i++;",
        "} while (i < 5);"
      ]
    },
    {
      id: 7,
      topic: "Break Statement",
      definition: "Used to exit a loop or switch block immediately.",
      example: [
        "for (int i = 0; i < 10; i++) {",
        "    if (i == 5) {",
        "        break;",
        "    }",
        "    System.out.println(i);",
        "}"
      ]
    },
    {
      id: 8,
      topic: "Continue Statement",
      definition: "Skips the current iteration and moves to the next iteration of the loop.",
      example: [
        "for (int i = 0; i < 5; i++) {",
        "    if (i == 2) {",
        "        continue;",
        "    }",
        "    System.out.println(i);",
        "}"
      ]
    },
    {
      id: 9,
      topic: "Return Statement",
      definition: "Ends the execution of the current method and optionally returns a value.",
      example: [
        "public int add(int a, int b) {",
        "    return a + b;",
        "}"
      ]
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-indigo-700 mb-8">Flow Control in Java</h1>
      {FlowControlCard && FlowControlCard.length > 0 ? (
        <div className="flex flex-col gap-8">
          {FlowControlCard.map((card) => (
            <div key={card.id} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
              <h2 className="text-2xl font-semibold text-purple-700 dark:text-white mb-3">{card.topic}</h2>
              {card.Defination && <p className="text-gray-800 dark:text-gray-300 mb-4 font-semibold">{card.Defination}</p>}
              {card.definition && <p className="text-gray-800 dark:text-gray-300 mb-4 font-semibold">{card.definition}</p>}
              {card.typesOfControlFlow && (
                <ul className="list-disc list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
                  {card.typesOfControlFlow.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
              {card.example && (
                <div className="bg-gray-900 text-green-200 font-mono p-4 rounded-md overflow-x-auto text-sm">
                  {card.example.map((line, idx) => (
                    <pre key={idx}>{line}</pre>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-red-600 font-semibold">No data available in FlowControlCard. Please check your data import or initialization.</p>
      )}
    </div>
  );
};

export default FlowControl;

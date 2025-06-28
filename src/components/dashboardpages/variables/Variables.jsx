import React from 'react';

const Variables = () => {
  const variableCard = [
    {
      id: 1,
      Topic: "Basic idea about Variable",
      Defination: [
        "Variable is a name or reference to memory allocation where we are going to store our data.",
        "(It is like a container in our kitchen where we store items for efficient use, in programming we call these containers variables.)",
        "Data can be values and objects."
      ],
      Parts: ["There are two parts of a variable:", "-> Declaration", "-> Initialization"],
      Declaration: ["Declaration is mandatory whereas initialization is optional.", "If not initialized, JVM provides default values according to data type."] ,
      Type: ["Categorized based on where we declare the variable:", "1-> Static variable", "2-> Nonstatic variable", "3-> Local variable"],
      Example: ["int age = 25;", "String name = \"Rupesh\";"]
    },
    {
      id: 2,
      Topic: "Static variable",
      Defination: "Variables whose values do not differ from one object to another.",
      about: ["-> Same value for all objects of the class.", "-> Only one copy is created and shared among all objects.", "-> Also called Class Variables."],
      Declaration: ["-> Declared inside the class with 'static' keyword, outside methods or constructors."],
      HowToUse: ["Three ways to access static variables:", "1-> Using class name (recommended)", "2-> Using object reference", "3-> Directly by variable name"],
      storage: "Stored in Method Area (Class Area).",
      MemoryAllocation: ["Allocated once when the class is loaded by JVM."],
      Example: ["static int count = 0;", "System.out.println(ClassName.count);"]
    },
    {
      id: 3,
      Topic: "Nonstatic variable",
      Defination: "Variables whose values differ from one object to another.",
      about: ["-> Every object has a separate copy.", "-> Holds its own data and reference.", "-> Also called Instance Variables."],
      Declaration: ["-> Declared inside the class but outside methods or constructors."] ,
      HowToUse: ["Accessed using object reference only."] ,
      storage: "Stored in Heap Area.",
      MemoryAllocation: ["Memory allocated after object creation inside the object.", "Two non-static variable names cannot be the same."] ,
      Example: ["int rollNumber = 5;", "System.out.println(objectName.rollNumber);"]
    },
    {
      id: 4,
      Topic: "Local variable",
      Defination: "Variables declared inside a method, block, or constructor.",
      about: ["-> Created when the method is called and destroyed after it finishes.", "-> Not accessible outside the method."] ,
      Notes: ["-> Also called temporary variables.", "-> Must be initialized before use.", "-> Stored in Stack area.", "-> JVM does not provide default values."] ,
      storage: "Stored in method's stack area and removed automatically after execution.",
      Example: ["public void show() {", "  int temp = 10;", "  System.out.println(temp);", "}"]
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-purple-700 mb-8">Variables and their Types</h1>
      <div className="flex flex-col gap-8">
        {variableCard.map((card) => (
          <div key={card.id} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
            <h2 className="text-2xl font-semibold text-purple-700 dark:text-white mb-3">{card.Topic}</h2>
            {card.Defination && (Array.isArray(card.Defination) ? (<ul className="list-disc list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">{card.Defination.map((line, idx) => (<li key={idx}>{line}</li>))}</ul>) : (<p className="text-gray-800 dark:text-gray-300 mb-4 font-semibold">{card.Defination}</p>))}
            {Object.entries(card).map(([key, value]) => {
              if (key !== 'id' && key !== 'Topic' && key !== 'Defination') {
                return (
                  <div key={key} className="mb-4">
                    <h3 className="text-xl font-semibold text-purple-600 mb-2">{key.replace(/_/g, ' ')}</h3>
                    {key === 'Example' ? (
                      <div className="bg-gray-900 text-green-200 font-mono p-4 rounded-md overflow-x-auto text-sm">
                        {value.map((item, idx) => (<pre key={idx}>{item}</pre>))}
                      </div>
                    ) : Array.isArray(value) ? (
                      <ul className="space-y-1 list-disc list-inside font-semibold text-gray-700 dark:text-gray-300">{value.map((item, idx) => (<li key={idx}>{item}</li>))}</ul>
                    ) : (
                      <p className="text-gray-700 dark:text-gray-300 font-semibold">{value}</p>
                    )}
                  </div>
                );
              }
              return null;
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Variables;

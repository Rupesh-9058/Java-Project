import React from 'react';

const DataType = () => {
  const DataTypeCard = [
    {
      id: 0,
      title: "Introduction to Data Types",
      definition: "Datatypes specify the different sizes and values that can be stored in variables in Java. There are two types of data types: Primitive (boolean, char, byte, short, int, long, float, double) and Non-primitive (Classes, Interfaces, Arrays). Understanding data types helps in efficient memory management and ensures type safety in Java programs.",
      examples: []
    },
    {
      id: 1,
      title: "Boolean Data Type",
      definition: "Used to store only two possible values: true and false. Typically used for simple flags.",
      examples: [
        "boolean isJavaFun = true;",
        "boolean isFishTasty = false;"
      ]
    },
    {
      id: 2,
      title: "Byte Data Type",
      definition: "8-bit signed two's complement integer, range from -128 to 127. Saves memory in large arrays.",
      examples: [
        "byte a = 10;",
        "byte b = -20;"
      ]
    },
    {
      id: 3,
      title: "Short Data Type",
      definition: "16-bit signed two's complement integer, range from -32,768 to 32,767.",
      examples: [
        "short s = 10000;",
        "short r = -5000;"
      ]
    },
    {
      id: 4,
      title: "Int Data Type",
      definition: "32-bit signed two's complement integer, commonly used for integral values unless memory constraints exist.",
      examples: [
        "int salary = 50000;",
        "int bonus = 10000;"
      ]
    },
    {
      id: 5,
      title: "Long Data Type",
      definition: "64-bit signed two's complement integer, used when a wider range than int is needed.",
      examples: [
        "long distanceToMoon = 384400000L;"
      ]
    },
    {
      id: 6,
      title: "Float Data Type",
      definition: "Single-precision 32-bit IEEE 754 floating point, used to save memory in large arrays of floating point numbers.",
      examples: [
        "float price = 19.99f;"
      ]
    },
    {
      id: 7,
      title: "Double Data Type",
      definition: "Double-precision 64-bit IEEE 754 floating point, used for decimal values.",
      examples: [
        "double pi = 3.141592653589793;"
      ]
    },
    {
      id: 8,
      title: "Char Data Type",
      definition: "Single 16-bit Unicode character, used to store characters.",
      examples: [
        "char grade = 'A';"
      ]
    },
    {
      id: 9,
      title: "String (Non-Primitive)",
      definition: "Strings are objects representing sequences of characters.",
      examples: [
        "String name = \"Rupesh\";"
      ]
    },
    {
      id: 10,
      title: "Array (Non-Primitive)",
      definition: "Homogeneous data structures storing values with indexed access.",
      examples: [
        "int[] numbers = {1, 2, 3, 4};"
      ]
    },
    {
      id: 11,
      title: "Class (Non-Primitive)",
      definition: "Blueprint containing fields and methods to describe the behavior of an object.",
      examples: [
        "class Car { String color = \"Red\"; int year = 2025; }"
      ]
    },
    {
      id: 12,
      title: "Interface (Non-Primitive)",
      definition: "Similar to a class, interfaces can have methods (by default public, abstract) and variables.",
      examples: [
        "interface Animal { void makeSound(); }"
      ]
    }
  ];

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold text-purple-700">Data Types in Java</h1>

      {DataTypeCard.map((card) => (
        <div key={card.id} className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md border-l-4 border-purple-500">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">{card.title}</h2>
          <p className="text-gray-800 dark:text-gray-300 font-medium mb-4">{card.definition}</p>
          {card.examples.length > 0 && (
            <div>
              <h3 className="font-semibold text-green-600 mb-1">Example:</h3>
              <div className="bg-gray-900 text-green-200 font-mono p-4 rounded-md overflow-x-auto text-sm">
                {card.examples.map((example, idx) => (
                  <pre key={idx}>{example}</pre>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DataType;

import React from 'react';

const TypeCasting = () => {
  const TypecastingCard = [
    {
      id: 1,
      topic: "Java typecasting",
      defination: "The process of converting one datatype value into another datatype is known as Typecasting.",
      considerablePoints: [
        "-> It is mostly applied to primitive data types (except boolean)",
        "-> The process is also called Primitive Data type casting",
        "-> There are generally two types of typecasting",
        "-> Implicit Typecasting",
        "-> Explicit Typecasting"
      ],
    },
    {
      id: 2,
      topic: "Implicit typecasting",
      defination: "When a smaller data type is converted into a bigger data type automatically by the compiler.",
      information: [
        "-> This type of typecasting is also considered as Widening and Upcasting",
        "-> There is no loss of Data",
        "-> Happens in this order",
        "byte -> short -> int -> long -> float -> double"
      ],
      question: "How can a 4-byte float hold an 8-byte long value?",
      answer: "Even though float uses 4 bytes and long uses 8 bytes, the internal capacity (range and volume) of float is larger because it supports decimal and exponential values."
    },
    {
      id: 3,
      topic: "Explicit typecasting",
      defination: "When a bigger data type is converted into a smaller data type manually by the programmer.",
      information: [
        "-> It is also called Narrowing and Downcasting.",
        "-> There may be loss of data (especially fraction or overflow values)",
        "-> This typecasting requires the use of type in brackets."
      ]
    }
  ];

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold text-purple-700">Java Typecasting</h1>

      {TypecastingCard.map((card) => (
        <div key={card.id} className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md border-l-4 border-purple-500">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">{card.topic}</h2>
          <p className="text-gray-800 dark:text-gray-300 font-medium mb-4">{card.defination}</p>

          {Object.entries(card).map(([key, value]) => {
            if (
              key !== 'id' &&
              key !== 'topic' &&
              key !== 'defination' &&
              Array.isArray(value)
            ) {
              return (
                <div key={key} className="mb-4">
                  <h3 className="text-xl font-semibold text-purple-600 mb-2">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-800 dark:text-gray-300 font-semibold">
                    {value.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              );
            }
            if (
              key !== 'id' &&
              key !== 'topic' &&
              key !== 'defination' &&
              typeof value === 'string'
            ) {
              return (
                <p key={key} className="mb-2 text-gray-700 dark:text-gray-300 font-semibold">
                  <strong className="text-purple-600 capitalize">{key}:</strong> {value}
                </p>
              );
            }
            return null;
          })}

          <div className="mt-4">
            <h3 className="text-lg font-semibold text-green-600 mb-1">Example of Typecasting:</h3>
            <div className="bg-gray-900 text-green-200 font-mono p-4 rounded-md overflow-x-auto text-sm space-y-1">
              <pre>// Implicit Typecasting</pre>
              <pre>int a = 10;</pre>
              <pre>double d = a; // automatic widening</pre>
              <pre>// Explicit Typecasting</pre>
              <pre>double x = 10.5;</pre>
              <pre>int y = (int) x; // manual narrowing</pre>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TypeCasting;

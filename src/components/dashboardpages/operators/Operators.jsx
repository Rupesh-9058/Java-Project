import React from 'react';

const Operators = () => {
  const OperatorCard = [
    {
      id: 1,
      Topic: "Introduction to Operators",
      Defination: [
        "Operators are special symbols that perform operations on operands.",
        "They are used to perform actions such as arithmetic, comparison, and logical operations in Java.",
        "Operators help build expressions that are essential for business logic in Java programming."
      ],
      Types: "There are three categories of operators based on the number of operands used.",
      typesOfOperator: [
        "Unary Operator",
        "Binary Operator",
        "Ternary Operator"
      ],
      Example: [
        "int a = 10;",
        "int b = 20;",
        "int sum = a + b; // Using binary addition operator",
        "a++; // Using unary increment operator",
        "int max = (a > b) ? a : b; // Using ternary operator"
      ]
    },
    {
      id: 2,
      Topic: "Unary Operator",
      Defination: "Operators that work with a single operand.",
      UnaryOperator: [
        "Increment Operator (++x, x++)",
        "Decrement Operator (--x, x--)",
        "Bitwise Complement (~x)",
        "Boolean Complement (!x)"
      ],
      Example: [
        "int x = 5;",
        "int y = ++x; // Pre-increment",
        "int z = x--; // Post-decrement"
      ]
    },
    {
      id: 3,
      Topic: "Binary Operator",
      Defination: "Operators that require two operands to perform operations.",
      BinaryOperator: [
        "Arithmetic Operators (+, -, *, /, %)",
        "Relational Operators (<, >, <=, >=)",
        "Equality Operators (==, !=)",
        "Bitwise Operators (&, |, ^)",
        "Logical Operators (&&, ||)",
        "Assignment Operator (=)",
        "String Concatenation (+)"
      ],
      Example: [
        "int a = 15, b = 4;",
        "int result = a / b; // Using division operator",
        "boolean isEqual = (a == b); // Using equality operator"
      ]
    },
    {
      id: 4,
      Topic: "Ternary Operator",
      Defination: "Operator that uses three operands and is used for conditional evaluations.",
      ConditionalOperatorInformation: [
        "Syntax: condition ? expression1 : expression2",
        "If the condition is true, expression1 is executed; otherwise, expression2 is executed."
      ],
      Example: [
        "int age = 18;",
        "String eligibility = (age >= 18) ? \"Eligible\" : \"Not Eligible\";"
      ]
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-purple-700 mb-8">Operators in Java</h1>

      <div className="flex flex-col gap-8">
        {OperatorCard.map((card) => (
          <div key={card.id} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
            <h2 className="text-2xl font-semibold text-purple-700 dark:text-white mb-3">
              {card.Topic}
            </h2>

            {card.Defination && (
              Array.isArray(card.Defination) ? (
                <ul className="list-disc list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
                  {card.Defination.map((line, idx) => (
                    <li key={idx}>{line}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-800 dark:text-gray-300 mb-4 font-semibold">
                  {card.Defination}
                </p>
              )
            )}

            {Object.entries(card).map(([key, value]) => {
              if (['id', 'Topic', 'Defination'].includes(key)) return null;

              return (
                <div key={key} className="mb-4">
                  <h3 className="text-xl font-semibold text-purple-600 mb-2">
                    {key.replace(/([A-Z])/g, ' $1').replace(/^./, c => c.toUpperCase())}
                  </h3>
                  {key === 'Example' ? (
                    <div className="bg-gray-900 text-green-200 font-mono p-4 rounded-md overflow-x-auto text-sm">
                      {value.map((item, idx) => (
                        <pre key={idx}>{item}</pre>
                      ))}
                    </div>
                  ) : Array.isArray(value) ? (
                    <ul className="space-y-1 list-disc list-inside font-semibold text-gray-700 dark:text-gray-300">
                      {value.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-700 dark:text-gray-300 font-semibold">
                      {value}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Operators;

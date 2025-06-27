import React from 'react';

const Operators = () => {
  const OperatorCard = [
    {
      id: 1,
      Defination: "Operators are the special symbol using which we can perform certain operations on operands . ",
      Types: "There are three types of operator present in java and these categorization has been done on the basic of how many operands we are using . ",
      typesOfOperator: [
        "Unary Operator",
        "Binary Operator",
        "Ternary Operator"
      ]
    },
    {
      id: 2,
      Type: "Unary Operator",
      UnaryOperator: [
        "Increment Operator",
        "Decrement Operator",
        "Bitwise Operator",
        "Boolean Operator"
      ],
      BinaryOperator: [
        "Arithmatic Operator(+,-,*,/,%)",
        "String Concatenation",
        "Assignment Operator(=)",
        "Relational Operator(<,>)",
        "Equality Operator(==)",
        "Bitwise Operator(&,|,^)",
        "Logical Operator(&&,||)"
      ],
      TernaryOperator: [
        "Conditional Operator(?:)"
      ]
    },
    {
      id: 3,
      name: "Unary Operator",
      Defination: "Whenever we are performing any operation by using only one operand,that the type of operators is known as unary Operator. ",
      section: [
        "increment operator:It is a type of operator when used,will always increase the value of the variable by adding 1 to it .",
        "It is of two types ",
        "1.Preincrement(++x) -: in pre-increment first the value will be increased then after it will get assigned .",
        "2.Post-increment(x++) -: In post increment first the value will be assigned then it will get incremented",
        "Decrement Operator is a type of operator when used will always decrease the value of the variable by substracting 1 to it. ",
        "1.Pre-Decrement Operation(--x) -: When ever we are performing pre-decrement operation then it will first decrease the value then after it will assign ",
        "2.Post-Decrement Operation(x--) -: Whenever we are performing post-decrement operation then it willl first assign the value then after it will get decremented.",
        "3.Bitwise compliment -: In bitwise compliment it will first add 1 to the then it will change the symbol of the final output(~) .",
        "4.Boolean compliment -: In boolean compliment it will just change the boolean value from true to false and false to true ."
      ]
    },
    {
      id: 4,
      name: "binary Operator",
      Defination: "Binary operators are the operators that will be used to perform operation with 2 operands .",
      section: [
        "Arithmatic Operator(+,-,*,%,/):(These are the operator that will perform arithmatic operations like addition substraction ,etc...)",
        "when we are using mod or divide operator both will perform division operation but the output will be different because mod will always take remainder as the output and divide will take quitient as the output ."
      ]
    },
    {
      id: 5,
      topic: "Arithamtic Operator",
      Defination: "These are the operators thet will perform arithmatic operations like addition,substraction and different basic mathematical operation (+,-,*,/,%)",
      information: [
        "* When we are using mod or divide operator both will perform division operation but the output will be different because mod will always take remainder as the output and divide will take quotitnt as the output ."
      ]
    },
    {
      id: 6,
      topic: "String Concatenation",
      Defnation: "It is a process of merging two operand where both the operands can be string or any one of the operand must be a string value .",
      information: [
        "->In order to perform string concatenation we will be using add/plus(+) operator and it is also known as Overloaded operator because it can perform both addition and concatenation simultaneously in the same line ."
      ]
    },
    {
      id: 7,
      topic: "Assignment Operator",
      Defination: "It is a type of Operator which will assign value to the variable and avaribale to the object for primitive it will be value to variable*(right to left) and for non-premitive it will be variable to ibject *(left to right) . "
    },
    {
      id: 8,
      topic: "Relational Operator",
      Defination: "These are the operators which will be used to check the relationship  between 2 operands like ",
      information: [
        " '>' :- greater than ",
        " '<' :- lesser than ",
        "some compound relational operator are ",
        ">= -: greater than equal to",
        "<= -: lesser than equal to",
        "the output of the Relational operator will always be in the form of boolean expression ."
      ]
    },
    {
      id: 9,
      topic: "Equality Operator(==)",
      Defination: "It is a type of operator which will be checking wheather both the operand are equal or not .",
      information: [
        "If it is same then the output will be true otherwise false",
        "Equality operator's output will also be in the boolean expression",
        "It is applicable for both primitive as well as non-primitive data type"
      ]
    },
    {
      id: 10,
      topic: "Non equal operator(!=)",
      Defination: "It is type of operator which will be checking wheather the operand are not equal or same .",
      information: [
        "if not equal then it will give true as the output otherwise false .",
        "Not equality operator's output will also be in the boolean expression .",
        "It is applicable for both primitive as well as non primitive data type ."
      ]
    },
    {
      id: 11,
      topic: "Bitwise Operator",
      type: [
        "Bitwise AND(&) -: In bitwise AND operator it will give us true as the output if both the operands output is true otherwise false .",
        "Bitwise OR(|) -: In bitwise OR operator it will give us true any one of the operands output is true otherwise false .",
        "Bitwise XOR(^) -: In bitwise XOR operator it will give as true if both the operands output are different ."
      ]
    },
    {
      id: 12,
      topic: "Logical Operator",
      Defination: "In logical operator the execution of the 2nd operand is based on the output of the first operand .",
      information: [
        "There are 2 types of logical operator",
        "Logical AND(&&) -: In logical AND operator the 2nd operand will be executed if and only if(iff) the output of the first operand is true",
        "Logical OR(||) -: In logical OR operator the 2nd operand will only be executed iff the output of the first operand is false ."
      ]
    },
    {
      id: 13,
      topic: "Ternary Operator",
      Defination: "Whenever we are using 3 operand to perform any operation then the operator used is known as ternary operator",
      ConditionalOperatorInformation: [
        "(condition) ? statement1 : statement2",
        "if the output of the condition is true then the statement1 will executed and when the output of the condition is false then statement 2 will get executed"
      ]
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-purple-700 mb-8">Operators in Java</h1>

      <div className="flex flex-col gap-8">
        {OperatorCard.map((card) => (
          <div
            key={card.id}
            className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-purple-500"
          >
            <h2 className="text-2xl font-semibold text-purple-700 dark:text-white mb-3">
              {card.topic || card.Topic || card.name || card.Type || `Operator ${card.id}`}
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
              if (
                ['id', 'Topic', 'topic', 'name', 'Type', 'Defination'].includes(key)
              ) return null;

              return (
                <div key={key} className="mb-4">
                  <h3 className="text-xl font-semibold text-purple-600 mb-2">
                    {key.replace(/([A-Z])/g, ' $1').replace(/^./, c => c.toUpperCase())}
                  </h3>
                  {Array.isArray(value) ? (
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

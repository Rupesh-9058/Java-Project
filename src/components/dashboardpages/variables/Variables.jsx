import React from 'react';

const Variables = () => {
  const varibaleCard = [
    {
      id: 1,
      Topic: "Basic idea about Varibale",
      Defination: [
        "Varibale is a name or reference to memory allocation where we are going to store our data",
        "(it is point where we decide to store our value or data , so if it necessary and require we will find out easily and use in our business logic , its like in our kitchen if we have multiple different items to prepare food then we will store them in different container so we will use them quickly and efficently , so  in programming we call those container as variable)",
        "Data can be values and objects"
      ],
      Parts: [
        "There are two parts of varibale",
        "-> Declaration",
        "-> Initialisation"
      ],
      Declaration: [
        "Declaration of the variable is mandatory where as initilization is optional .",
        "If we are not initilizing then JVM will provide default valuie according to data type ."
      ],
      Type: [
        "These categorization of the variable has been done on the basis of where we are declaring the variable",
        "There are 3 types of variable",
        "1-> Static variable",
        "2-> Nonstatic variable",
        "3-> Local variable"
      ]
    },
    {
      id: 2,
      Topic: "static variable",
      Defination: "These are the variables whose values not differ from one object to another object",
      about: [
        "-> These variables have the same value for all objects of the class . ",
        "-> Only one copy of a static variable is created and shared among all objects .",
        "-> Static variables are also called Class Variables ."
      ],
      Declaration: [
        "-> Static variables are declared inside the class but with the static keyword,and outside of method blocks or constructors ."
      ],
      HowToUse: [
        "-> There are three ways to access static variable:",
        "1-> Using class name(Recomended)",
        "2-> Using object reference",
        "3-> Directly (by the name of that variable)"
      ],
      storage: "Static variables are stored in (Method Area -: also called Class Area)",
      MemoryAllocation: ["Memory for static variable is allocated only once when the class is loaded by the JVM."]
    },
    {
      id: 3,
      Topic: "Nonstatic variable",
      Defination: "These are the variables whose values differ from one object to another object",
      about: [
        "-> Every object will have a separate copy of non-static variable .",
        "-> each and every object have it own value of specific data and it can have its own object reference pointer which points the same data",
        "-> Static variables are also called instance Variables ."
      ],
      Declaration: [
        "-> The non-static variables are declared inside the class but outside the method block or constructor."
      ],
      HowToUse: [
        "-> There are only one way in which we can access a non-static variable and that is by the help of object reference"
      ],
      storage: "The non-static variables are stored in Heap area .",
      MemoryAllocation: [
        "The memory of the non-static variable will be allocated after the creation of the object and that",
        "to be inside the object",
        "Two non-static variable names can not be same ."
      ]
    },
    {
      id: 4,
      Topic: "Local variable",
      Defination: "If a varibale is declared inside the method,block or constructor then it is treated as local variable",
      about: [
        "-> A local varibale is declared inside a method,constructor,or block .",
        "-> It is created when the method is called and destroyed when the method finishes .",
        "-> Local variables are not accessible outside the method ."
      ],
      Notes: [
        "-> these variable are aslo called as temporary variable",
        "-> Local variable must be initialized before use .",
        "-> They are stored in Stack area .",
        "-> No default values are given by JVM to local variables in java ."
      ],
      storage: "The local variable is always stored in respective methods or constructors or blocks stack area when the method execution get over the value will get deleted automatically ."
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-purple-700 mb-8">Variables and its type</h1>

      <div className="flex flex-col gap-8">
        {varibaleCard.map((card) => (
          <div
            key={card.id}
            className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-purple-500"
          >
            <h2 className="text-2xl font-semibold text-purple-700 dark:text-white mb-3">
              {card.Topic}
            </h2>

            {/* If Defination is string or array */}
            {card.Defination && (
              Array.isArray(card.Defination) ? (
                <ul className="list-disc list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
                  {card.Defination.map((line, idx) => (
                    <li key={idx}>{line}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-800 dark:text-gray-300 mb-4 font-semibold">{card.Defination}</p>
              )
            )}

            {/* Dynamically render all remaining keys */}
            {Object.entries(card).map(([key, value]) => {
              if (
                key !== 'id' &&
                key !== 'Topic' &&
                key !== 'Defination'
              ) {
                return (
                  <div key={key} className="mb-4">
                    <h3 className="text-xl font-semibold text-purple-600 mb-2">
                      {key.replace(/_/g, ' ')}
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

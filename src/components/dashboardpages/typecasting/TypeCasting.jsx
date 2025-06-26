import { p } from 'framer-motion/m';
import React from 'react'

const TypeCasting = () => {
  const TypecastingCard = [
    {
      id: 1,
      topic:"Java typecasting",
      defination: "The process of converting one datatype value into another datatype is known as Typecasting .",
      considerablePoints: [" -> It is mostly aplied to primitive data types(except boolean)",
        " -> The process is also called as Primitive Data type casting",
        " -> There are generally two type of typecasting",
        " -> Implict Typecasting",
        " -> Explict Typecasting"
      ],
    },
    {
      id: 2,
      topic: "Implict typecasting",
      defination: "When smaller data type is converted into bigger data type automatically by the compiler . ",
      information: [
        "-> This type of typecasting is also considered as Widening and Upcasting",
        "-> There is no loss of Data",
        "-> Happens in this order",
        " byte--->short--->int--->long--->float--->double ",
      
      ],
      
      question: "How can a 4-byte float hold an 8-byte of long value ?",
      answer: "Even though float uses 4 bytes and long uses 8 bytes , the internal capacity(range and volume) of float is larger because it supports decimal and exponential values."
    
    },
    {
      id: 3,
      topic: "Explict typecasting",
      defination: "when a bigger datatype is converted into smaller data type manually by the programmer.",
      information: [
        "-> It is also called Narrowing and downcasting.",
        "-> There may be loss of data(especially fraction or overflow values)",
        "-> this typecasting requires the use of type in brackets."
      ]
    }
  ]
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8 text-purple-700">Java Typecasting</h1>

      <div className="flex flex-col gap-8">
        {TypecastingCard.map((card) => (
          <div
            key={card.id}
            className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-purple-500"
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              {card.topic}
            </h2>

            {card.defination && (
              <p className="text-gray-800 dark:text-gray-300 mb-4 font-semibold">{card.defination}</p>
            )}

            {/* {card.types && (
              <ul className="space-y-2 mb-4 font-semibold">
                {card.types.map((type, index) => (
                  <li key={index} className="text-gray-800 dark:text-gray-200">
                    🔹 {type}
                  </li>
                ))}
              </ul>
            )} */}

            {/* Dynamically render all other object keys if they are arrays */}
            {Object.entries(card).map(([key, value]) => {
              if (
                key !== 'id' &&
                key !== 'topic' &&
                key !== 'defination' &&
                key !== 'types' &&
                Array.isArray(value)
              ) {
                return (
                  <div key={key} className="mb-4">
                    <h3 className="text-xl font-semibold text-purple-600 mb-2">
                      {key.replace(/_/g, ' ')}
                    </h3>
                    <ul className="space-y-1 list-disc list-inside font-semibold">
                      {value.map((item, idx) => (
                        <li key={idx} className="text-gray-700 dark:text-gray-300">
                          {item}
                        </li>
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
                  <p key={key} className='mb-2 text-gray-700 dark-gray-300 font-semibold'>
                    <strong className="text-purple-600 capitalize">{key}:</strong> {value}
                  </p>
                );
              }
              return null;
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TypeCasting
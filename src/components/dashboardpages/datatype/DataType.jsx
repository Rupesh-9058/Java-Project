import React from 'react';

const DataType = () => {
  const DataTypeCard = [
    {
      id: 1,
      title: "Datatypes in Java ",
      Defination:
        "Datatypes specify the different sizes and values that can be stored in the variable. There are two types of data types in java .",
      types: [
        "Primitive data types : The premitive datatypes include boolean,char,byte,short,int,long,float and double .",
        "Non-primitive data types : the non-premitive datatypes include Classes , Interfaces,and Arrays . "
      ]
    },
    {
      id: 2,
      title: "Java Primitive Data types",
      Defination:
        "In java a language , primitive data types are building blocks of data manipulation . These are the most basic data types available in java language . ",
      types: [
        "There are 8 types of primitive data types",
        "Boolean data type",
        "byte data type",
        "char data type",
        "short data type",
        "int data type",
        "long data type",
        "float data type",
        "double data type"
      ]
    },
    {
      id: 3,
      title: "Java Non-Primitive Data type",
      Defination:
        "Non primitive data types refer to objects and hence they are called reference types.Example of non-premitive types including Strings,Arrays,Classes,Interface etc.",
      types: ["String", "Arrays", "Classes", "Interface"]
    },
    {
      id: 4,
      title: "Premitive data type information",
      Boolean_DataType: [
        "The Boolean data type is used to store only two possible values:true and false . This data type is used for simple flags that track true/false conditions .",
        "The Boolean datatype specifies one bit of information , but its (sise) can not be defined precisely",
        "Example:Boolean one = false ."
      ],
      Byte_DataType: [
        "The byte datatype is an example of primitive data type. It is an 8-bit signed two's component integer .Its value-range lies between -128 to 127(inclusive) .its minimum value is -128 and maximum  vaalue is 127 . its default value is 0.",
        "The byte datatype is used to save memory in large arrays where the memory savings is most required .It saves space because a byte is 4 times smaller than an integer .It can also be used in place if (int) data type .",
        "Example: byte a = 10 , byte b = -20"
      ],
      Short_DataType: [
        "The short datatype is a 16-bit signed two's complement integer . Its value-range lies between - 32,768 to 32,767 (inclusive) .Its minimum value is -32,768 and maximum value is 32,767 . Its default value is 0 .",
        "The short datatype can also be used to save memory just like byte data type . A short data type is 2 times smaller than an integer.",
        "Example:short s = 10000 , short r = -5000"
      ],
      Int_DataType: [
        "The int datatype is a 32-bit signed two's complement integer . Its value-range lies between - 2,147,483,648 (-2^31) to 2,147,483,647(2^31 -1) (inclusive) . ",
        "Its minimum value is 2,147,483,648 and maximum value is 2,147,483,647 . Its default value is 0 .",
        "The int datatype is generally used as a default data type for integral values unless if there is no problem about memory.",
        "Example : int a = 100000 , int b = -200000 "
      ],
      LongData_DataType: [
        "The long datatype is 64 bit two's complement integer .Its value-range lies between  ( -9,223,372,036,854,775,808(-2^63) to (9,223,372,036,854,775,807)(2^63 -1)(inclusive)",
        "Its Minimum value is (-9,223,372,036,854,775,808) and Maximum value is(9,223,372,036,854,775,807) default value is (0) ",
        "it is generally used when you need a range of values more than provided by int .",
        "Example : long a = 100000L,long b = -200000L"
      ],
      Float_DataType: [
        "The Float datatype is a single-precision 32-bitIEEE754 floating point.Its value range is unlimited .",
        "It is recomended to use a float(instead of double ) if you need to save memory in large arrays of floating point numbers.",
        "The float data type should never be used for precise values,such as currency . Its default value is 0.0F. ",
        "Example : Float fl = 234.5f"
      ],
      Double_DataType: [
        "The double datatype is a double-precision 64-bit IEEE 754 floating point.Its value range is unlimited.",
        "The Double data type is generally used for decimal values just like float.",
        "The Double data type also should never be used for precise values,such as currency . Its default value is 0.0d.",
        "Example: double dl = 12.3"
      ],
      Char_Datatype: [
        "The Char data type is a single 16-bit Unicode character . Its value-range lies between ('\\u0000 or 0) to (\\uffff or 65,535 inclusive) ",
        "The char data type is used to store characters ."
      ]
    },
    {
      id: 5,
      title: "Non primitive datatype information",
      String: [
        "string is a subsequence of character .But in java , a string  is an object that represents a sequence of characters .",
        "the java.lang.String class is used to create a string object .If you wish to know more about java Strings ."
      ],
      Arrays: [
        "Arrays in java are homogenous data structures implemented in java as objects . Arrays store one or more values of specific data type and provide indexed access to store the same .",
        "A specific element in an array is accessed by its index ."
      ],
      Classes: [
        "A class in java is a blueprint which includes all your data. A class contains fields(varibales) and methods to describe the behavour of an object."
      ],
      Interface: [
        "Like a class an interface can have methods and variables ,but the methods declared in interface is by default public , static and abstract(only method signature no implementation body)"
      ]
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8 text-purple-700">Data Types</h1>

      <div className="flex flex-col gap-8">
        {DataTypeCard.map((card) => (
          <div
            key={card.id}
            className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-purple-500"
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              {card.title}
            </h2>

            {card.Defination && (
              <p className="text-gray-800 dark:text-gray-300 mb-4 font-semibold">{card.Defination}</p>
            )}

            {card.types && (
              <ul className="space-y-2 mb-4 font-semibold">
                {card.types.map((type, index) => (
                  <li key={index} className="text-gray-800 dark:text-gray-200">
                    🔹 {type}
                  </li>
                ))}
              </ul>
            )}

            {/* Dynamically render all other object keys if they are arrays */}
            {Object.entries(card).map(([key, value]) => {
              if (
                key !== 'id' &&
                key !== 'title' &&
                key !== 'Defination' &&
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
              return null;
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataType;

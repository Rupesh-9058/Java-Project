import React from 'react'

const Identifier = () => {
  const IdentifiersCard = [
    {
      Definations: "An identifier is the name used to identify classes,methods,variables,labels,and other user-defined elements in java . In simple terms,identifiers are  the names you give to elements in your programe",
      Rules: [
        "Java has some Strict rules for naming identifiers.it the rule is broke you will face a error",
        "1-> Can Contain: letters(A-Z ,a-z), digits(0-9),underscore(_),and doller sign($)",
        "2-> Can not start with a digit",
        "3-> Can not use java reserve keywords (e.g,int,class,public,etc)",
        "4-> Can be of any length",
        "5-> Java is case-sensitive(name and Name are different).",
        "6-> Unicode characters are allowed (but avoid using them unless necessary ).",
        "7-> No spaces allowed in identifiers."
      ]
    },
    {
      heading: "Example of Valid and Invalid Examples",
      Valid_Identifiers: [
        "-> int age",
        "-> String studentName",
        "-> double_salary",
        "-> float $bonous",
        "-> boolean isValid"
      ],
      InValid_Identifiers: [
        "-> int 1stNumber // ❌",
        "-> String fullName // ❌",
        "-> float class // ❌"
      ]
      
      
    }
  ]
  return (
    <div className="p-6 space-y-8">
      {/* Definition Section */}
      <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-purple-600 dark:text-purple-300 mb-4">What is an Identifier?</h2>
        <p className="text-gray-800 dark:text-gray-300 font-semibold text-base leading-relaxed">
          {IdentifiersCard[0].Definations}
        </p>
      </div>

      {/* Rules Section */}
      <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-300 mb-3">Rules for Naming Identifiers</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-800 dark:text-gray-300 font-semibold">
          {IdentifiersCard[0].Rules.map((rule, idx) => (
            <li key={idx}>{rule}</li>
          ))}
        </ul>
      </div>

      {/* Examples Section */}
      <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-300  mb-4">
          {IdentifiersCard[1].heading}
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Valid Identifiers */}
          <div>
            <h4 className="font-medium text-green-600 mb-2">✅ Valid Identifiers</h4>
            <ul className="space-y-1 text-gray-800 dark:text-gray-300 font-semibold">
              {IdentifiersCard[1].Valid_Identifiers.map((example, idx) => (
                <li key={idx}>{example}</li>
              ))}
            </ul>
          </div>

          {/* Invalid Identifiers */}
          <div>
            <h4 className="font-medium text-red-600 mb-2">❌ Invalid Identifiers</h4>
            <ul className="space-y-1 text-gray-800 dark:text-gray-300 font-semibold">
              {IdentifiersCard[1].InValid_Identifiers.map((example, idx) => (
                <li key={idx}>{example}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Identifier
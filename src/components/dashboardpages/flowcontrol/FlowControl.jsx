import React from 'react'

const FlowControl = () => {
  const FlowControlCard = [
    {
      id: 1,
      topic: "flow-control in java",
      Defination: "The order in which all the statement will be executed at runtime",
      type: [
        "select statement",
        "Iterative statement",
        "Transition statement"
      ],
      select_statement: [
        "-> if-else",
        "-> switch"
      ],
      iterative_statement: [
        "-> for loop",
        "-> while loop",
        "-> do-while loop"
      ],
      Tranistion_statement: [
        "->break",
        "->continue",
        "->return"
      ]
    },
    {
      id: 2,
      topic: "if-else statement",
      procedure: ["-> ()-> in this parenthesis anything we write is known as argument",
        "the argument should be of boolean type, if we try to give any other type we will get compilation error saying incompatible types",
        "-> if condition is true then if block will execute . ",
        "-> if condition is false then else block will execute . ",
        "-> else part is optional",
        "-> we can not write any statement between if else ,otherwise we will get compile time error saying [else without if] .",
        "-> if there is only one statement inside if or else then curley braces({}) optional",
        "-> if we are not providing any curley braces then only one statement is allowed and that statement should not be of declarative type .",
        "-> if we are writing multiple statements after if and not providing curley braces then the first statement after if will be a part of statement will be the part of programe ."

      ],
      note: "nested if-else is a condition is (A nested if-else is a conditional structure where an if or else block contains another if-else statement inside it. This helps check multiple conditions in a step-by-step manner, allowing decisions to be made based on the outcome of previous conditions.) this situation is also called as if-else ladder",
      
    },
    {
      id: 3,
      topic: "switch case",
      procedure: [
        "Used to replace long else-if ladders for checking multiple fixed values .",
        "supported data tyeps: [byte,short,char,int,enum,String]",
        "special case: (break is optional ; if omitted,exception falls through)",
        "default is optional but recomended .",
        "switch does not support ranges like case 1-3 ."

      ]
      
    },
    {
      id: 4,
      topic: "iteration statement(used to execute a block of code repeatedly)",
      iterationStatement: [
        "for loop",
        "do-while loop",
        "while-loop"
      ]
    },
    {
      id: 5,
      topic: "for loop",
      information: [
        "for(initialization;condition;update){ //loop body }",
        
      ],
      specialCases: [
        "All three parts(initial;condition;update) are optional ",
        "multiple variables can be initilized"
      ]
    },
    {
      id: 6,
      topic: "while-loop",
      information: [
        "during the execution of programe within the while loop there is a parenthesis .",
        "In that parenthesis we write our argument wheather the argument needs to be true or false(means boolean type).",
        "Other wise it will generate compile time error",
        "after the condition get satisfied it will execute the inner code block present in the loop .",
        "when the condition get unsatisfied the execution stops and the flow control came out",
        "this is the working mechanism of while-loop "
      ],
      specialCases: [
        "-> if the condition is false initially,loop body is not going to execute at all .",
        "-> thats why it is called as entry controlling loops ."
      ]
    },
    {
      id: 7,
      topic: "do-while loop",
      information: [
        "during the execution of programe with in the do-while loop first come the 'do' block and after 'while' block",
        "Inside the do block the business logic is written",
        "after that the exit condition or base case condition is written in the while block parenthesis",
        "so the do block code get executed again and again when the condition get failed the control flow break down and came out from the loop"
      ],
      specialCases: 
        "it is the iterative statement which will be used when the programmer wants to execute a operticularr statement or a block of code atleast once irrespective of the output of the condition"
      
    },
    {
      id: 7,
      topic: "Transition_statement",
      concept: {
        break: ["Immediately terminates the current loop(for,while,do-while) or exits a switch block.",
                "After break,control goes to the first statement after the loop or switch .",
                "Used when a specific condition is met inside a loop and we want to stop further iteration ." 
        ],
        continue: ["skips the current iteration of the loop and moves to next iteration .",
          "Does not terminate the loop",
          "Useful when you want to skip certain conditions but continue looping ."
        ],
        return: [
          "Ends the execution of the current method and optionally returns a value (for non-void methods).",
          "control goes back to caller of the method"
        ]
      }
    }
  
  ]
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-purple-700 mb-8">Flow Control in Java</h1>
      <div className="flex flex-col gap-8">
        {FlowControlCard.map((card) => (
          <div key={card.id} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
            <h2 className="text-2xl font-semibold text-purple-700 dark:text-white mb-3">{card.topic}</h2>
            {card.Defination && (
              <p className="text-gray-800 dark:text-gray-300 mb-4 font-semibold">{card.Defination}</p>
            )}
            {Object.entries(card).map(([key, value]) => {
              if (['id', 'topic', 'Defination'].includes(key)) return null;
              return (
                <div key={key} className="mb-4">
                  <h3 className="text-xl font-semibold text-purple-600 mb-2">{key.replace(/_/g, ' ')}</h3>
                  {Array.isArray(value) ? (
                    <ul className="list-disc list-inside space-y-1 font-semibold text-gray-700 dark:text-gray-300">
                      {value.map((item, idx) => <li key={idx}>{item}</li>)}
                    </ul>
                  ) : typeof value === 'object' ? (
                    Object.entries(value).map(([subKey, subValue]) => (
                      <div key={subKey} className="mb-2">
                        <h4 className="text-purple-500 font-semibold">{subKey}</h4>
                        <ul className="list-disc list-inside ml-4 space-y-1 font-semibold text-gray-700 dark:text-gray-300">
                          {subValue.map((item, idx) => <li key={idx}>{item}</li>)}
                        </ul>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-700 dark:text-gray-300 font-semibold">{value}</p>
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

export default FlowControl;
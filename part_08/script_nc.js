// each execution context has VARIABLE ENVIRONMENT; SCOPE CHAIN; 'THIS' KEYWORD;
// SCOPING: how our variables are organized and accessed. Where do variable live? or where we can access a sertain variables, and where not?
// LEXICAL SCOPING: scoping is controled by placement of functions and blocks in the code; funcition that is written inside another function has access to the variables to the parent funcion;
// SCOPE: Space or environment in which a certain varible is declared (variable environment in case of functions). there is GLOBAL SCOPE; FUNCTION SCOPE; BLOCK SCOPE;
// SCOPE OF A VARIABLE: region of our code where a certain variable can be accessed.
// GLOBAL SCOPE: outside of any function or block; Variables declared in GLOBAL SCOPE are accessible everywhere;
// each and every function creates a SCOPE; and the variables declared inside that function scope are only accessible inside that function; this is also called a local scope; so local variables live in the function so to say; and outside that function the variables are then not accessible at all;
// starting the ES6 BLOCKS also create SCOPE now; and by blocks we meen everithing that is between curly braces such as a block of an if statement or a for loop; this blocks only work for ES6 varibables: let and const; var is a function scoped;
// funtions are also block scoped (ONLY IN STRICT MODE)
// difference between the scope chain and the call stack:
// CALL STACK -> oreder in which functions were called
// SCOPE CHAIN -> order in which functions are written in the code HAS NOTHING TO DO WITH THE ORDER IN WHICH FUNCTIONS ARE CALLED
// on other words scope chain has nothig to do with the order of the execution context in the call stack

// HOISTING
// execution context always containg three parts: VARIABLE ENVIRONMENT; SCOPE CHAIN; 'THIS' KEYWORD
// HOISTING make some type of variables accessible/usable in the code before they are actually declared. "Variables lifted to the top of their scope"; Before execution, code is scanned for variable declarations, and for each variable, a new property is created in the VARIABLE ENVIRONMENT OBJECT;
// FUCNTION DECLARATIONS: HOISTED; INIT VALUE = ACTUAL FUCNTION; SCOPE: BLOCK SCOPE(IN 'USE STRICT' MODE);
// VAR ->  HOISTED; VALUE = UNDEFINED; SCOPE: FUNCTION SCOPE
// LET; CONST; -> NOT HOISTED; SCOPE: BLOCK SCOPE;
// FUNCTION EXPRESSION AND AROW FUNCTION -> DEPENDS HOW ARE THEY DECLARED, WITH LET, CONST OR VAR; SAME RULES APPLY LIKE A VARIABLES;
"use strict";

function calcAge(birthDate) {
    const age = 2037 - birthDate;

    function printAge() {
        let output = `${firstName} are ${age}, born in ${birthDate}`;
        console.log(output);

        if (birthDate >= 1981 && birthDate <= 1996) {
            var test = true;
            // creating  NEW variable with same name as outer scope's variable
            const firstName = "Nc";

            //reassigning outer scope's variable
            output = "NEW OUTPUT";

            const str = `Oh you're a millenial, ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }
        }

        console.log({ test }); // var is function scoped!
        // console.log(add(5, 5)); // in strict mode, functions are block scoped!
        console.log({ output });
    }

    printAge();
    return age;
}

const firstName = "Jonas";
calcAge(1991);

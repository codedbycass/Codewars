/*Is the string uppercase?
Task
Create a method to see whether the string is ALL CAPS.

Examples (input -> output)
"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True
In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.
*/

// My solution
String.prototype.isUpperCase = function() {
    //this refers to string prototype
        //toString() ensures it's a string obj
        //toUpperCase() method converts string prototype to uppercase, so it will always return true
    if (this.toString() === this.toUpperCase()){
        return true
    } else {
        return false
    }
}

//Refactoring using ternary
String.prototype.isUpperCase = function() {
    this.toString === this.toUpperCase() ? true : false
}
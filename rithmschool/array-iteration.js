let originalPeople = ["Greg", "Mary", "Devon", "James"];
let people = ["Greg", "Mary", "Devon", "James"];
// Using a loop, iterate through this array and console.log all of the people.
for (let  names of people) {
    console.log(names)
}
// Write the command to remove “Greg” from the array.
console.log(people.shift())
// Write the command to remove “James” from the array.
console.log(people.pop())
// Write the command to add “Matt” to the front of the array.
console.log(people.unshift('Matt'))
// Write the command to add your name to the end of the array.
console.log(people.push('Cass'))
// Using a loop, iterate through this array and after console.log-ing “Mary”, exit from the loop.
for (let names of people) {
    if (names === 'Mary') {
        break
    }
}
// Write the command to make a copy of the array using slice. The copy should NOT include “Mary” or “Matt”.
console.log(people.slice(2,4))
// Write the command that gives the indexOf where “Mary” is located.
console.log(people.indexOf('Mary'))
// Write the command that gives the indexOf where “Foo” is located (this should return -1).
console.log(people.indexOf('Foo'))
// Redefine the people variable with the value you started with. Using the splice command, remove “Devon” from the array and add “Elizabeth” and “Artie”. Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Artie", "James"].
console.log(originalPeople.splice(2,1,"Elizabeth", "Artie"))
console.log(originalPeople)
// Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".
let withBob = people.concat("Bob")
console.log(withBob)
console.log(people)
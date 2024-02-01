// create an input asking userto enter flavors
const froyoUserInput = prompt("What flavors of froyo would you like?",
" vanilla, vanilla, vanilla, strawberry, coffee, coffee" );

//take input and create an array
const arrayOfStrings = froyoUserInput.split(",");

//write a function 
function countFlavors (inputArray) {
    const counts = {};
    for (const flavor of inputArray) {
        counts[flavor] = counts[flavor] ? counts[flavor] + 1 : 1;
    }
    return counts;
}
froyoObject = countFlavors(arrayOfStrings);
console.log(froyoObject);

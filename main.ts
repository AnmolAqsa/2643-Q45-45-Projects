/*
Q45. Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name. It
should then accept an arbitrary number of keyword arguments. Call the function
with the required information and two other name-value pairs, such as a
color or an optional feature. 
Print the Object that’s returned to make sure all the information was
stored correctly.
*/

type Car = {
    manufacture:string;
    model:string;
    [key:string]:any;
}

function creatcar(manufacture:string,model:string,optional:Record<string,any>):Car {
    return {
        manufacture,
        model,
        ...optional
    }
}
const myCar:Car = creatcar("Honda","Coroila",{color:"Red",year:"2024"})
const myCar2:Car = creatcar("Farari","xyz",{color:"Red",speed:"fast"})
console.log(myCar)
console.log(myCar2)

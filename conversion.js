//creating a constant variable kelvin
const kelvin = 293;
//create variable celsius that is less than 273 
const celsius = kelvin - 273;
//calculating fahrenheit
let fahrenheit;
fahrenheit = celsius * (9/5) + 32;
//rounding fahrnheit in case it is decimal number
fahrenheit = Math.floor(fahrenheit);
//converting celsius to Newton
let newton = celsius * (33/100);
newton = Math.floor(newton);

console.log("The temperature is " + celsius + " celsius.");

console.log("The temperature is " + fahrenheit + " Fahrenheit.");

console.log("The temperature is " + newton + " Newton");
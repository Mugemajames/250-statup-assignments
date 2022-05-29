const array=['learning','is','not','what','you','get','easly','the','first','time','it','is','about','what','you','can','figure','out','-2015','cris','pine','learn','javacsript'];
console.log(array);
//remove last string of an array
const rmvelement= array.pop();
console.log(rmvelement);
console.log(array.length);
console.log(array);
//add new string to an array
const newstring= array.push('html');
console.log(array);
//console.log(array.length);
//replace element
console.log(array.indexOf('easly'));
const deleteCount = 1;
const removedItems = array.splice(deleteCount, 'right');
console.log(array);
//remove fisrt element in array
const removedelement = array.shift();
console.log(array);
console.log(removedelement);
//add first element on array
console.log(array.unshift('programming'));
console.log(array);
//remove some strings in array with others 
const start = 5;;
const changedelements = array.splice(start,'expect');
console.log(array);
//console.log(changedelements);
//joing elements of arrays to form setence
console.log(array.join());
console.log(array.join('-'));
console.log(array.join('-'));
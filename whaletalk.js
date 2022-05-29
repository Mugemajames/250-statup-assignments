let input="turpentine and turtles";
let vowels=['a','i','u','e','o'];
let resultarray=[];
for(let i=0;i<input.length;i++){
    for(let j=0;j<vowels.length;j++){
        if(input[i]==vowels[j]){
            if(input[i]==="e"){
                resultarray.push('ee');
            }
            else if(input[i]==="u"){
                resultarray.push('uu');

            }
            else{
                resultarray.push(input[i]);
            }
        }
    }
}
console.log(resultarray.join('').toUpperCase());
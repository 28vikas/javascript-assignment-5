// 33	Write a function that reverses the words in a given string.

let str = "vikas"


function reverse(str){
    backward = "";
    for (let i = str.length-1; i>=0; i--){
         backward = backward + str[i];
    }
    return backward;
}

console.log(reverse(str));
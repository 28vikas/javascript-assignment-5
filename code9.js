// 9	Write a function that removes all vowels from a given string.

let str = "vikaS"

function rvowel(str){

    let newString = "";
    for(let i = 0; i<str.length; i++){

        if(str[i]==="a"|| str[i]=== "e" || str[i]=== "i" ||str[i]=== "o" || str[i]=== "u" || str[i]=== "A" || str[i]=== "E" ||str[i]=== "I" || str[i]=== "U" || str[i]=== "O"){
            continue;
        }else{
            newString = newString + str[i]
        }
    }

    return newString;
}


console.log(rvowel(str))
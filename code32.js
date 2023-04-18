// 32	Write a function that finds the length of the longest word in a given string.


let str = "the quick brown fox jumps over the lazy dog"

function findLongestWord(str){
    let longestWord = 0;
    let currentWord = 0;
    for(let i = 0; i<str.length; i++){
        if(str[i] !== " "){
            currentWord++;
        }else{
            if(currentWord>longestWord){
                longestWord = currentWord;
            }
            currentWord = 0;
        }
        
        if(currentWord>longestWord){
            longestWord = currentWord;
        }
    }
    return longestWord;
}

console.log(findLongestWord(str));
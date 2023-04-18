// 10	Write a function that checks if a given string is a pangram (contains every letter of the alphabet).

function pangram(str){

    let lower = "abcdefghijklmnopqrstuvwxyz";
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    for(let i = 0; i<str.length; i++){
        let flag = false;
        for(let j=0; j<26; j++){
            if(str[i]===lower[j] || str[i ===upper[j]] || str[i]===" "){
                flag = true;
                break;

            }
        }
        if(flag == false){
            return false;
        }

    }return true;
    
}

console.log(pangram("the quick brown fox jumps over the lazy dog"));
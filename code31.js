// 31	Write a function that converts a string to title case (capitalizes the first letter of each word).


let str = "the quick brown fox jumps over the lazy dog";

function capitalFirstLetter(str){
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    splitArr = str.split(" ");
    let newArr = [];
    for(let i = 0; i<splitArr.length; i++){
        let word = splitArr[i];
        let captalizedWord = "";
        for(let j=0; j<word.length; j++){
            if(j === 0){
                for(let k = 0; k<26; k++){
                    if(word[j] ===lower[k]){
                        captalizedWord = captalizedWord + upper[k];
                    }

                }
            }
            else{
                captalizedWord = captalizedWord+word[j];
            }
        }
        newArr.push(captalizedWord);
    }
    return newArr.join(" ");
}


console.log(capitalFirstLetter(str));
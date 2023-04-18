//30	Write a function that converts a string to lowercase.

function converttouppercase(str){
    let newStr = "";
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(let i = 0; i<str.length; i++){
        for(let j = 0; j<26; j++){
            if(str[i]===lower[j] ){
                newStr = newStr + str[i];
            }
            else if(str[i]===upper[j]){
                newStr = newStr+lower[j]
            }
        }
    }
    return newStr;
}


console.log(converttouppercase("VIKAS"));
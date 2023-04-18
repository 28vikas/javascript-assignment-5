// 29	Write a function that converts a string to uppercase.


function converttouppercase(str){
    let newStr = "";
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(let i = 0; i<str.length; i++){
        for(let j = 0; j<26; j++){
            if(str[i]===upper[j] ){
                newStr = newStr + str[i];
            }
            else if(str[i]===lower[j]){
                newStr = newStr+upper[j]
            }
        }
    }
    return newStr;
}


console.log(converttouppercase("vikas"));
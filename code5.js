// 5	Write a function that checks if a given string is a palindrome.



function reverse(str){
    backward = "";
    for (let i = str.length-1; i>=0; i--){
         backward = backward + str[i];
    }
    if(backward === str){
        return true;
    }else{
        return false;
    }
    
    
}

console.log(reverse("level"))
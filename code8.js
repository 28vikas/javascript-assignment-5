//8	Write a function that checks if a given string contains a given substring.


function strsubstring(str,substring){
     let subLength = 0
    for(let i= 0; i<str.length; i++){
      if(str[i]===substring[subLength]){
        subLength++;
      }else{
        subLength = 0;
    }if(subLength === substring.length){
        return  true;
    }
    } return  false;

}




console.log(strsubstring("vikas","vas"))
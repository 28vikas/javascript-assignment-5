// 11	Write a function that removes duplicate characters from a given string.



function dublicatermove(str){
    let dubStr = "";
    for(let i = 0; i<str.length; i++ ){
      let dublicate = false;
        for(let j = 0; j<dubStr.length; j++){
          if(str[i]=== dubStr[j]){
            dublicate = true;
            break;
          }
        }
          if(dublicate===false){
            dubStr = dubStr+str[i];
        }
        
        


    }
    return dubStr;
}


console.log(dublicatermove("hello"));
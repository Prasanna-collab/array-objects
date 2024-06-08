const charCount = (string)=> {
    const result = {};
    //returuing lower case alpha numeric keys to store the count.
    //values is the count of the character.
    //loop over the string for each character.
    //if the char is Number/letter a key in the object, add one count to it.
    //if the char is  Number/letter not in the object, add it to the object and set value to 1.
    //if char is something(space,symbols,period, etc..) don't do anything.
    let lStr = string.toLowerCase();

    for(let i=0; i<lStr.length; i++){
        if(
        (lStr[i]>='0' && lStr[i]<= "9")
           ||
        (lStr[i]>="a" && lStr[i]<="z")) 
        {
         if(result[lStr[i]])
         {
            result[lStr[i]]++  
         }else 
         {
            result[lStr[i]] =  1
          }
        }else {
            
        }
    };
    return result;
}

charCount("aaaabcccdde11e!!$$%%")
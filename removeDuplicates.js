const removeDuplicates =  (string)=> {
    //declaring the result value as an string;
    //if char is already there in result skip that char and print it.
    //if char is unique concat it to the result.
    let result="";
    const lS = string.toLowerCase();
    for (let i=0; i<lS.length; i++){
        if(lS[i]>="a" && lS[i]<="z"){
            if(result.includes(lS[i])==false){
                   // either sud work.
                  // result =  result.concat(lS[i])
                result+=lS[i]
            }
        }else {
            return "Invalid Input!"
        }
    }
    return result;
}

removeDuplicates("CONFERENCE");

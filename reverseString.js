const reverser = (s)=> {
    // let reversedString = "";
let reversedString=[];
    // for (let i = s.length-1; i>=0; i--){
    //     reversedString += s[i];
    // }
    for (let i=0; i<=s.length; i++){
        reversedString.push(s.charAt(s.length-i))
    }
    return reversedString.join('')
}

reverser("abcdef");
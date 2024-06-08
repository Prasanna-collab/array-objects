const reverseWords = (string)=> {
    let reversedWords="";
    const arr = string.split(" ");
    for (let i=arr.length-1; i >= 0;i--){
        reversedWords +=" "+ arr[i]
    }
    console.log(reversedWords)
    return reversedWords;
}

reverseWords("Good is This")
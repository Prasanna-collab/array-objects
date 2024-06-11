// const same = (arr1,arr2) => {
//     if(arr1.length !== arr2.length){
//         return false;
//     }
//     for(let i=0;i<arr1.length;i++){
//         let correctIndex = arr2.indexOf(arr1[i]**2);
//         if(correctIndex === -1){
//             return false
//         }
//         arr2.splice(correctIndex,1)
//     }
//     return false
// }
// const same = (arr1,arr2)=> {
//     //check  for same ferquency. if not return false.
//     //take array 1 and loop it. compare the square value with the second array. if it is there slice that element from array 2.
// if (arr1.length!=arr2.length){
//     return false;
// }
// for(let i=0;i<arr1.length;i++){
//     let indexPresence = arr2.indexOf(arr1[i]**2);
//     if(indexPresence === -1){
//         return false
//     }
//     arr2.splice(indexPresence,1)
// }
// return true;
// }


//Frequency Counter Approach.
const same = (arr1,arr2)=> {
    if(arr1.length!==arr2.length){
        return false
    }
    const frequencyCounter1={};
    const frequencyCounter2={};

    for( let val of arr1){
        frequencyCounter1[val]= (frequencyCounter1[val]||0)+1;
    }
    //[1,1,1]=> {1:3}
    //[1,2,3]=> {1:1,2:1,3:1}
      for( let val of arr2){
        frequencyCounter2[val]= (frequencyCounter2[val]||0)+1;
    }
    //[1,2,9]=> {1:1,2:1,9:1}

    for (let key in frequencyCounter1){
        //check for the key presence.
        if( ! (key ** 2 in frequencyCounter2)){
            return false
        }
        //check for the count value is same.
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false;
        }
    }
    return true
}

same([2,1,2],[4,4,1])
same([1,2,3],[1,4,9])// return true
same([1,2,3],[1,4,0])// return false
function add(j){
    let sum = 0;
    for(let i=1; i<=j;i++){
        sum += i
    }
    return sum;
}
let time1 = performance.now();
add(1000000000);
let time2 = performance.now();
console.log("Time Elapsed: ", (time2-time1)/1000);
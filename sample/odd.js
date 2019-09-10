var l = 3;
var r = 9;
//Find all odd numbers between

function odd(l, r){
    let result = [];
    for(let i = l; i <= r; i++){
        if(i%2 == 1){
            result.push(i);
        }
    }
    return result;
}
odd(l,r);
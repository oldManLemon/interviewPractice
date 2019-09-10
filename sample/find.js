var arr = [1,2,3,4,5];
var k = 1;

function find(arr,k){;

    let result = 'NO'

    for(let i=0; i<arr.length; i++){
        if(arr[i]==k){
            result = 'YES';
            break;
        }
    }
    return result;
}
find(arr, k);
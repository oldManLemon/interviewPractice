var eg = [6,4,1];

function bubble(arr){
    let count = 0;
   let sorted = false;
    
while(!sorted) {
    sorted = true
    for(var i=0; i < arr.length; i++) {
      if(arr[i] < arr[i-1]) {
        let temp = arr[i];
        arr[i] = arr[i-1];
        arr[i-1] = temp;
        sorted = false;
        count++;
      }
    }
  }
    console.log(`Array is sorted in ${count} swaps.`);
    console.log(`First Element: ${arr[0]}`);
    console.log(`Last Element: ${arr[arr.length-1]}`);
}
bubble(eg);


function socks(n, ar) {


}

const a = 9 ;
const b = [10, 20, 20, 10, 10, 30, 50, 10, 20]
//socks(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])
function socksForSale(socks) {
    //Sort the array

  sortedSocks =  socks.sort();
  console.log("Socks Sorted", sortedSocks);
  //Count the pairs
  var numOfPairs = 0;
  //console.log(sortedSocks.length);
    for(var i = 0; i < sortedSocks.length; i++){
      if(sortedSocks[i]=== sortedSocks[i+1]){
        numOfPairs++;
        //now you need to remove the pairs so they are not double counted
        //instead of trimming skip over the number already checked against that was positive
        i++;
      }
  }
  console.log(numOfPairs);


  //return sortedSocks, numOfPairs ;
}
//socksForSale();
socksForSale(b);
//console.log(socksForSale(b));

//expected answer 3!!!



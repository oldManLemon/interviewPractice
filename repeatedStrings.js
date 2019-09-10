// aba
// 10

// a
// 1000000000000

 var s = "aba";
 var n = 10;
//var s = "a";
//var n = 1000000000000;

function repeatedStrings(s,n){
    var longerString =[];
    var final = [];
    //How to only get 10 letters into my new string
   var least = Math.ceil(n / s.length);
    console.log(least);
    for(let i=0; i < least; i++){
        longerString.push(s);
    }
    //longerString = longerString.join('');
    
    for( let i = 0; i < least; i++){
        final.push(longerString[i]);
    }
    console.log(final);
    final = final.join('');
    console.log(final);

}
//repeatedStrings(s,n);


//My Solution over loads memory on the second run through, as it is too large, need a more effecient way to do it
function repStrings(s,n){
 //console.log(s,n);
 //console.log(s.length);
 var newString = [];
 var i = 0;
 var counter = 0;
 var allA = [];

 do{
     if(i >= s.length){
         i = 0; //reset i to start loop again for the sequence
         newString.push(s[i]);
         i++;
         counter++;
     }else{
        newString.push(s[i]);
     i++; 
     counter++;
     }
 }while(counter < n);


 //console.log(newString);
 for(let i=0; i < newString.length; i++){
     if(newString[i]== 'a'){
        allA.push(newString[i]);
     }
 }
 //console.log(allA);
 return(allA.length);


}
//repStrings(s,n);


function repeatedString(s, n) {
    let x = Math.floor(n / s.length);
    let count = (s.split("a").length - 1) * x;
    let rem = n % s.length;
    console.log(x);
    console.log(count);
    console.log(rem);

    for (var i = 0; i < rem; i++) {
        if (s.charAt(i) === "a") {
            count++;
        }
    }
    return count;
}
console.log(repeatedString(s, n));
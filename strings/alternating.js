// AAAA 3
// BBBBB 4
// ABABABAB 0
// BABABA 0
// AAABBB 4
var a = "AAAA";
var b = "BBBBB";
var c = 'ABABABAB';
var d = 'BABABA';
var e = 'AAABBB';

function alternate(s){
    s = s.split('');
   let counter = 0;
    for(let i = 0; i< s.length; i++){
        if(s[i]==s[i+1]){
            s.splice(i,1);
            i--;
            counter++;
        }
    }
    console.log(counter);
    return counter;
   
}
// alternate(a);
// alternate(b);
// alternate(c);
// alternate(d);
// alternate(e);

function opposite(s){
    s.split('');
    console.log(s);
    
}


opposite(a);
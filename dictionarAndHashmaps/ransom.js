// 6 4
// give me one grand today night
// give one grand today

// yes
//var mag = ['two', 'times', 'three', 'is' ,'not' ,'four'];
//var note = ['two', 'times', 'two', 'is' ,'four'];

//15 17

//var mag = ['o', 'l', 'x', 'imjaw', 'bee', 'khmla' ,'v', 'o', 'v' ,'o' ,'imjaw', 'l', 'khmla', 'imjaw' ,'x'];
//var note = ['imjaw' ,'l' ,'khmla' ,'x', 'imjaw', 'o' ,'l' ,'l' ,'o' ,'khmla', 'v' ,'bee', 'o' ,'o' ,'imjaw', 'imjaw' ,'o'];

//var mag = [ 'give', 'me', 'one', 'grand', 'today', 'night' ];
//var note =  [ 'give', 'one', 'grand', 'today' ];


/*
############################################################

FIRST ATTEMPT

############################################################
function check(mag, note){
//console.log(mag);
//console.log(note.length);
if(mag > note){
    //console.log(`No because note: ${note} which is ${note.length}  is bigger than ${mag} is bigger than ${mag.length}`);
    return "No";
}
var magLen = mag.length; //subject to change

var check = [];

for(let i=0; i<note.length;i++){
   for(let y=0; y < magLen; y++){
       if(note[i] === mag[y]){
           check.push(mag[y]);
           mag.splice(mag[y],1);
       }
   } 
}
note = note.join(' ');
check = check.join(' ');
if(note === check){
    console.log("Yes");
    return "Yes";
}else{
    console.log('No');
    return "No";
}
//console.log(check);

} */

//var mag = ['o', 'l', 'x', 'imjaw', 'bee', 'khmla' ,'v', 'o', 'v' ,'o' ,'imjaw', 'l', 'khmla', 'imjaw' ,'x'];
//var note = ['imjaw' ,'l' ,'khmla' ,'x', 'imjaw', 'o' ,'l' ,'l' ,'o' ,'khmla', 'v' ,'bee', 'o' ,'o' ,'imjaw', 'imjaw' ,'o'];

var mag = [ 'give', 'me', 'one', 'grand', 'today', 'night', 'night' ];
var note =  [ 'give', 'one', 'Grand', 'today', ];

//var mag = magStr.split(' ');
//var note = noteStr(' '); 

function check(magazine, note){
    //Kill process now, before any sillieness
    if(magazine.length < note.length){
        console.log('No');
        return "No";
    }

    let magRef ={};
    let result = "";
     
     for (let i = 0; i < magazine.length; i++){
        if(magRef[magazine[i]]){
            magRef[magazine[i]] += magRef[magazine[i]];  //if the word is already in the object simply add 1 to value   
        }else{
            magRef[magazine[i]] = 1; //havnt seen word before, add it as a reg point and make value 1;
        }
    }

    //console.log(magRef);

    //scan note word by word to see if it will work
    //if word not there break and return no
    //if word is found remove frequency to 0 or remove word from Dict

    for(let i = 0; i < note.length; i++){
        if(!(note[i] in magRef)){
            result = "No";
            break;
        } 
        else if(note[i] in magRef){

            if(magRef[note[i]] < 1){
                result = 'No';
                break;
            }
                magRef[note[i]] -= magRef[note[i]]; //Lower referenced frequency
                result = 'Yes';
            
        }
    }
    //console.log(magRef);
    console.log(result);

}



check(mag, note);
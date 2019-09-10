//7
//0 0 1 0 0 1 0
//6
var c = [0, 0, 0, 0, 1, 0]
//var n = 7;
//var c = [0,0,1,0,0,1,0] //1 is evil 0 is good
// a jump can be made +1 or +2 to a 0
// No jumping on 1

function jump(c){
    //Storage Vars
   var numberedClouds= [];//create an array numbering the clouds 1 to whatever
   var currentCloud = 0;
   var jumps = 0;

    for(let i=0; i < c.length; i++){
        numberedClouds.push(i);
    }//This may be not useful

   // console.log(numberedClouds); //Check that that is working
   for(let i=0; i < c.length; i++){
    //console.log("Cloud Number:",numberedClouds[i]);
       //Check 2 in front first
       if(c[i+2] == 0){
            //console.log("double Jump to "+ c[i+2]+ " Cloud number: " + numberedClouds[i+2]);
            
            jumps ++;
            i ++;
       }else{
           //console.log(jumps);
           jumps++;

       }
   }
   console.log(`Total Jumps: ${jumps-1}`); //Take 1 because I overcount Jumps on the last move
}





jump(c)


function clean(c){
    //Storage Vars
   var jumps = 0;
   for(let i=0; i < c.length; i++){
       if(c[i+2] == 0){
            jumps ++;
            i ++;
       }else{
           jumps++;
       }
   }
   return jumps-1;
}
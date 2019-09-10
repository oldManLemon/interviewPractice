/*
8
UDDDUDUU 
*/
var U = 1;
var D = -1;
var s = 8;
var path = [U, D, D, D, U, D, U, U];
//var path = [U, D, D];
//UDDDUDUU



function valleys(s, path) {

    var seaLevelScore = 0;
    var counter = 0; // Only tick if seaLevelScore goes above 0
    //console.log(path);
    for (var i = 0; i < path.length; i++) {
        if(seaLevelScore == -1 && path[i]== 1){
            //console.log("Valley Here?");
            counter++;
        }
        seaLevelScore+= path[i];
        //seaLevelScore =+ path[i];
        console.log("D or U", path[i]);
        console.log("current score", seaLevelScore);
        
    }

    console.log("End Score" , seaLevelScore);
    console.log("Valleys", counter);
}
valleys(s, path);


function forCode(s, path) {
    var seaLevelScore = 0;
    var counter = 0; // Only tick if seaLevelScore goes above 0
    for (var i = 0; i < path.length; i++) {
        if(seaLevelScore == -1 && path[i]== 1){
            counter++;
        }
        seaLevelScore+= path[i]; 
    }
return counter;
}





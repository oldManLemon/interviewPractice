var cut = 5;
var mark = [2,
    2,
    3,
    4,
    5]

var sec = [20,40,60,80,100];
   var p = 4;

   var eg = [100,50,50,25];
   var k = 4;
   
   
function intSort(a, b) {
    if (a < b) {
        return 1;

    } else if (b < a) {
        return -1;
    } else {
        return 0;
    }
}
function numPrizes(k, marks) {
    //simple check 
    let analysise = false;
    prizes = 0;
    if (marks.length == k) {
        for (let i = 0; i < marks.length; i++) {
            if (marks[i] == 0) {
                analysise = true;
            } else {
                prizes = k;
            }
        }
    }
    let missout = Math.ceil(k/marks.length);
    let rank = [];
    //console.log(missout);
    marks = marks.sort(intSort);
    totalRanks = marks.length;
    currentRank = 1;
    

    //console.log(marks);
    for(let i = 0; i<marks.length; i++){
        console.log(i);
       if(marks[i] == marks[i+1]){
            rank.push(currentRank);
        }else if(marks[i] == 0){
            rank.push(-99);
        }
            else{
              if(i == marks.length-1){
                  rank.push(totalRanks);
              } else{
                  rank.push(currentRank++);
              }
            
        }
        
    }
   console.log(rank);
   for(let i = 0; i<rank.length; i++){
        if(rank[i]>= k){
                prizes++;

        }

   }



   console.log(prizes);
    return prizes;


}
numPrizes(k, eg);
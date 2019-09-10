var hr = [  [ 1, 1, 1, 0, 0, 0 ],
            [ 0, 1, 0, 0, 0, 0 ],
            [ 1, 1, 1, 0, 0, 0 ],
            [ 0, 0, 2, 4, 4, 0 ],
            [ 0, 0, 0, 2, 0, 0 ],
            [ 0, 0, 1, 2, 4, 0 ] ];
var second =[
    [3, 7, -3 ,0 ,1, 8],
    [1, -4, -7 ,-8, -6, 5],
    [-8, 1, 3, 3, 5, 7],
    [-2, 4, 3, 1, 2 ,7],
    [2, 4, -5, 1, 8, 4],
    [5, -7, 6, 5, 2, 8]] //33


var test = [[  -1, 1, -1 ,0, 0 ,0],
   [ 0, -1, 0 ,0, 0 ,0],
    [-1, -1, -1, 0, 0, 0],
   [0, -9, 2, -4, -4, 0],
    [-7, 0 ,0 ,-2, 0, 0],
  [  0, 0, -1, -2, -4, 0 ] ]  //0

            
function hoursGlass(arr){
    //first grab first hourGlass
    //console.log(arr[0]); //Cool 6 rows
    let score = []; //cause I can store undefined here
    let topScore =-800;
   for(let row = 0; row < arr.length; row++){
       for(let c =0; c < 3; c++ ){
           if(arr[row + 2] != undefined){
               let sum =0;
              
            sum += arr[row][c]; //top right
            console.log(arr[row][c]);
            sum += arr[row][c + 1]; //top middle
            console.log(arr[row][c + 1]);
            sum += arr[row][c + 2]; //top left
            console.log(arr[row][c + 2]);
            sum += arr[row + 1 ][c +1]; //middle
            console.log(arr[row + 1 ][c +1]);
            sum += arr[row + 2][c]; //bottom left
            console.log(arr[row + 2][c]);
            sum += arr[row + 2][c + 1]; //bottom middle
            console.log(arr[row + 2][c + 1]);
            sum += arr[row + 2][c + 2]; //bottom right
            console.log('Final',arr[row + 2][c + 2]);
            console.log('Total is: ', sum);
           score.push(sum);
           
           
           }
            
       
       }
   }
   //quickly get the largest score

   console.log(score);
   for(let i=0; i<score.length; i++){
        if(topScore< score[i]){
            topScore = score[i];
        }
   }
  console.log(topScore);
   //return topScore;
}

//hoursGlass(test);


function hourglassSum(arr) {
    let f = Math.pow((arr.length - 2),2);
    console.log(f);
    let max;
    let sum;
    let score= [];
  
    for(var i = 0; i < f; i++) {
      if(i < 4) {
        sum = arr[0][i] + arr[0][i+1] + arr[0][i+2];
        sum += arr[1][i+1];
        sum += arr[2][i] + arr[2][i+1] + arr[2][i+2];
        score.push(sum);
        if (sum > max) {
          max = sum;
        } else if (!max) {
          max = sum;
        }
      } else if (i < 8 && i >= 4) {
        sum = arr[1][i-4] + arr[1][i-3] + arr[1][i-2];
        sum += arr[2][i-3];
        sum += arr[3][i-4] + arr[3][i-3] + arr[3][i-2];
        score.push(sum);
        if (sum > max) {
          max = sum;
        }
      } else if (i < 12 && i >= 8) {
        sum = arr[2][i-8] + arr[2][i-7] + arr[2][i-6];
        sum += arr[3][i-7];
        sum += arr[4][i-8] + arr[4][i-7] + arr[4][i-6];
        score.push(sum);
        if (sum > max) {
          max = sum;
        }
      } else if (i >= 12) {
        sum = arr[3][i-12] + arr[3][i-11] + arr[3][i-10];
        sum += arr[4][i-11];
        sum += arr[5][i-12] + arr[5][i-11] + arr[5][i-10];
        score.push(sum);
        if (sum > max) {
          max = sum;
        }
      }
    }
    console.log(score.length)
    console.log(max);
    return max;
  }
  hourglassSum(test);
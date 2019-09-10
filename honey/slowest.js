var side = [[0, 2],
    [1, 3],
    [0 ,7]]

var key = [[0, 3],
[20, 5],
[2, 6],
[15, 7],
[9, 8],
[19, 9],
[24, 10],
[4, 12],
[3, 13]
]

function times(keyTimes) {
    let newAlpha = { 0: 'a', 1: 'b', 2: 'c', 3: 'd', 4: 'e', 5: 'f', 6: 'g', 7: 'h', 8: 'i', 9: 'j', 10: 'k', 11: 'l', 12: 'm', 13: 'n', 14: 'o', 15: 'p', 16: 'q', 17: 'r', 18: 's', 19: 't', 20: 'u', 21: 'v', 22: 'w', 23: 'x', 24: 'y', 25: 'z' };
    let largest = 0;
    let worstKey = 0;
    for (let i = keyTimes.length - 1; i > 0; i--) {
        //console.log(i)
        //console.log(keyTimes[i][1])
        let timer = keyTimes[i][1]
        let diff = keyTimes[i][1] - keyTimes[i - 1][1];
        if (diff > largest) {
                largest = diff;
                worstKey = keyTimes[i][0];
        }
    }
    //check first key;
    if(keyTimes[0][1] > largest){
        largest = keyTimes[0][1];
        worstKey = keyTimes[0][0];
    }
    
    //console.log(largest);
    //console.log(worstKey);
    console.log(newAlpha[worstKey]);
    return (newAlpha[worstKey]);
    



}
times(key);
//times(side);
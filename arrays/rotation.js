var arr = [ 1, 2, 3, 4, 5 ];
var numberOfRoations = 4;

function rotate(a, d){
    let rot=[];
    let ticker = d;
    for(let i=0; i<a.length; i++){
        if(ticker < a.length){
            rot.push(a[ticker]);
            ticker++;
        }else if(ticker = a.length){
            ticker = 0;
            rot.push(a[ticker]);
            ticker++;

        }
       
        

    }
    console.log(rot);
    return rot;

}

rotate(arr, numberOfRoations);

//failed 1 test?? Big test where number of elements in array = 90498; d=25231;
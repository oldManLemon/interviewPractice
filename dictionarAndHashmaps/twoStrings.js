

var one = 'ABC is the alphabet';
var two = 'A very hard test';
var a = 'beetroot';
var b = 'sandals';



function compareSubs(s1, s2){

    let mapOne ={};
    let res; 


    for(let i = 0; i <s1.length; i++){
        x= s1[i];
        mapOne[x]= x.charCodeAt(x);
        //strOne.charCodeAt(i));
    }
    //console.log(mapOne);
    //if anything matches say yes? 
    for(let i=0; i <s2.length; i++){
        //console.log(strTwo.charCodeAt(i));
       if(s2[i] in mapOne){
           res = "YES";
           break;
       }else{
           res = "NO";
       }
    }
    console.log(res);
}
//compareSubs(one, two);
compareSubs(b, a);
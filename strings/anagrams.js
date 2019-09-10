// Expected answer 4
// cde
// abc

var q = 'bugexikjevtubidpulaelsbcqlupwetzyzdvjphn';
var qq = 'lajoipfecfinxjspxmevqxuqyalhrsxcvgsdxxkacspbchrbvvwnvsdtsrdk'; //40

var t = 'fcrxzwscanmligyxyvym';
var z = 'jxwtrhvujlmrpdoqbisbwhmgpmeoke'; //30

var s = 'showman';
var w = 'woman'; //2


var a = "ced";
var b = "abc"; //4

function mapFrequency(str) {
    let result = {}
    for (let i = 0; i < str.length; i++) {
        let x = str[i];
        if (result[x] >= 1) {
            result[x]++;
        } else {
            result[x] = 1;
        }
    }
    return result;
}

function anagrams(a, b) {
    var a = a.split('');
    var b = b.split('');
    a = a.sort();
    b = b.sort();



    var larger = [];
    var smaller = [];
    var chars = [];
    if (a.length >= b.length) {
        larger = a;
        smaller = b;
    } else {
        larger = b;
        smaller = a;

    }
    //     //console.log(smaller.length);
    //    // console.log(larger.length);
    //    var lLength = larger.length;
    //    var sLength = smaller.length;
    //    var changes = 0;

    //console.log(smaller);
    //console.log(larger);
    for (let i = 0; i < smaller.length; i++) {
        for (let y = 0; y < larger.length; y++) {
            if (larger[y] == smaller[i]) {
                chars.push(larger[y]); //Correct so far
                larger.splice(y, 1);
                smaller.splice(i, 1);
                i--;
                y--;
            }

        }

    }
    //console.log(larger);
   // console.log(smaller);
   // console.log(chars);
    let result = larger.length + smaller.length;
    //console.log(result);
    return result;
 


    // for (let i = 0; i < lLength; i++) {

    //     for (let y = 0; y < sLength; y++) {
    //         if (smaller[y] == larger[i]) {
    //             chars.push(smaller[y]);
    //             smaller.splice(y, 1);
    //             larger.splice(i, 1);
    //             changes++;
    //             break;
    //             //console.log(chars);
    //             //console.log(larger);
    //             //console.log(smaller);
    //         }
    //     }
    // }
    //console.log(chars);
    //console.log(changes);

    //console.log(result);

    // chars = mapFrequency(a);
    //sec = mapFrequency(b);






}
//anagrams(a, b);
//anagrams(s, w);
//anagrams(t, z);
anagrams(q, qq);


//mapFrequency(a);








// function anagrams(a, b) {
//     var a = a.split('');
//     var b = b.split('');
//     a = a.sort();
//     b = b.sort();



//     var larger = [];
//     var smaller = [];
//     var chars = [];
//     if (a.length >= b.length) {
//         //console.log('a is bigger');
//         larger = a;
//         smaller = b;
//     } else {
//       //console.log('b is bigger');
//          larger = b;
//          //console.log(larger);
//          smaller = a;
//          //console.log(smaller);
//     }
//     //console.log(smaller.length);
//    // console.log(larger.length);

//     for (let i = 0; i < larger.length; i++) {
//         for (let y = 0; y < smaller.length; y++) {
//             if (smaller[y] == larger[i]) {
//                 chars.push(smaller[y]);
//                 smaller.splice(y, 1);
//                 larger.splice(i, 1);
//                 //break;
//                 //console.log(chars);
//                 //console.log(larger);
//                 //console.log(smaller);

//             }
//         }
//     }
//     for (let i = 0; i < larger.length; i++) {
//         for (let y = 0; y < smaller.length; y++) {
//             if (smaller[y] == larger[i]) {
//                 chars.push(smaller[y]);
//                 smaller.splice(y, 1);
//                 larger.splice(i, 1);
//                 //break;
//                 //console.log(chars);
//                 //console.log(larger);
//                 //console.log(smaller);

//             }
//         }
//     }

//     //console.log(larger);
//     //console.log(smaller);
//     console.log(a);
//     console.log(a.length);
//     console.log(b.length);
//     console.log(chars);
//     console.log(chars.length);
//     let stepOne = larger.length;
//     let stepTwo = smaller.length;
//     let result = stepOne+ stepTwo;
//     console.log(result);
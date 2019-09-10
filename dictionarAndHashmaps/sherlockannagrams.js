// 2
// abba
// abcd
//var t = 'Two strings are anagrams of each other if the letters of one string can be rearranged to form the other string. Given a string, find the number of pairs of substrings of the string that are anagrams of each other. ';
var two = 'ifailuhkqq';
var str = 'abba';

function anagram(s) {
        let storage = [];
        let sMap = {};
        count = 0;
    
      for (let i = 0; i < s.length; i++) {
          
        for (let j = i + 1; j < s.length + 1; j++) {
            
          storage.push(s.slice(i, j));
        }
      }
      console.log(storage);
      //Now create a hash map and maybe some maths
      //OK lets loop through the storage, then check maths and see if that matches any other


      for(let i=0; i<storage.length; i++){
          x = storage[i];
          sMap[i] = x;
      }


     
      //console.log(sMap);
      

      //if the string is the same as orginal ignore!
      // OK lets find all pairs first and remove them
      for(let i=0; i<storage; i++){
        let x = storage[i];
        if(sMap[x]){
            sMap[x]++
        }else{
            sMap[x] = 1;
        }
      }
      console.log(sMap);
    
      
    
}
    

anagram(str);
//anagram(two);



//function anagram(s) {
    //     let storage = [];
    //     let sMap = {};
    
    //   for (let i = 0; i < s.length; i++) {
          
    //     for (let j = i + 1; j < s.length + 1; j++) {
            
    //       storage.push(s.slice(i, j));
    //     }
    //   }
    //   console.log(storage);
    //   //Now create a hash map and maybe some maths
    //   //OK lets loop through the storage, then check maths and see if that matches any other
    //   for(let i=0; i<storage.length; i++){
    //       x = storage[i];
    //       sMap[i] = x;
    //   }
    //   //console.log(sMap);
    //   storageTwo = []
    //   //if the string is the same as orginal ignore!
    //   // OK lets find all pairs first and remove them
    //   for(let i=0; i<storage.length; i++){
    //       //remove easy pairs to find
    //       for(let j = storage.length -1; j > 0; j--){
    //           if(sMap[i] == storage[j]){
    //            // console.log(sMap[i], storage[j]);
    
    //             storageTwo.push(storage.splice(j,1));
    //           }
            
    //       }
          
    //   }
      
      
    // }
    
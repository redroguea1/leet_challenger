/*
Alice and Bob have a different total number of candies. You are given two integer arrays aliceSizes and bobSizes where aliceSizes[i] is the number of candies of the ith box of candy that Alice has and bobSizes[j] is the number of candies of the jth box of candy that Bob has.

Since they are friends, they would like to exchange one candy box each so that after the exchange, they both have the same total amount of candy. The total amount of candy a person has is the sum of the number of candies in each box they have.

Return an integer array answer where answer[0] is the number of candies in the box that Alice must exchange, and answer[1] is the number of candies in the box that Bob must exchange. If there are multiple answers, you may return any one of them. It is guaranteed that at least one answer exists.


Example 1:
Input: aliceSizes = [1,1], bobSizes = [2,2]
Output: [1,2]

https://leetcode.com/problems/fair-candy-swap/description/


August 9th 2023
*/

var candyBox(a, b){
    let output = [];
    let i, j = 0;
  
    //ex. 1
    //alice total of 2 candies
    //bob total 4 candies
    //total candy = 6 
    //balance = total/2 
    //alice gives him 1 candy
    //bob gives her 2 candies
  
    let aTotal, bTotal = 0;
     //reduce method might be another option as well. 
    for(let e =0; e<b.length; e++){
      aTotal += a[e];
    }
   for(let f =0; f<b.length; f++){
      bTotal += b[f];
    }
    let avg = (aTotal+bTotal)/2
  
  
    //version 2
    
    
    while (output.length<2){
      //return alice first 
      let outie = b.find((candy) => bTotal - avg)
      console.log(outie);
      //need to make sure we have a positive value. 
      if (aTotal<=avg) {
        
        //find the difference in b and add it to the output array. 
      }
      else {
        //
      }
        
        
      }
      i++;
      j++
    }
    return output 
  }
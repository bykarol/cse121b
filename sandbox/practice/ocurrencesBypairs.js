'use strict';
/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
  ar.sort((a,b)=> a-b)
  // console.log(ar);
  let countRepeated = []
  let filteredRepeated
  let counter = 1;
  for(let i=0; i< n; i++) {
    if(ar[i+1] === ar[i]){
      counter++
    } else{
      // uniqueValues.push(ar[i])
      countRepeated.push(counter)
      filteredRepeated = countRepeated.filter((el)=> el >= 2).map((el)=>{
        return Math.trunc(el/2)
      }).reduce((acc, value)=>{ return acc +value}, 0 )
      counter = 1
    }
  };
  return filteredRepeated;
}

// const array = [3, 3, 1, 2, 1, 2, 1, 3, 2, 3, 5]
const array = [100, 10, 20, 20, 10, 10, 30, 50, 50, 100]
console.log(sockMerchant(array.length, array));
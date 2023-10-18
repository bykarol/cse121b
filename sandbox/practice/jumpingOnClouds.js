/* 
There is a new mobile game that starts with consecutively numbered clouds.
Some of the clouds are thunderheads and others are cumulus.
The player can jump on any cumulus cloud having a number that is equal to 
the number of the current cloud plus 1 or 2.  
The player must avoid the thunderheads. Determine the minimum number of jumps it will
 take to jump from the starting postion to the last cloud. It is always possible to win the game.
For each game, you will get an array of clouds numbered 0 if they are safe or 1 if they must be avoided.
*** Function Description ***
** jumpingOnClouds has the following parameter(s):
int c[n]: an array of binary integers
** Returns
int: the minimum number of jumps required
*/

/*
 * Complete the 'jumpingOnClouds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY c as parameter.
 */

function jumpingOnClouds(c) {
  let jumps = 0
  let i = 0
  let flag = true
  while(flag){
    if(c[i+2] === 0){
      jumps++
      i+= 2
    }
    else {
      jumps++
      i++
    }
    if((i === c.length ) || (i === c.length-1)){
      flag = false
    }
  }
  return jumps
}
const array = [0,1,0,0,1,0,1]
console.log(jumpingOnClouds(array));
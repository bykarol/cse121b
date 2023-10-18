/**
 There is a string, s, of lowercase English letters that is repeated infinitely many times. 
 Given an integer, n, find and print the number of letter a's in the first  letters of the 
 infinite string.
 */

 /* The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */

 function repeatedString(s, n) {
  let newString = s.repeat(n).split("").splice(0, n)
  const aQty = newString.filter((el)=> el === "a").join("").length
  return aQty 
}

const string = "a"
const num = 1000000
console.log(repeatedString(string, num));
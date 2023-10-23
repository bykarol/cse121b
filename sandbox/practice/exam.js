function getSearchResults(words, queries) {
  let matches = []
  let anagrams = []
  for (let i = 0; i < queries.length; i++) {
    let sortedQuery = queries[i].split("").sort().join("")
    for (let j = 0; j < words.length; j++) {
        let sortedWord = words[j].split("").sort().join("")
        if(sortedQuery.length === sortedWord.length){
          if(sortedQuery === sortedWord){
            matches.push(words[j])
            anagrams.push(queries[i])
          }
        }
    
  }}
  return [[...new Set(matches)], [...new Set(anagrams)]]
  // return [matches, anagrams]
}

const words= ["duel", "speed", "dule", "cars"]
const queries = ["spede", "deul"]
// const words= ["allot", "cat", "peach", "dusty", "act"]
// const queries = ["tac", "study", "peahc"]
console.log(getSearchResults(words, queries))

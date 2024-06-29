var str1='silent'

var str2='listen'

var sortedString1=str1.split("").sort().join("")

var sortedString2=str2.split("").sort().join("")

console.log(sortedString1 == sortedString2 ? "Anagram" : "Not Anagram");

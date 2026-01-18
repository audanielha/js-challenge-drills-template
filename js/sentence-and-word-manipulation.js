
function manipulateSentence(sentence, word) {
    // Your implementation here
    let splitSentence = sentence.split(" ");
    let modifiedItems = splitSentence.map(item => word.concat(item));
    return modifiedItems
}
// Sample Input
const inputSentence = "JavaScript is fun";
const inputWord = "Awesome";
// Expected Output
// {
//   newSentence: "Awesome JavaScript is fun",
//   modifiedArray: ["AwesomeJavaScript", "Awesomeis", "Awesomefun"]
// }
const result = manipulateSentence(inputSentence, inputWord);
console.log(result)

function manipulateSentence(sentence, word) {
    // Your implementation here
    let splitSentence = [...sentence.split(" ")]

    let modifiedArray = [splitSentence.map(()=>{
        for(let i = 0; i < splitSentence.length; i++){
           return (word.concat(splitSentence[i]))
        }
    })]
    return modifiedArray;
}
// Sample Input
const inputSentence = "JavaScript is fun test";
const inputWord = "Awesome";
// Expected Output
// {
//   newSentence: "Awesome JavaScript is fun",
//   modifiedArray: ["AwesomeJavaScript", "Awesomeis", "Awesomefun"]
// }
const result = manipulateSentence(inputSentence, inputWord);
console.log(result);
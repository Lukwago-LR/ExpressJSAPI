export default function shortestWord(sentence) {
    let strL = sentence.split(" ");
    var shortestWord = strL[0];
    for (let word of strL) {
        if (word.length <= shortestWord.length) {
            shortestWord = word;
        }
    }
    return shortestWord;
}
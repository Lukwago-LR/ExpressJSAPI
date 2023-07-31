export default function longestWord(sentence) {
    let strL = sentence.split(" ");
    var longestWord = strL[0];
    for (let word of strL) {
        if (word.length >= longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}
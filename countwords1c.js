//After cleaning the text in the sentence from question number b you will get the following text. Count the number of words in this text. Don't include words with only one letter.

sentence='I am a teacher and I love teaching There is nothing as more rewarding as educating and empowering people I found teaching more interesting than any other jobs Does this motivate you to be a teacher';
function countWords(sentence) {
    return sentence.split(' ').length;
}
console.log(countWords(sentence));

//write your code here
const countWordFrequency = (sentence) => {
    let words = sentence.split(" ");
    let obj = {};

    for (let i = 0; i < words.length; i++) {
        if (obj[words[i]]) {
            obj[words[i]] += 1;
            continue;
        }
        obj[words[i]] = 1;
    }
    console.log(obj);
} 
countWordFrequency("the cat and the hat");
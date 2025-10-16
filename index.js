//"hello world hello" -> {"hello":2, "world": 1}
const countWordFrequency = (sentence) => {
  // Split the sentence into an array of words
  // "hello world" -> ["hello", "world", "hello"]
  const words = sentence.split("");

  // Create frequency object to store { word: frequency } pairs
  const frequency = {};

  // Create a for loop to iterate through the words array
  for (let i = 0; i < words.length; i++) {
    // Store the current word in the words array, inside the word variable
    const word = words[i];
    // Checking if our current word is not inside the frequency object 
    if (frequency[word] === undefined) {
        // Start the count for our current word in the frequency object
      frequency[word] = 1;
    } else {
        // If our word is already in the object, just add one more to the count
      frequency[word]++;
    }
  }
  // return the frequency object after the end of the for loop
  return frequency;
};

// Test the function
console.log(countWordFrequency("hello world hello"));
console.log(countWordFrequency("the cat and the hat"));
// { the: 2, cat: 1, and: 1, hat: 1 }

// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = 'This is the text string that you will generate with your script';
var speakButton = document.querySelector('button');

// Word arrays based on the image provided in the assignment
var nouns = ["girl", "boy", "dog", "cat", "ball", "rabbit", "pen"];
var verbs = ["played", "jumped", "ran", "saw", "built", "read", "sing"];
var adjectives = ["happy", "sad", "funny", "tired", "big", "cry", "small", "red"];
var anotherNouns = ["house", "tree", "park", "school", "car"];
var places = ["beach", "forest", "mountain", "jungle", "space", "house", "school"];

// Global variable to store the story
let currentStory = "";

/* Functions
-------------------------------------------------- */
function speakNow(currentStory) {
  // Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(currentStory);
  // Actually speak the text
	synth.speak(utterThis);
}

// Event listeners for each button when clicked
document.getElementById("getNoun").addEventListener("click", function() {
	//Defining randomIndex 
    var randomIndex = Math.floor(Math.random() * nouns.length);
	//To select any noun randomly from the list of nouns in the array
	var selectedNoun = nouns[randomIndex];
	//Adding the selected noun to previous word and concatenating 
	currentStory += selectedNoun + " ";
	document.getElementById("currentStory").value = currentStory;
});

document.getElementById("getVerb").addEventListener("click", function() {
	//Defining randomIndex
    const randomIndex = Math.floor(Math.random() * verbs.length);
	//To select any noun randomly from the list of nouns in the array
	const selectedVerb = verbs[randomIndex];
	//Adding the selected noun to previous word and concatenating
	currentStory += selectedVerb + " ";
	document.getElementById("currentStory").value = currentStory;
});

document.getElementById("getAdjective").addEventListener("click", function() {
	//Defining randomIndex
    const randomIndex = Math.floor(Math.random() * adjectives.length);
	//To select any noun randomly from the list of nouns in the array
	const selectedAdjective = adjectives[randomIndex];
	//Adding the selected noun to previous word and concatenating
	currentStory += selectedAdjective + " ";
	document.getElementById("currentStory").value = currentStory;
});

document.getElementById("getAnotherNoun").addEventListener("click", function() {
	//Defining randomIndex
    const randomIndex = Math.floor(Math.random() * anotherNouns.length);
	//To select any noun randomly from the list of nouns in the array
	const selectedAnotherNoun = anotherNouns[randomIndex];
	//Adding the selected noun to previous word and concatenating
	currentStory += selectedAnotherNoun + " ";
	document.getElementById("currentStory").value = currentStory;
});

document.getElementById("getPlace").addEventListener("click", function() {
	//Defining randomIndex
	const randomIndex = Math.floor(Math.random() * places.length);
	//To select any noun randomly from the list of nouns in the array
	const selectedPlace = places[randomIndex];
	//Adding the selected noun to previous word and concatenating
	currentStory += selectedPlace + " ";
	document.getElementById("currentStory").value = currentStory;
});

// Event Listener for reading the story created
speakStory.onclick = function() {
	speakNow(currentStory);
};

document.getElementById("reset").addEventListener("click", function() {
	// Clear the current story text
	currentStory = "";
	// Clear the text display element (optional)
	document.getElementById("currentStory").value = "";
  });


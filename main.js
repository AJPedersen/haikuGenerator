// Preset word bank.
var wordBank = {
	oneSyl: [ "Heart", "Love", "On", "Near" ],
	twoSyl: [ "Purple", "Pizza", "Silver", "Princess" ],
    threeSyl: [ "Orange", "Banana", "Animal", "Piano" ],
    fourSyl: [ "America", "Beautiful", "Irregular", "Intermittent" ],
    fiveSyl: [ "Alliteration", "Personality", "Abominable", "California" ]
};

// Empty words arrays, populates with user input then from wordBank.
var words = {
	oneSyl: [  ],
	twoSyl: [  ],
    threeSyl: [  ],
    fourSyl: [  ],
    fiveSyl: [  ]
};

// replace commas and doubel spaces with a single space
function cleanInput(id){
	var input = document.getElementById(id).value;
	if (input != "" && input != undefined) { 
		var noCommas = input.replace( /,/g , ' ' );
		var noDSpace = noCommas.replace( /\s\s+/g, ' ' );
		var inputArray = noDSpace.split(" ");
		return inputArray;
	}
	
};

// If there is user input and it is greater than one word then run it through cleanInput
function getUserInput(id){
	var userInput = cleanInput(id);
	if (userInput != undefined && userInput.length > 0) {
		words[id] = userInput;
	}
	if (words[id].length < 2) {
		bankToWords(id)
	}
};

// If < 2 words in array, push words into words.
function bankToWords(id) {
	var shuffledBank = shuffle(wordBank[id]);
	var i = 0;
	while (words[id].length < 2) {
			words[id].push(wordBank[id][i])
			i++
		}
}

// Runs syl 1-5 through getUserInput
function getAllUserInput(){
	getUserInput("oneSyl");
	getUserInput("twoSyl");
	getUserInput("threeSyl");
	getUserInput("fourSyl");
	getUserInput("fiveSyl");
}

// For loop that assigns words to the right syllable target.
function populate(target){
	// html elements where words need to go
	var targets = document.getElementsByClassName(target+"Out");
	// words
	var sylArray = words[target];
	// put words into html
	for (var i = 0; i < targets.length; i++) {

		targets[i].innerHTML = sylArray[i];
	
	}
}

// Runs syl 1-5 through the populate function.
function populateAll(){
	populate("oneSyl"); 
	populate("twoSyl"); 
	populate("threeSyl"); 
	populate("fourSyl"); 
	populate("fiveSyl"); 
}

// Erases array contents.
function clearAll() {
	for (var key in words) {
		words[key]=[];
	}
}

// Executes the main functions to make all the things work.
function generateHaiku() {
	clearAll();
	getAllUserInput();
	shuffleAll();
	populateAll();
}

// Runs syl 1-5 through the shuffle function.
function shuffleAll() {
	oneSyl = shuffle(words.oneSyl);
	twoSyl = shuffle(words.twoSyl);
	threeSyl = shuffle(words.threeSyl);
	fourSyl = shuffle(words.fourSyl);
	fiveSyl = shuffle(words.fiveSyl);
}

// Shuffles things.
function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
};


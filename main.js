
var words = {
	oneSyl: [ "Everything", "Everybody", "Nothing", "Someone" ],
	twoSyl: [ "Orange", "Rough", "Smooth", "Awesome" ],
    threeSyl: [ "Runs", "Touches", "Eats", "Spins" ],
    fourSyl: [ "Good", "New", "Different", "Young" ],
    fiveSyl: [ "Good", "New", "Different", "Young" ]
};
 
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

function populateAll(){
	populate("oneSyl"); 
	populate("twoSyl"); 
	populate("threeSyl"); 
	populate("fourSyl"); 
	populate("fiveSyl"); 
}

function generateHaiku() {
	shuffleAll();
	populateAll();
}

function shuffleAll() {
	oneSyl = shuffle(words.oneSyl);
	twoSyl = shuffle(words.twoSyl);
	threeSyl = shuffle(words.threeSyl);
	fourSyl = shuffle(words.fourSyl);
	fiveSyl = shuffle(words.fiveSyl);
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
};

/*User Input*/

function cleanInput(id){
	var input = document.getElementById(id);
	var noCommas = input.replace( /,/g , ' ' );
	var noDSpace = noCommas.replace( /\s\s+/g, ' ' );
	var inputArray = noDSpace.split(" ");

	return inputArray;
};

function userOutput(id){
	var userOutput = cleanInput(id);
	shuffle(userOutput);
	return userOutput; 
};


/*

if no user input pull words from word bank, use .getElementById, .innerText to insert text into haiku

if user input (all forms filled out) validate syllables with words api; if # of syllables != correct # then ask user to correct (highlight words in red as soon as typed so user doesnt have to go back and fill out form again?)

if user input validates, pull words from user input

*/



/* 

A traditional Japanese haiku is a three-line poem with seventeen syllables, written in a 5/7/5 syllable count.

			 Template haikus

			 Follow rules of speech.


				    Eve ry thing I touch // (3s pronoun) I (1s verb)

					with ten der ness, a las, // with (3s adjective), alas,

					pricks like a bram ble. // (1s verb) like a (2s noun).


			 Trust user to put in correct # of syllables and follow rules of speech/directions. 

			 User input validation using an API? Wordsapi.com


HAIKU EXAMPLES:

In the moonlight,

The color and scent of the wisteria

Seems far away.

---

Everything I touch

with tenderness, alas,

pricks like a bramble.

---

The crow has flown away:

swaying in the evening sun,

a leafless tree.  

---

Over-ripe sushi,
The Master
Is full of regret.

---

I kill an ant
and realize my three children
have been watching.

---

Space is limited
In a haiku, so it's hard
To finish what you

--

I see you driving
Round town with the girl I love
And I'm like haiku.

---

World is vast and wide.
So much out there to explore.
Right now, let's eat lunch.

 */
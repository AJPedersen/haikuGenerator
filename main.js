
 var pronouns = [ "Everything", "Everybody", "Nothing", "Someone" ];
 
 var pronoun = pronouns[Math.floor(Math.random() * pronouns.length)];

		function insertInput() {
		 	document.getElementById("pronoun").innerHTML = pronoun;
	} 


		document.onreadystatechange = function stopRefresh (event){

		var listener = document.querySelector('form')
		listener.addEventListener("submit", checkInput);

	}

	function checkInput (event){ 

		event.preventDefault();

		var formData = new FormData(document.querySelector('form'));
		formData.entries().forEach(function(value, key){
			
		});
		console.log(formData);
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
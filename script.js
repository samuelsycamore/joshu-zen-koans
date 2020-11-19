const joshuKoans = [
  `<h2>Joshu’s Dog</h2>

A monk asked Joshu,<br>
“Does a dog have Buddha-nature?”<br>
Joshu replied, “<a href="https://en.wikipedia.org/wiki/Mu_(negative)#The_Mu-k%C5%8Dan" target="_blank">無!</a>”
`,

  `<h2>Joshu’s Bowl</h2>

A monk said to Joshu,<br>
“I have just arrived at this monastery.<br>
I beg you, please teach me.”<br>
Joshu asked, “Have you eaten your porridge?”<br>
The monk replied, “I have.”<br>
Joshu responded, “Then go and wash your bowl.”<br>
At that moment the monk was enlightened.
`,

  `<h2>Joshu Visits the Hermit</h2>

Joshu went to visit a hermit and asked,<br>
“How are you? What’s going on?”<br>
The hermit lifted up his fist.<br>
Joshu said, “The water is too shallow to anchor here,”<br>
and went away.<br>
A few days later, Joshu visited the hermit once again and asked how he was doing.<br>
The hermit raised his fist again.<br>
This time Joshu said,<br>
“Well given, well taken, well killed, well saved.”<br>
And he bowed to the hermit.
`,

  `<h2>Nansen Kills the Cat</h2>

Nansen saw the monks from two different halls of the monastery fighting over a kitten.<br>
He seized it from the group and said,<br>
“If any of you can say a single word of Zen right now,<br>
I will spare this cat’s life. Otherwise I will kill it.”<br>
No one had a response. So Nansen cut the cat in half.<br>
That evening, when Joshu returned, Nansen told him what happened.<br>
Joshu took off his sandals, placed them on his head, and walked away.<br>
Nansen said,<br>
“If only you had been there, you could have saved the cat.”
`,

  `<h2>Nansen’s Ordinary Mind</h2>

Joshu asked Nansen, “What is The Way?”<br>
Nansen answered, “Your ordinary mind — that is The Way.”<br>
Joshu asked, “Can it be understood?”<br>
Nansed replied,<br>
“The more you pursue it, the more it slips away.”<br>
Joshu asked,<br>
“How can you know that it is The Way?”<br>
Nansen responded,<br>
“The Way does not belong to knowledge,<br>
nor does it belong to non-knowledge.<br>
Knowledge is illusion.<br>
Non-knowledge is beyond comprehension.<br>
When you get to The Way without doubt,<br>
you are as free as the vastness of space,<br>
an unfathomable void;<br>
so how could you explain it with a yes-or-no?”<br>
Upon hearing this, Joshu was awakened.
`,

  `<h2>Joshu’s Oak Tree</h2>

A monk asked Joshu,<br>
“Why did the Bodhidharma come to China?”<br>
Joshu replied,<br>
“The oak tree in the front garden.”
`,

  `<h2>Joshu’s Zen</h2>

A monk asked Joshu,<br>
“If I don’t have anything on my mind, what should I do?”<br>
Joshu answered,<br>
“Throw it out.”<br>
“But if I don’t have anything,” replied the student,<br>
“how would I throw it out?”<br>
“Well then,” said Joshu, “carry it out.”
`,

  `<h2>The Real Way is Not Difficult</h2>

Joshu addressed an assembly of monks:<br>
“The Real Way is not difficult, but it dislikes The Relative.<br>
All speech is concerned with either The Relative or The Absolute.<br>
This old monk is not within The Absolute.<br>
What do you think about that?”<br>
A monk said,<br>
“If you are not within The Absolute, how can you judge its value?”<br>
Joshu replied, “I don’t know.”<br>
“But Master Joshu,” argued the monk,<br>
“if you don’t know, then how can you say that you are not within The Absolute?""<br>
Joshu responded, “Great question. Let’s finish up now and leave.”
`,

  `<h2>Joshu Asks About Death</h2>

Joshu asked Tosu,<br>
“What if a person who has died a great death comes back to life?”<br>
Tosu replied,<br>
“I don’t allow walking about in the night. Come in the daylight.”
`
];

//const infoLinks = document.querySelector('.infoContainer');

//const infoDisplay = document.createElement('div');
//infoDisplay.textContent = `Here's some text let's see what happens`;
//infoLinks.appendChild(infoDisplay);

const koanBtn = document.querySelector('#koanBtn');
koanBtn.addEventListener('click', newKoan);

function newKoan() {
let randomNumber = Math.floor(Math.random() * (joshuKoans.length));
document.getElementById("koanDisplay").innerHTML = joshuKoans[randomNumber];
};

function toggleMe(a) {
   let e = document.getElementById(a);
   let toggleIcon = document.getElementById('toggle-icon');
   if(!e) return true;

   if(e.style.display == "none") {
      e.style.display = "block";
      toggleIcon.innerHTML = '-';
   }
   else {
      e.style.display = "none";
      toggleIcon.innerHTML = '+';
   }
   return true;
}

//const nav = document.querySelectorAll('li');

// we use the .forEach method to iterate through each button
//nav.forEach((li) => {

  // and for each one we add a 'click' listener
  //li.addEventListener('click', () => {
    //const infoLinks = document.querySelector('.infoContainer');

    //const infoDisplay = document.createElement('div');
    //infoDisplay.textContent = `Here's some text let's see what happens`;
    //infoLinks.appendChild(infoDisplay);
//  });
//});

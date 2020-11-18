const joshuKoans = [
  `<h2>Joshu’s Dog</h2>

A monk asked Joshu, “Does a dog have Buddha-nature?”<br>
Joshu replied, “MU!”
`,

  `<h2>Joshu’s Bowl</h2>

A monk said to Joshu, “I have just arrived at this monastery. I beg you, please teach me.”<br>
Joshu asked, “Have you eaten your porridge?”<br>
The monk replied, “I have.”<br>
Joshu responded, “Then go and wash your bowl.”<br>
At that moment the monk was enlightened.
`,

  `<h2>Joshu Visits the Hermit</h2>

Joshu went to visit a hermit and asked, “How are you? What’s going on?”<br>
The hermit lifted up his fist.<br>
Joshu said, “The water is too shallow to anchor here,” and went away.<br>
A few days later, Joshu visited the hermit once again and asked how he was doing.<br>
The hermit raised his fist again.<br>
This time Joshu said, “Well given, well taken, well killed, well saved.” And he bowed to the hermit.
`,

  `<h2>Nansen Kills the Cat</h2>

Nansen saw the monks from two different halls of the monastery fighting over a kitten.<br>
He seized it from the group and said, “If any of you can say a single word of Zen right now, I will spare this cat’s life. Otherwise I will kill it.”<br>
No one had a response. So Nansen cut the cat in half.<br>
That evening, when Joshu returned, Nansen told him what happened.<br>
Joshu took off his sandals, placed them on his head, and walked away.<br>
Nansen said, “If only you had been there, you could have saved the cat.”
`,

  `<h2>Nansen’s Ordinary Mind</h2>

Joshu asked Nansen, “What is The Way?”<br>
Nansen answered, “Your ordinary mind — that is The Way.”<br>
Joshu asked, “Can it be understood?”<br>
Nansed replied, “The more you pursue it, the more it slips away.”<br>
Joshu asked, “How can you know that it is The Way?”<br>
Nansen responded,<br>
“The Way does not belong to knowledge, nor does it belong to non-knowledge.<br>
Knowledge is illuion. Non-knowledge is beyond comprehension.<br>
When you get to The Way without doubt, you are as free as the vastness of space, an unfathomable void;<br>
so how could you explain it with a yes-or-no?”<br>
Upon hearing this, Joshu was awakened.
`,

  `<h2>Joshu’s Oak Tree</h2>

A monk asked Joshu, “Why did the Bodhidharma come to China?”<br>
Joshu replied, “The oak tree in the front garden.”
`,

  `<h2>Joshu’s Zen</h2>

Joshu began studying Zen at age sixty, and became enlightened at eighty.<br>
He then taught Zen until he died at 120 years old.<br>
A student once asked him, “If I don’t have anything on my mind, what should I do?”<br>
Joshu answered, “Throw it out.”<br>
“But if I don’t have anything,” replied the student, “how would I throw it out?”<br>
“Well then,” Joshu responded, “carry it out.”
`,

  `<h2>The Real Way is Not Difficult</h2>

Joshu addressed an assembly of monks:<br>
“The Real Way is not difficult, but it dislikes The Relative.<br>
All speech is concerned with either the Relative or the Absolute.<br>
This old monk is not within the Absolute.<br>
What do you think about that?”<br>
A monk said, “If you are not within the Absolute, how can you judge its value?”<br>
Joshu replied, “I don’t know.”<br>
“But Master Joshu,” argued the monk,<br>
“if you don’t know, then how can you say that you are not within the Absolute?<br>
Joshu responded, “Great question. Let’s finish up now and leave.”
`,

  `<h2>Joshu Asks About Death</h2>

Joshu asked Tosu, “What if a person who has died a great death comes back to life?”
Tosu replied, “I don’t allow walking about in the night. Come in the daylight.”
`
]


let newKoan = () => {
let randomNumber = Math.floor(Math.random() * (joshuKoans.length));
document.getElementById('koanDisplay').innerHTML = joshuKoans[randomNumber];
}

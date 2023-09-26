// Define an array of characters with information
const characters = [
  {
    id: "fiona-the-frenchie",
    name: "Fiona The Frenchie",
    description:
      "I am Fiona the Frenchie! I love long walks on the beach, sleeping for hours and being happy!",
  },
  {
    id: "roberto-the-frontendman",
    name: "Roberto The Frontendman",
    description:
      "I am Roberto the Frontendman! And I've recently completed a six month front-end development education. I'm now looking for an internship to further develop my skills and knowledge. As a front-end developer my passion is clean design combined with great user experience. My vision is that a website should both be purposeful and aesthetically pleasing. I am proficient in various front-end skills such as HTML/CSS, Javascript, React and Figma. I am currently a learner of Google UX Design Certificate",
  },
  {
    id: "roberto-the-pizzaman",
    name: "Roberto The Pizzaman",
    description:
      "i am roberto the pizzaman! I love pizza! I've built a wood fired oven where I bake my pizzas. And I'm constantly trying to improve my recipe, even “dough” my pizza turns out great 9 out of 10 times. Using a scale to weigh ingredients it's really fun to see the difference 1% of water, type of flour, shorter or longer hours of proofing can do for a pizza.",
  },
];

// Create an array of elements by mapping over the characters and getting DOM elements by their id
const elements = characters.map((character) => ({
  img: document.getElementById(character.id), // Character's image
  name: document.getElementById("character-name"), // DOM element for character name
  description: document.getElementById("character-about-text"), // DOM element for character description
}));

let timer; // Initialize a timer variable

// Add click event listeners to each character's image
elements.forEach(({ img, name, description }, index) => {
  img.addEventListener("click", () => {
    // Display the character's name in uppercase
    name.textContent = characters[index].name.toUpperCase();

    const myArray = characters[index].description.split(""); // Split the character's description into an array of characters

    description.textContent = ""; // Clear the description text
    clearInterval(timer); // Clear any previous timer

    // Set up a new timer to display the description with a typewriter effect
    timer = setInterval(() => {
      description.textContent += myArray.shift().toUpperCase(); // Add one character at a time in uppercase
    }, 42); // 42 milliseconds delay between characters
  });
});

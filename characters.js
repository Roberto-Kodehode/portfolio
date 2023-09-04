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
      "I am Roberto the Frontendman! And I've recently completed a six month front-end development education. I'm now looking for an internship to further develop my skills and knowledge. As a front-end developer my passion is clean design combined with great user experience. My vision is that a website should both be purposeful and aesthetically pleasing. I am proficient in various front-end skills such as HTML/CSS, Javascript, React and Figma. I like to keep up with the latest trends. This allows me to ensure that my work is modern and relevant.",
  },
  {
    id: "roberto-the-pizzaman",
    name: "Roberto The Pizzaman",
    description:
      "i am roberto the pizzaman! I love pizza! I've built a wood fired oven where I bake my pizzas. And I'm constantly trying to improve my recipe, even “dough” my pizza turns out great 9 out of 10 times. Using a scale to weigh ingredients it's really fun to see the difference 1% of water, type of flour, shorter or longer hours of proofing can do for a pizza.",
  },
];

const elements = characters.map((character) => ({
  img: document.getElementById(character.id),
  name: document.getElementById("character-name"),
  description: document.getElementById("character-about-text"),
}));

let timer;

elements.forEach(({ img, name, description }, index) => {
  img.addEventListener("click", () => {
    name.textContent = characters[index].name.toUpperCase();

    const myArray = characters[index].description.split("");

    description.textContent = "";
    clearInterval(timer);

    timer = setInterval(() => {
      description.textContent += myArray.shift().toUpperCase();
    }, 42);
  });
});

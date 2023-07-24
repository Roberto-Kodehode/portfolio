const level = [
  {
    id: "level-11",
    name: "PROJECT VENUS",
    imageSrc: "img/venus.png",
    description:
      "First project at Kodehode! Designing webpage in Figma, then utilze what we had learnt for the...",
  },
  {
    id: "level-21",
    name: "PROJECT HELL",
    imageSrc: "img/666.png",
    description:
      "First javascript basic project. bla bla bla, manipulating DOM",
  },
  {
    id: "level-31",
    name: "PROJECT CHUCK",
    imageSrc: "img/chuck.png",
    description: "javascript advanced. drumkit?",
  },
  {
    id: "level-41",
    name: "PROJECT PIZZA",
    imageSrc: "img/placeholder.png",
    description: "pizza library?",
  },
  {
    id: "level-51",
    name: "PROJECT DRUM",
    imageSrc: "img/chuck.png",
    description: "DRUMKIT BLA BLA BLA",
  },
  {
    id: "level-boss",
    name: "PROJECT CALCULATOR",
    imageSrc: "img/placeholder.png",
    description: "REACT calculator",
  },
];

const elements = level.map((lvl) => ({
  btn: document.getElementById(lvl.id),
  name: document.getElementById("card-title"),
  image: document.getElementById("card-img"),
  description: document.getElementById("card-description"),
}));

elements.forEach(({ btn, name, description, image }, index) => {
  btn.addEventListener("click", () => {
    name.textContent = level[index].name;
    description.textContent = level[index].description;
    image.src = level[index].imageSrc;
  });
});

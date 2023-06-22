const level = [
  {
    id: "level-11",
    name: "Venus?",
    imageSrc: "img/placeholder.png",
    description:
      "First project at Kodehode! Designing webpage in Figma, then utilze what we had learnt for the...",
  },
  {
    id: "level-21",
    name: "LEVEL 2-1",
    imageSrc: "img/hell.png",
    description:
      "First javascript basic project. bla bla bla, manipulating DOM",
  },
  {
    id: "level-31",
    name: "LEVEL 3-1",
    imageSrc: "img/placeholder.png",
    description: "javascript advanced. drumkit?",
  },
  {
    id: "level-41",
    name: "LEVEL 4-1",
    imageSrc: "img/placeholder.png",
    description: "pizza library?",
  },
  {
    id: "level-51",
    name: "LEVEL 5-1",
    imageSrc: "img/chuck.png",
    description: "chuck norris. API?",
  },
  {
    id: "level-boss",
    name: "BOSS !",
    imageSrc: "img/placeholder.png",
    description: "REACT-project",
  },
];

const elements = level.map((lvl) => ({
  btn: document.getElementById(lvl.id),
  name: document.getElementById("card-title"),
  image: document.getElementById("card-img"),
  description: document.getElementById("card-description"),
}));

elements.forEach(({ btn, name, description }, index) => {
  btn.addEventListener("click", () => {
    name.textContent = level[index].name;
    description.textContent = level[index].description;
    image.src = level[index].imageSrc;
  });
});

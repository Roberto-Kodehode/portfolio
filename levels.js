const level = [
  {
    id: "level-11",
    name: "PROJECT VENUS",
    imageSrc: "img/venus.png",
    description:
      "IN MY INITIAL PROJECT AT KODEHODE, I UTILIZED FIGMA FOR LAYOUT VISUALIZATION AND HTML/CSS FOR DESIGN IMPLEMENTATION, RESULTING IN A POLISHED AND USER-FRIENDLY OUTCOME.",
    github: "Github",
    linkTitle: "VENUS",
    links: "https://roberto-kodehode.github.io/venus/",
  },
  {
    id: "level-21",
    name: "PROJECT HELL",
    imageSrc: "img/666.png",
    description:
      "First javascript basic project. bla bla bla, manipulating DOM",
    github: "denne er til Github",
    linkTitle: "Link tittel",
    links: "Dette er lenken",
  },
  {
    id: "level-31",
    name: "PROJECT CHUCK",
    imageSrc: "img/chuck.png",
    description: "javascript advanced. drumkit?",
    github: "denne er til Github",
    linkTitle: "Link tittel",
    links: "Dette er lenken",
  },
  {
    id: "level-41",
    name: "PROJECT PIZZA",
    imageSrc: "img/pizza.png",
    description: "pizza library? local storage",
    github: "denne er til Github",
    linkTitle: "Link tittel",
    links: "Dette er lenken",
  },
  {
    id: "level-51",
    name: "PROJECT DRUM",
    imageSrc: "img/drumkit.png",
    description: "DRUMKIT BLA BLA BLA",
    github: "denne er til Github",
    linkTitle: "Link tittel",
    links: "Dette er lenken",
  },
  {
    id: "level-boss",
    name: "PROJECT REACT",
    imageSrc: "img/calculator.png",
    description: "A CALCULATOR BUILT IN REACT. USING COMPONENTS AND USESTATE.",
    github: "denne er til Github",
    linkTitle: "Calculator",
    links: "https://chic-strudel-e1153b.netlify.app/",
  },
];

const elements = level.map((lvl) => ({
  btn: document.getElementById(lvl.id),
  name: document.getElementById("card-title"),
  image: document.getElementById("card-img"),
  description: document.getElementById("card-description"),
  github: document.getElementById("github"),
  links: document.getElementById("live"),
}));

elements.forEach(({ btn, name, description, image, github, links }, index) => {
  btn.addEventListener("click", () => {
    name.textContent = level[index].name;
    description.textContent = level[index].description;
    image.src = level[index].imageSrc;
    github.textContent = level[index].github;

    // Create an anchor element and set its textContent and href attributes
    const linkAnchor = document.createElement("a");
    linkAnchor.textContent = level[index].linkTitle;
    linkAnchor.href = level[index].links;
    linkAnchor.target = "_self";

    // Clear the existing content of the "links" element before appending the anchor
    while (links.firstChild) {
      links.removeChild(links.firstChild);
    }

    // Append the anchor element to the "links" element
    links.appendChild(linkAnchor);
  });
});

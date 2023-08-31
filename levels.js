const level = [
  {
    id: "level-11",
    name: "PROJECT VENUS",
    imageSrc: "img/venus.png",
    description:
      "IN MY INITIAL PROJECT AT KODEHODE, I UTILIZED FIGMA FOR LAYOUT VISUALIZATION AND HTML/CSS FOR DESIGN IMPLEMENTATION, RESULTING IN A POLISHED AND USER-FRIENDLY OUTCOME.",
    github: "GITHUB",
    githubLink: "https://github.com/Roberto-Kodehode/venus",
    links: "https://roberto-kodehode.github.io/venus/",
  },
  {
    id: "level-21",
    name: "PROJECT HELL",
    imageSrc: "img/666.png",
    description:
      "JAVASCRIPT ASSIGNMENT SHOWCASING FUNCTION USAGE AND DOM MANIPULATION, CREATING INTERACTIVE FEATURES TO ENHANCE USER EXPERIENCE AND FUNCTIONALITY.",
    github: "GITHUB",
    githubLink: "https://github.com/Roberto-Kodehode/oppgave4",
    links: "https://roberto-kodehode.github.io/oppgave4/",
  },
  {
    id: "level-31",
    name: "PROJECT DRUM",
    imageSrc: "img/drumkit.png",
    description:
      "USING JAVASCRIPT TO CREATE A DRUM KIT. BUTTONS AND ADDEVENTLISTENERS FOR CLICK EVENTS. IT UTILIZES .MAP TO LOOP THROUGH DATA.",
    github: "GITHUB",
    githubLink: "https://github.com/Roberto-Kodehode/drumkit",
    links: "https://roberto-kodehode.github.io/drumkit/",
  },
  {
    id: "level-41",
    name: "PROJECT INVADER",
    imageSrc: "img/celestial.png",
    description:
      "EXPLORING 2D GAMING: CLASSIC SPACE INVADERS IN JAVASCRIPT. DIVE INTO NOSTALGIA WITH ALIEN-BLASTING ACTION, USING LOCAL STORAGE TO KEEP TRACK OF HIGH SCORES.",
    github: "GITHUB",
    githubLink: "https://github.com/Roberto-Kodehode/celestial-invaders",
    links: "https://roberto-kodehode.github.io/celestial-invaders/",
  },
  {
    id: "level-51",
    name: "PROJECT REMEMBER",
    imageSrc: "img/remember.png",
    description:
      "A DATA-DRIVEN, INTERACTIVE TODO LIST IN JAVASCRIPT. USER CAN ADD, AND MARK TASKS AS DONE. DATA PERSISTENCE USING LOCALSTORAGE.",
    github: "GITHUB",
    githubLink: "https://github.com/Roberto-Kodehode/remember",
    links: "https://roberto-kodehode.github.io/remember/",
  },
  {
    id: "level-boss",
    name: "PROJECT CALCULATOR",
    imageSrc: "img/calculator.png",
    description:
      "A CALCULATOR BUILT IN REACT, UTILIZING COMPONENTS AND USESTATE TO HANDLE STATE MANAGEMENT AND RENDERING DYNAMIC UI FOR PERFORMING MATHEMATICAL OPERATIONS.",
    github: "GITHUB",
    githubLink: "https://github.com/Roberto-Kodehode/react-calculator",
    links: "https://chic-strudel-e1153b.netlify.app/",
  },
];

const elements = level.map((lvl) => ({
  btn: document.getElementById(lvl.id),
  name: document.getElementById("card-title"),
  image: document.getElementById("card-img"),
  description: document.getElementById("card-description"),
  githubLink: document.getElementById("github"),
  links: document.getElementById("live"),
}));

elements.forEach(
  ({ btn, name, description, image, githubLink, links }, index) => {
    btn.addEventListener("click", () => {
      name.textContent = level[index].name;
      description.textContent = level[index].description;
      image.src = level[index].imageSrc;

      // Create an anchor element and set its textContent and href attributes

      const githubLinkAnchor = document.createElement("a");
      githubLinkAnchor.textContent = level[index].github;
      githubLinkAnchor.href = level[index].githubLink;
      githubLinkAnchor.target = "_blank";

      while (githubLink.firstChild) {
        githubLink.removeChild(githubLink.firstChild);
      }

      githubLink.appendChild(githubLinkAnchor);

      //

      const linkAnchor = document.createElement("a");
      linkAnchor.textContent = level[index].name;
      linkAnchor.href = level[index].links;
      linkAnchor.target = "_blank";

      // Clear the existing content of the "links" element before appending the anchor
      while (links.firstChild) {
        links.removeChild(links.firstChild);
      }

      // Append the anchor element to the "links" element
      links.appendChild(linkAnchor);
    });
  }
);

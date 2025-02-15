/*
 * Components
 */
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/project-4.gif",
    title: "Space inveders",
    tags: ["Pygame", "2D Simulation", "Game Development"],
    projectLink: "https://github.com/volt-l18/non_pixelized_space_inveders_OwO",
  },
  {
    imgSrc: "/images/project-3.gif",
    title: "SproutLand",
    tags: ["Godot", "2D Simulation", "Game Development"],
    projectLink: "https://github.com/volt-l18/Sprout-Land-game-devlopment-repo",
  },
  {
    imgSrc: "/images/project-1.png",
    title: "Blog Web Application",
    tags: ["DBMS", "Hashing", "Development"],
    projectLink: "https://github.com/volt-l18/Blog_WebApp_Falsk",
  },
  {
    imgSrc: "/images/project-2.png",
    title: "Live chat application",
    tags: ["WebSockets", "Web Development"],
    projectLink: "https://github.com/volt-l18/Live-Chat-room-with-Flask",
  },
  {
    imgSrc: "/images/project-5.png",
    title: "Zephyra-AI",
    tags: ["React", "AI", "Framer Motion", "Appwrite"],
    projectLink: "https://github.com/volt-l18/Zephyra",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My Projects.</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] ">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              key={key}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;

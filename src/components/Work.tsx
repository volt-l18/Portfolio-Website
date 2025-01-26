/*
 * Components
 */
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/project-1.png",
    title: "Blog WebApp build with Falsk",
    tags: ["DBMS", "Hashing", "Development"],
    projectLink: "https://github.com/volt-l18/Blog_WebApp_Falsk",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights</h2>
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

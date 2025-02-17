import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: "/images/figma.svg",
    label: "Figma",
    desc: "Design tool",
  },
  {
    imgSrc: "/images/css3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/images/nodejs.svg",
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: "/images/expressjs.svg",
    label: "ExpressJS",
    desc: "Node Framework",
  },
  {
    imgSrc: "/images/mongodb.svg",
    label: "MongoDB",
    desc: "Database",
  },
  {
    imgSrc: "/images/react.svg",
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: "/images/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/postgresql.svg",
    label: "Postgresql",
    desc: "Database",
  },
  {
    imgSrc: "/images/java.svg",
    label: "Java",
    desc: "For desktop applications",
  },
  {
    imgSrc: "/images/nextjs.svg",
    label: "Nextjs",
    desc: "Framework",
  },
  {
    imgSrc: "/images/bootstrap.svg",
    label: "Bootstrap",
    desc: "User interface",
  },
];

const Skills = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Tools we use</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up text-justify">
          Descubra as poderosas ferramentas e tecnologias que utilizamos em
          nossa startup para desenvolver softwares inovadores, escaláveis e de
          alta performance. Transformamos desafios em soluções digitais
          eficientes e impactantes.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal_up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

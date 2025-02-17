import SkillCard from "./SkillCard";
import { skillItem } from "../utils/skillsUtil";

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

import logo from "../../public/images/logo.svg";

const aboutItems = [
  {
    label: "Projectos feitos",
    number: 7,
  },
  {
    label: "Anos de experiência",
    number: 2,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-uo">
          <p className="text-zinc-300 mb:4 md:mb-8 md:text-xl md:max-w-[60ch] text-justify">
            Welcome! Sou Kenneth Uamusse, desenvolvedor e confundador de uma startup focada em soluções tecnológicas inovadoras, transformando ideias em experiências digitais impactantes, combinando design, funcionalidade e desempenho para criar aplicações que fazem a diferença.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-sky-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}

            <img
              src={logo}
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

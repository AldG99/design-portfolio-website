import React from 'react';
import useScrollReveal from '../../../hooks/useScrollReveal';
import './Skills.scss';

const Skills = () => {
  const titleRef = useScrollReveal({
    direction: 'up',
    distance: 30,
    delay: 100,
  });

  const frontendRef = useScrollReveal({
    direction: 'right',
    distance: 50,
    delay: 200,
  });

  const backendRef = useScrollReveal({
    direction: 'up',
    distance: 50,
    delay: 300,
  });

  const designRef = useScrollReveal({
    direction: 'left',
    distance: 50,
    delay: 400,
  });

  // Datos de habilidades
  const skills = {
    frontend: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3/SCSS', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 80 },
      { name: 'Redux', level: 75 },
      { name: 'Next.js', level: 70 },
    ],
    backend: [
      { name: 'Node.js', level: 75 },
      { name: 'Express', level: 70 },
      { name: 'MongoDB', level: 65 },
      { name: 'Firebase', level: 70 },
      { name: 'REST API', level: 85 },
      { name: 'GraphQL', level: 60 },
    ],
    design: [
      { name: 'Figma', level: 85 },
      { name: 'Adobe XD', level: 75 },
      { name: 'Photoshop', level: 65 },
      { name: 'UI/UX', level: 80 },
      { name: 'Responsive Design', level: 90 },
    ],
  };

  // Renderizar barras de progreso para habilidades
  const renderSkillBars = skillsArray => {
    return skillsArray.map((skill, index) => (
      <div className="skills__skill" key={index}>
        <div className="skills__skill-header">
          <h4 className="skills__skill-name">{skill.name}</h4>
          <span className="skills__skill-percentage">{skill.level}%</span>
        </div>
        <div className="skills__skill-bar">
          <div
            className="skills__skill-progress"
            style={{ width: `${skill.level}%` }}
            data-level={skill.level}
          ></div>
        </div>
      </div>
    ));
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 ref={titleRef} className="section__title skills__title">
          Mis Habilidades
        </h2>

        <div className="skills__container">
          <div ref={frontendRef} className="skills__category">
            <div className="skills__category-header">
              <div className="skills__category-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                  <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z" />
                </svg>
              </div>
              <h3 className="skills__category-title">Frontend</h3>
            </div>
            <div className="skills__category-content">
              {renderSkillBars(skills.frontend)}
            </div>
          </div>

          <div ref={backendRef} className="skills__category">
            <div className="skills__category-header">
              <div className="skills__category-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z" />
                  <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0z" />
                </svg>
              </div>
              <h3 className="skills__category-title">Backend</h3>
            </div>
            <div className="skills__category-content">
              {renderSkillBars(skills.backend)}
            </div>
          </div>

          <div ref={designRef} className="skills__category">
            <div className="skills__category-header">
              <div className="skills__category-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.118 8.118 0 0 1-3.078.132 3.659 3.659 0 0 1-.562-.135 1.382 1.382 0 0 1-.466-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04z" />
                </svg>
              </div>
              <h3 className="skills__category-title">Diseño</h3>
            </div>
            <div className="skills__category-content">
              {renderSkillBars(skills.design)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

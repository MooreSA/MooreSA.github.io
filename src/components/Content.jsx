import React from 'react';
import ProjectCard from './ProjectCard';

const Content = () => {
  const projects = [
    {
      name: 'Two Doo',
      url: 'https://mooresa.github.io/two-doo',
    },
    {
      name: 'BattleShip',
      url: 'https://mooresa.github.io/battleship',
    },
    {
      name: 'CV Builder',
      url: 'https://mooresa.github.io/cv-builder',
    },
    {
      name: 'Memory Cards',
      url: 'https://mooresa.github.io/odin-memory-card',
    },
  ];

  return (
    <div className="content">
      <article className="about">
        <h2 className="about__header">Me.</h2>
        <div className="about__content">
          <div className="about__paragraph">
            First Year IT Web Development Student at Nova Scotia&apos;s Truro Campus.
          </div>
          <div className="about__paragraph">
            Learning new skills and technologies. Absorbing as much information along the way.
          </div>
        </div>
      </article>
      <section className="projects">
        <h2 className="projects__header">Projects</h2>
        <div className="projects__content">
          { projects.map((project) => <ProjectCard projectInfo={project} key={project.name} />) }
        </div>
      </section>
    </div>
  );
};

export default Content;

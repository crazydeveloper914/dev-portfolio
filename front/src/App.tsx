import React, { useRef } from 'react';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Section from './components/Section';
import { about, skills, experiences, projects } from './data/content';
import SkillTagsList from './components/SkillTag/SkillTagsList';
import ExperiencesList from './components/ExperienceItem/ExperiencesList';
import ProjectsList from './components/ProjectItem/ProjectsList';
import PostsList from './components/PostItem/PostsList';
import Footer from './components/Footer';
import useActiveSection from './hooks/useActiveSection';

const App: React.FC = () => {

  const headerRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const postsRef = useRef<HTMLElement>(null);

  const sectionRefs = [
    { ref: headerRef, id: 'header' },
    { ref: aboutRef, id: 'about' },
    { ref: projectsRef, id: 'projects' },
    { ref: postsRef, id: 'posts' },
  ];

  const activeSection = useActiveSection(sectionRefs);

  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <Navigation activeSection={activeSection} />
        <Header id='header' ref={headerRef} />
        <div id='about' ref={aboutRef}>
          <Section title="About">
            <p className='text text-medium'>{about.text}</p>
          </Section>
          <Section title="Skillset">
            <SkillTagsList skills={skills} variant="green" />
          </Section>
          <Section title="Experience">
            <ExperiencesList experiences={experiences} />
          </Section>
        </div>
        <Section id='projects' ref={projectsRef} title="Projects">
          <ProjectsList projects={projects}/>
        </Section>
        <Section id='posts' ref={postsRef} title="My Blog Posts">
          <PostsList />
        </Section>
        <Footer />
      </div>
    </div>
  );
}

export default App;

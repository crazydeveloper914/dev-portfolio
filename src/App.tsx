import React, { useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header';
import Section from './components/Section';
import { about, skills, experiences, projects, posts } from './data/content';
import SkillTagsList from './components/SkillTag/SkillTagsList';
import ExperiencesList from './components/ExperienceItem/ExperiencesList';
import ProjectsList from './components/ProjectItem/ProjectsList';
import PostsList from './components/PostItem/PostsList';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | undefined>('');

  const handleSetActiveSection = (id: string | undefined) => {
    setActiveSection(id);
  };

  console.log("Active Section:", activeSection);

  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto">
        <Navigation activeSection={activeSection} />
        <Header/>
        <Section id="about" title="About" setActiveSection={handleSetActiveSection}>
          <p className='text text-medium'>{about.text}</p>
        </Section>
        <Section id="skillset" title="Skillset" setActiveSection={handleSetActiveSection}>
          <SkillTagsList skills={skills} variant="green" />
        </Section>
        <Section id="experience" title="Experience" setActiveSection={handleSetActiveSection}>
          <ExperiencesList experiences={experiences} />
        </Section>
        <Section id="projects" title="Projects" setActiveSection={handleSetActiveSection}>
          <ProjectsList projects={projects}/>
        </Section>
        <Section id="posts" title="My Blog Posts" setActiveSection={handleSetActiveSection}>
          <PostsList posts={posts} />
        </Section>
      </div>
    </div>
  );
}

export default App;

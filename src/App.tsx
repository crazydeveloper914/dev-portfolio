import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import { about, skills, experiences, projects, posts } from './data/content';
import SkillTagsList from './components/SkillTag/SkillTagsList';
import ExperiencesList from './components/ExperienceItem/ExperiencesList';
import ProjectsList from './components/ProjectItem/ProjectsList';
import PostsList from './components/PostItem/PostsList';

const App: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto">
        <Header />
        <Section title="About">
          <p className='text text-medium'>{about.text}</p>
        </Section>
        <Section title="Skillset">
          <SkillTagsList skills={skills} variant="green" />
        </Section>
        <Section title="Experience">
          <ExperiencesList experiences={experiences} />
        </Section>
        <Section title="Projects">
          <ProjectsList projects={projects}/>
        </Section>
        <Section title="My Blog Posts">
          <PostsList posts={posts} />
        </Section>
      </div>
    </div>
  );
}

export default App;

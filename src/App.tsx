import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import { about, skills, experiences, posts } from './data/content';
import SkillTagsList from './components/SkillTag/SkillTagsList';
import ExperienceItemList from './components/ExperienceItem/ExpierenceItemList';

const App: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto">
      <Header />
      <Section title="About">
        <p className='text medium'>{about.text}</p>
      </Section>
      <Section title="Skillset">
        <SkillTagsList skills={skills} variant="green" />
      </Section>
      <Section title="Experience">
        {experiences.map((exp, index) => (
          <div key={index}>
            <h2>{exp.title}</h2>
            <p>{exp.date}</p>
            <p>{exp.text}</p>
            {exp.skills.map(skill => <span key={skill}>{skill}</span>)}
          </div>
        ))}
      </Section>
      <Section title="My Blog Posts">
        {posts.map((post, index) => (
          <div key={index}>
            <h2>{post.title}</h2>
            <p>{post.date}</p>
            <p>{post.excerpt}</p>
          </div>
        ))}
      </Section>
    </div>
    </div>
  );
}

export default App;

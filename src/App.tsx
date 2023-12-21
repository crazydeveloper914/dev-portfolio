import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import { about, skills, experiences, posts } from './data/content';
import SkillTagsList from './components/SkillTag/SkillTagsList';
import ExperiencesList from './components/ExperienceItem/ExpierencesList';

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
        <ExperiencesList experiences={experiences} />
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

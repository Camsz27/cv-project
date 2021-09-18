import Education from './components/Education';
import Experience from './components/Experience';
import Information from './components/Information';
import AddButton from './components/AddButton';
import Skills from './components/Skills';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: ['Skill 1', 'Skill 2', 'Skill 3'],
      experiences: [''],
    };
    this.skillHandler = this.skillHandler.bind(this);
    this.experienceHandler = this.experienceHandler.bind(this);
  }

  skillHandler() {
    this.setState({
      skills: this.state.skills.concat('New skill'),
    });
  }

  experienceHandler() {
    this.setState({
      experiences: this.state.experiences.concat(''),
    });
  }

  render() {
    return (
      <main>
        <section className='addFields'>
          <h1>Add Additional Fields</h1>
          <AddButton className='Education' />
          <AddButton className='Experience' handler={this.experienceHandler} />
          <AddButton className='Skills' handler={this.skillHandler} />
        </section>
        <div className='cvInfo'>
          <Information />
          <Education />
          <Experience experiences={this.state.experiences} />
          <Skills skills={this.state.skills} />
        </div>
      </main>
    );
  }
}

export default App;

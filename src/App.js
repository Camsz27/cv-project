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
      educationExp: [''],
    };
    this.skillHandler = this.skillHandler.bind(this);
    this.experienceHandler = this.experienceHandler.bind(this);
    this.educationHandler = this.educationHandler.bind(this);
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

  educationHandler() {
    this.setState({
      educationExp: this.state.educationExp.concat(''),
    });
  }

  render() {
    return (
      <main>
        <section className='addFields'>
          <h1>Add Additional Fields</h1>
          <AddButton className='Education' handler={this.educationHandler} />
          <AddButton className='Experience' handler={this.experienceHandler} />
          <AddButton className='Skills' handler={this.skillHandler} />
        </section>
        <div className='cvInfo'>
          <Information />
          <Education educationExp={this.state.educationExp} />
          <Experience experiences={this.state.experiences} />
          <Skills skills={this.state.skills} />
        </div>
      </main>
    );
  }
}

export default App;

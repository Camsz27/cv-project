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
      message: 'welcome',
    };
    this.skillHandler = this.skillHandler.bind(this);
  }

  addSkill() {
    console.log('here we are');
    this.setState({
      skills: this.state.skills.concat(''),
    });
  }

  skillHandler() {
    console.log('working');
    this.setState({
      skills: this.state.skills.concat('New skill'),
    });
  }

  render() {
    return (
      <main>
        <section className='addFields'>
          <h1>Add Additional Fields</h1>
          <AddButton className='Education' />
          <AddButton className='Experience' />
          <AddButton
            className='Skills'
            skills={this.state.skills}
            handler={this.skillHandler}
          />
        </section>
        <div className='cvInfo'>
          <Information />
          <Education />
          <Experience />
          <Skills skills={this.state.skills} />
        </div>
      </main>
    );
  }
}

export default App;

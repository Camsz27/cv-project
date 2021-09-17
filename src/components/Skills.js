import React from 'react';
import '../styles/Skills.css';

export default class AddButton extends React.Component {
  render() {
    return (
      <section>
        <h1 className='titleSection'>Skills</h1>
        <ul className='skillList'>
          <li contentEditable='true'>Skill 1</li>
          <li contentEditable='true'>Skill 2</li>
          <li contentEditable='true'>Skill 3</li>
        </ul>
      </section>
    );
  }
}

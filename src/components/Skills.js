import React from 'react';
import '../styles/Skills.css';

export default class AddButton extends React.Component {
  render() {
    const { skills } = this.props;
    return (
      <section>
        <h1 className='titleSection'>Skills</h1>
        <ul className='skillList'>
          {skills.map((skill) => (
            <li contentEditable='true' className='skill'>
              {skill}
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

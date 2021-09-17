import React from 'react';
import '../styles/Experience.css';

export default class Experience extends React.Component {
  render() {
    return (
      <section className='experience'>
        <h1 className='titleSection'>Experience</h1>
        <div className='experienceInformation'>
          <div>
            <h2>Position</h2>
            <h2>Company</h2>
            <ul>
              <li>Responsibility 1</li>
              <li>Responsibility 1</li>
              <li>Responsibility 1</li>
            </ul>
          </div>
          <aside>
            <h4>Start date, finish date</h4>
            <h4>City, Country</h4>
          </aside>
        </div>
      </section>
    );
  }
}

import React from 'react';
import '../styles/Education.css';

export default class Education extends React.Component {
  render() {
    return (
      <section className='education'>
        <h1 className='titleSection'>Education</h1>
        <div className='educationInformation'>
          <div>
            <h2>University</h2>
            <h2>Title</h2>
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

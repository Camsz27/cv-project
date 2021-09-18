import React from 'react';
import '../styles/Education.css';

export default class Education extends React.Component {
  render() {
    return (
      <section className='education'>
        <h1 className='titleSection'>Education</h1>
        {this.props.educationExp.map((experience) => (
          <div className='educationInformation'>
            <div>
              <h2 className='university' contentEditable='true'>
                University
              </h2>
              <h3 className='title' contentEditable='true'>
                Title
              </h3>
            </div>
            <aside>
              <h4 contentEditable='true' className='date'>
                Start date, finish date
              </h4>
              <h4 contentEditable='true' className='location'>
                City, Country
              </h4>
            </aside>
          </div>
        ))}
      </section>
    );
  }
}

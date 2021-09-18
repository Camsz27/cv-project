import React from 'react';
import '../styles/Experience.css';

export default class Experience extends React.Component {
  render() {
    const { experiences } = this.props;
    return (
      <section className='experience'>
        <h1 className='titleSection'>Experience</h1>
        {experiences.map((experience) => (
          <div className='experienceContainer'>
            <div className='experienceInformation'>
              <div>
                <h2 contentEditable='true' className='positionExperience'>
                  Position
                </h2>
                <h3 contentEditable='true' className='company'>
                  Company
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
            <ul className='responsibilityList'>
              <li contentEditable='true' className='responsibility'>
                Responsibility 1
              </li>
              <li contentEditable='true' className='responsibility'>
                Responsibility 2
              </li>
              <li contentEditable='true' className='responsibility'>
                Responsibility 3
              </li>
            </ul>
          </div>
        ))}
      </section>
    );
  }
}

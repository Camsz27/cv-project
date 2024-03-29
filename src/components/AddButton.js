import React from 'react';
import '../styles/AddButton.css';

export default class AddButton extends React.Component {
  render() {
    return (
      <button onClick={this.props.handler}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='48px'
          viewBox='0 0 24 24'
          width='48px'
          fill='#fff'
        >
          <path d='M0 0h24v24H0V0z' fill='none' />
          <path d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z' />
        </svg>
        Add {this.props.className}
      </button>
    );
  }
}

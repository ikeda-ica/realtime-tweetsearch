import React from 'react';
import ReactDOM from 'react-dom';

class Optbtn extends React.Component {
  render (){
    return(
      <p id="opt">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 32 32">
        <path d="M32,17.9v-3.8l-3.6-1.3c-0.3-1.2-0.8-2.3-1.4-3.3l0,0L28.7,6L26,3.3L22.5,5l0,0c-1-0.6-2.1-1.1-3.3-1.4L17.9,0h-3.8
          l-1.3,3.6C11.6,3.9,10.5,4.4,9.5,5l0,0L6,3.3L3.3,6L5,9.5l0,0c-0.6,1-1.1,2.1-1.4,3.3L0,14.1v3.8l3.6,1.3c0.3,1.2,0.8,2.3,1.4,3.3
          l0,0L3.3,26L6,28.7L9.5,27l0,0c1,0.6,2.1,1.1,3.3,1.4l1.3,3.6h3.8l1.3-3.6c1.2-0.3,2.3-0.8,3.3-1.4l0,0l3.5,1.6l2.7-2.7L27,22.5l0,0
          c0.6-1,1.1-2.1,1.4-3.3L32,17.9z M16,22.4c-3.5,0-6.4-2.9-6.4-6.4c0-3.5,2.9-6.4,6.4-6.4s6.4,2.9,6.4,6.4S19.5,22.4,16,22.4z" />
        </svg>
      </p>
    );
  }
}

ReactDOM.render(
  <Optbtn />,
  document.getElementById('opt')
);

import React from 'react';
import ReactDOM from 'react-dom';

class Footer extends React.Component {
  render() {
    return(
        <div className="wrap-input">
        <input type="checkbox" name="scroll" value="" id="as" /><label htmlFor="as" className="switch"></label>
        <label htmlFor="as" className="switch-label">Auto Scroll</label>
        </div>
    );
  }
}

ReactDOM.render(
  <Footer />,
  document.getElementById('footer')
);

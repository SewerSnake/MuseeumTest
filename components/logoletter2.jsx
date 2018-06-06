var React = require('react')
var ReactDOM = require('react-dom')
var LogoLetter = require('./logoletter.jsx')

class LogoLetter2 extends React.Component {
  render() {
    return(
      <div id="logoletter2">
  {this.props.children}
      </div>
    );
  }
}


module.exports = LogoLetter2;

var React = require('react')

class LogoLetter extends React.Component {
  render() {
    return (
      <div id="logoletter">
      {this.props.children}
      </div>
    );
  }
}

module.exports = LogoLetter;

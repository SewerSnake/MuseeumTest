
var React = require('react');

class Square extends React.Component {
  render() {
    var squareStyle = {
      height: 150,
      backgroundColor: this.props.color,
      backgroundImage: "url("+this.props.image+")",
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    };
    return (
      <div style={squareStyle}></div>
    );
  }
}

module.exports = Square;

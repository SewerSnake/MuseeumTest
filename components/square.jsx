
var React = require('react');

class Square extends React.Component {
  render() {
    var squareStyle = {
      backgroundColor: this.props.color,
      backgroundImage: "url("+this.props.image+")",
      height: this.props.heightSqr,
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

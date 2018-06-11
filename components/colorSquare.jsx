var React = require('react')

class ColorSquare extends React.Component {
  render() {
    var squareStyle = {
      height: this.props.heightColorSqr,
      backgroundColor: this.props.color
    };
    return (
      <div style={squareStyle}></div>
    );
  }
}

module.exports = ColorSquare;

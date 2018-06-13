var React = require('react')

class ColorSquare extends React.Component {
  render() {
    var squareStyle = {
      height: this.props.heightColorSqr,
      width: this.props.widthColorSqr,
      borderRadius: this.props.borderRadius,
      backgroundColor: this.props.color
    };
    return (
      <div onClick={this.props.onClick} style={squareStyle}></div>
    );
  }
}

module.exports = ColorSquare;

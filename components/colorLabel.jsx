var React = require('react')

class ColorLabel extends React.Component {
  render() {
    var labelStyle = {
      fontFamily: "sans-serif",
      fontSize: 'xx-small',
      height: this.props.heightColorLbl,
      padding: 6,
      margin: 0,
      textAlign: "center",
    };
    return (
      <p style={labelStyle}>{this.props.color}</p>
    );
  }
}

module.exports = ColorLabel;

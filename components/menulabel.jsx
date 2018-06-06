var React = require('react')

class MenuLabel extends React.Component {
  render() {
    var labelStyle = {

      fontWeight: "bold",
      backgroundColor: this.props.colorL,
      padding: 13,
      height: 30,
      margin: 0
    };
    return (
      <p style={labelStyle}>{this.props.name}</p>
    );
  }
}

module.exports = MenuLabel;

var React = require('react')

class Label extends React.Component {
  render() {
    var labelStyle = {

      fontWeight: "bold",
      backgroundColor: this.props.colorL,
      padding: 13,
      height: 30,
      color: 'black',
      margin: 0
    };
    return (
      <p style={labelStyle}>{this.props.name}</p>
    );
  }
}

module.exports = Label;

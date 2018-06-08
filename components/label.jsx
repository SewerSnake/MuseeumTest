var React = require('react')

class Label extends React.Component {
  render() {
    var labelStyle = {
      fontWeight: "bold",
      backgroundColor: this.props.colorLbl,
      padding: 13,
      height: this.props.heightLbl,
      color: 'black',
      margin: 0
    };
    return (
      <p style={labelStyle}>{this.props.name}</p>
    );
  }
}

module.exports = Label;

var React = require('react')

var Label = require('./label.jsx')
var Square = require('./square.jsx')

class Card extends React.Component {
  render() {
    var cardStyle = {
      display: "inline-block",
      height: 206,
      width: 150,
      padding: 0,
      margin: 10,
      backgroundColor:"FFF",
      verticalAlign: "middle",
      boxShadow: "0px 0px 6px #666"
    };
    return (
      <div style={cardStyle}>
        <Square color={this.props.color} image={this.props.image}/>
        <Label colorL={this.props.colorL} name={this.props.name}/>
      </div>
    );
  }
}

module.exports = Card;

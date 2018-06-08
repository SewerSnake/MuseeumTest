var React = require('react')

var Label = require('./label.jsx')
var Square = require('./square.jsx')

class Card extends React.Component {
  render() {
    var cardStyle = {
      display: "inline-block",
      height: this.props.height,
      width: 150,
      padding: 0,
      margin: 10,
      backgroundColor:"FFF",
      verticalAlign: "top",
      boxShadow: "0px 0px 6px #666"
    };
    return (
      <div style={cardStyle}>
        <Square
          color={this.props.color}
          heightSqr={this.props.heightSqr}
          image={this.props.image}/>
        <Label
          colorLbl={this.props.colorLbl} heightLbl={this.props.heightLbl} name={this.props.name}/>
      </div>
    );
  }
}

module.exports = Card;

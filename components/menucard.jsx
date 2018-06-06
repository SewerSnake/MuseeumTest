var React = require('react')

var Label = require('./label.jsx')
var Square = require('./square.jsx')


class MenuCard extends React.Component {
  render() {
    var cardStyle = {
      display: "inline-block",
      height: 150,
      width: 120,
      padding: 0,
      margin: 10,
      backgroundColor:"FFF",
      boxShadow: "0px 5px 1px #DCDCDC"
    };
    return (
      <div style={cardStyle}>
        <Square color={this.props.color} image={this.props.image}/>
        <Label colorL={this.props.colorL} name={this.props.name}/>
      </div>
    );
  }
}

module.exports = MenuCard;

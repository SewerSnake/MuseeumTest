var React = require('react')

var MenuLabel = require('./menulabel.jsx')
var MenuSquare = require('./menusquare.jsx')


class MenuCard extends React.Component {
  render() {
    var cardStyle = {
      display: "inline-block",
      height: 160,
      width: 140,
      padding: 0,
      margin: 10,
      backgroundColor:"FFF",
      boxShadow: "0px 5px 1px #DCDCDC"
    };
    return (
      <div style={cardStyle}>
        <MenuSquare color={this.props.color} image={this.props.image}/>
        <MenuLabel item={this.props.item} colorL={this.props.colorL} name={this.props.name}/>
      </div>
    );
  }
}

module.exports = MenuCard;

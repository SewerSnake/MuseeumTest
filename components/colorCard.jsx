var React = require('react')
var ColorSquare = require('./colorSquare.jsx')
var ColorLabel = require('./colorLabel.jsx')


class ColorCard extends React.Component {
  render() {
    var cardStyle = {
      display: "inline-block",
      height: this.props.height,
      width: this.props.width,
      padding: 0,
      backgroundColor:"FFF",
      boxShadow: "0px 0px 1px #DCDCDC"
    };
    return (
      <div style={cardStyle}>
        <ColorSquare color={this.props.color}
        heightColorSqr={this.props.heightColorSqr}/>
        <ColorLabel color={this.props.color}/>
      </div>
    );
  }
}


module.exports = ColorCard;

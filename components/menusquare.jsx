var React = require('react')

class MenuSquare extends React.Component {
  render() {
    var squareStyle = {
      height: 110,
      backgroundColor: this.props.color,
      backgroundImage: "url(Cafe/"+this.props.image+")",
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    };
    return (
      <div style={squareStyle}></div>
    );
  }
}

module.exports = MenuSquare;

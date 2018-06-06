var React = require('react')

class MenuLabel extends React.Component {
  constructor() {
    super();
    this.state = {
      item: {}
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log(this.props.item);
  }
  render() {
    var labelStyle = {
      fontWeight: "bold",
      backgroundColor: this.props.colorL,
      padding: 13,
      height: 10,
      margin: 0
    };
    return (
      <p style={labelStyle} item={this.props.item}>{this.props.name} <input type="checkbox" onClick={this.handleClick}/></p>
    );
  }
}

module.exports = MenuLabel;

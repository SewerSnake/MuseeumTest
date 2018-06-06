var React = require('react')

class MenuLabel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sugar: false,
      orders: this.props.item.orders
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleClick(event) {
    this.setState({ sugar: this.props.item.sugar });
    this.props.item.sugar = !this.props.item.sugar;
  }
  handleChange(event){
    console.log('target value ' + event.target.value); // 1
    this.setState({ orders: event.target.value}); // skall vara 1
    console.log('state value ' + this.state.orders);
    this.props.item.orders = event.target.value;
  }
  render() {
    console.log(this.props.item);
    var labelStyle = {
      fontWeight: "bold",
      backgroundColor: this.props.colorL,
      padding: 10,
      height: 40,
      margin: 0
    };
    return (
      <p style={labelStyle} item={this.props.item}>{this.props.name.toUpperCase()}
        <br/>
        Add sugar
        <input type="checkbox" onClick={this.handleClick}/>
        <br/>
        Cups <input type="number" min="0" max="5" value={this.state.orders} onChange={this.handleChange}/>
      </p>
    );
  }
}

module.exports = MenuLabel;

var React = require('react');
var Redux = require('redux');
var ReactRedux = require('react-redux');

class MenuLabel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // isChecked: false,
      // sugar: this.props.item.sugar,
      orders: this.props.item.orders
    }
  }
  render() {
    var labelStyle = {
      fontWeight: "bold",
      backgroundColor: this.props.colorL,
      padding: 10,
      height: 40,
      margin: 0
    };
    return (
      // <input value={this.state.sugar} type="checkbox" onClick={this.props.changeSugar}/>
      <p id={this.props.item.id} style={labelStyle} item={this.props.item}>{this.props.item.name}
        <br/>
        Add sugar
        <input checked={this.props.isChecked} value={this.props.item.sugar} type="checkbox" onClick={this.props.changeSugar}/>
        <br/>
        Cups <input type="number" min="0" max="5" value={this.state.orders} onChange={this.props.addCups}/>
      </p>
    );
  }
}

var ConnectedMenuLabel = ReactRedux.connect(
  function(state) {
    return {
      sugar: state.sugar,
      cups: state.cups
    }
  },
  function(dispatch) {
    return {
      addCups: function(event){
            console.log('ADDCUPS:');
        return dispatch({
          type: 'ADD_CUPS',
          item: event.target.parentElement.id,
          payload: event.target.value
        })
      },
      changeSugar: function(event){
        // console.log('sugar event target value ', event.target.value);
        console.log('sugar event target checked ', event.target.checked);
        return dispatch({
          type: 'CHANGE_SUGAR',
          item: event.target.parentElement.id,
          payload: event.target.checked
        })
      }
    }
  })(MenuLabel);

module.exports = ConnectedMenuLabel;

var React = require('react');
var Redux = require('redux');
var ReactRedux = require('react-redux');

class MenuLabel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sugar: false,
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
      <p id={this.props.item.id} style={labelStyle} item={this.props.item}>{this.props.item.name}
        <br/>
        Add sugar
        <input value={this.state.sugar} type="checkbox" onClick={this.props.changeSugar}/>
        <br/>
        Cups <input type="number" min="0" max="5" value={this.state.orders} onChange={this.props.addCups}/>
      </p>
    );
  }
}

var ConnectedMenuLabel = ReactRedux.connect(
  function(state) {
    // console.log('state ', state);
    // console.log('this props', this.props);
    return {
      sugar: state.sugar,
      cups: state.cups
    }
  },
  function(dispatch) {
    return {
      updateDrink: function(event){
        return dispatch({
          type: 'UPDATE_DRINK'
        })
      },
      addCups: function(event){
            console.log('ADDCUPS:');
        return dispatch({
          type: 'ADD_CUPS',
          item: event.target.parentElement.id,
          payload: event.target.value
        })
      },
      changeSugar: function(event){
        // console.log('event target value ', event.target.value);
        // console.log('event target id ', event.target.id);
        return dispatch({
          type: 'CHANGE_SUGAR',
          item: event.target.parentElement.id,
          payload: event.target.value
        })
      }
    }
  })(MenuLabel);

module.exports = ConnectedMenuLabel;

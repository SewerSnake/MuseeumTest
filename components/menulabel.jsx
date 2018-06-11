var React = require('react');
var Redux = require('redux');
var ReactRedux = require('react-redux');

class MenuLabel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
        <input checked={this.props.isChecked} type="checkbox" onClick={this.props.changeSugar}/>
        <br/>
        Cups <input type="number" min="0" max="5" value={this.state.orders} onChange={this.props.addCups}/>
      </p>
    );
  }
}

var ConnectedMenuLabel = ReactRedux.connect(
  function(state) {
    return { sugar: state.sugar, cups: state.cups };
  },
  (dispatch) => {
    return {
      addCups: (event) => {
           dispatch({
          type: 'ADD_CUPS',
          item: event.target.parentElement.id,
          payload: event.target.value
        })
      },
      changeSugar: (event) => {
         (dispatch({
          type: 'CHANGE_SUGAR',
          item: event.target.parentElement.id,
          payload: event.target.checked
        }))
      }
    }
  })(MenuLabel);

module.exports = ConnectedMenuLabel;

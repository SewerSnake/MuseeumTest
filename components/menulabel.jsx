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
      <p id={this.props.item.id} style={labelStyle}>{this.props.item.name}
        <br/>
        Add sugar
        <input checked={this.props.isChecked} type="checkbox" onClick={(event) => { this.props.changeSugar(event, this.props.item.id); }}/>
        <br/>
        Cups <input type="number" min="0" max="5" value={this.state.orders} onChange={(event) => { this.props.addCups(event, this.props.item.id) }}/>
      </p>
    );
  }
}

var ConnectedMenuLabel = ReactRedux.connect(
  function (state) {
     return {sugar: state.sugar, cups: state.cups };
  },
  (dispatch) => {
    return {
      addCups: (event, id) => {
           dispatch({
          type: 'ADD_CUPS',
          item: id,
          payload: event.target.value
        })
      },
      changeSugar: (event, id) => {
         (dispatch({
          type: 'CHANGE_SUGAR',
          item: id,
          payload: event.target.checked
        }))
      }
    }
  })(MenuLabel);

module.exports = ConnectedMenuLabel;

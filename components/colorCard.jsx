var React = require('react')
var ColorSquare = require('./colorSquare.jsx')
var ColorLabel = require('./colorLabel.jsx')
//TEST:
var ReactRedux = require('react-redux');

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
        heightColorSqr={this.props.heightColorSqr}
        onClick={(event) => this.props.saveColor(event, this.props.color)}/>
        <ColorLabel color={this.props.color}/>
      </div>
    );
  }
}

//MILJA TEST START
var ConnectedColorCard = ReactRedux.connect(
  function(state) {
    return { mycolor: state.mycolor };
  },
  (dispatch) => {
    return {
      saveColor: (event, c) => {
        console.log('Onclick Savecolor: ', event.target);
        console.log('Onclick Savecolor: ', c);
        dispatch({
          type: 'SAVE_COLOR',
          payload: c
        })
      }
    }
  })(ColorCard);
//MILJA TEST END

// module.exports = ColorCard;
module.exports = ConnectedColorCard;

var React = require('react')
var ReactRedux = require('react-redux');
var ColorCard = require('./colorCard.jsx')
var ColorInputCard = require('./colorInputCard.jsx');
var destination = document.querySelector("#container");

function showCard() {
  var colors = ["#393E41", "#E94F37", "#1C89BF", "#A1D363", "lightgray", "white", "black", "#c44b21", "#273e06", "#728370", "#4b5c09", "#cc3333", "#800000", "#669966", "#b6fcd5", "#0e2f44", "#98002f", "#865a72", "#a3c1ad", "#abb79d", "#baa47b", "#b2ae8c", "#c36728", "#ffe8a0", "#9c6f44", "#238d9c", "#ff8c69", "#bdd9bf", "#95c9e7", "#2e3d55", "#5d7ed3", "#5dd3b4", "#fdbcd9", "#4921a6", "#3ad7ff", "#ff9047", "#00e9fe", "#d6dfe1", "#f2daa5", "#faff0b", "#ffa485", "#8aebf3", "#21ffff", "#ff00ff", "#7f007f", "#d783ff", "#0f324e", "#8efa00", "#00F900", "#00FA92", "#0096FF", "#FF2F92", "#7A81FF"];
  var randomArray = [];

  for (var i = 0; i< 25; i++) {
    var ran = Math.floor(Math.random()  * colors.length);
    randomArray.push(<ColorCard key={i} color={colors[ran]} heightColorSqr="80px" width="120px" />);
  }
  //return cards
  return randomArray;
}


class Colors extends React.Component {
constructor(props) {
  super(props)
  this.state = {
    cardList: showCard(),
    pickerValue: 'white'
  };
  this.shuffle = this.shuffle.bind(this)
}

shuffle() {
  console.log('REFRESH');
  this.setState({ cardList: showCard()});
  this.setState({pickerValue: document.getElementById('input-color').value});
  console.log(this.state);
}

  render() {
    return <section id="section-b">
      <div className="palette-wrapper">
          <div className="console">
            <button className="button button1" onClick={this.shuffle} >Colorize</button>
          </div>
          <div id="chosen-colors" style={{ display: 'flex' }}>
            <div>
            <div className="input-color-container">
              <input id="input-color" className="input-color" type="color" thange={console.log("changeColor")} style={{ display: 'block' }}></input>
              </div>
              <div id="">hex</div>
              </div>
            <ColorCard color={this.props.c ? this.props.c[0] : '#FFF'} heightColorSqr='40px' borderRadius='8px'/>
            <ColorCard color={this.props.c ? this.props.c[1] : '#FFF'} heightColorSqr='40px' borderRadius='8px'/>
            <ColorCard color={this.props.c ? this.props.c[2] : '#FFF'} heightColorSqr='40px' borderRadius='8px'/>
            <ColorCard color={this.props.c ? this.props.c[3] : '#FFF'} heightColorSqr='40px' borderRadius='8px'/>
            <ColorInputCard />
          </div>
        </div>
      <div id="colorwall">
          {this.state.cardList}
      </div>

    </section>
  }
}

// <ColorCard color="#F9C240" heightColorSqr='40px'/>
// <ColorCard color="#F9C240" heightColorSqr='40px'/>
// <ColorCard color="#F9C240" heightColorSqr='40px'/>
// <ColorCard color="#F9C240" heightColorSqr='40px'/>

// MILJA TEST START
var ConnectedColors = ReactRedux.connect(
  function(state) {
    console.log('state.mycolorrr: ', state.mycolor);
    return { c: state.mycolor };
  })(Colors);
// MILJA TEST END

// module.exports = Colors;
module.exports = ConnectedColors;

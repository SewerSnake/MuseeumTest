var React = require('react')


class ColorInputCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "",
      bgColor: "white"
    };
    this.colorValue = this.colorValue.bind(this);
    this.setNewColor = this.setNewColor.bind(this);
  }
  colorValue(e) {
    this.setState({
      color: e.target.value
    });
  }
  setNewColor(e) {
    this.setState({
      bgColor: this.state.color
    });
    {/*focus back to input*/}
    this._input.focus();
    {/*clears entered colors*/}
    this._input.value = "";

    e.preventDefault();
  }

  render() {
    var squareStyle = {
      backgroundColor: this.state.bgColor
    };
    var self = this;

    return (
      <div className="colorArea">
      <div style={squareStyle} className="colorSquare"></div>
      <form onSubmit={this.setNewColor}>
      {/*a callback function, sets custom prop: _input to the value of element*/}
      <input onChange={this.colorValue}
        ref={
          function(ehex) {
            self._input = ehex;
          }
        }placeholder="enter hex">
      </input>
      <button type="submit">go</button>
      </form>
      </div>
    );
  }
}

module.exports = ColorInputCard;

var React = require('react')


class PaintingInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      requestFailed: false
    };
  }

  componentDidMount() {

    fetch("https://www.rijksmuseum.nl/api/EN/collection/"
    + this.props.id + "?key=OTlO83oj&format=json" + "&ps=" + 5)

      .then(function(response) {
        if (!response.ok) {
          throw Error('Network request failed');
        }
        return response.json();
      })
      .then(function(result) {
        //console.log(result);
        var artObject = result.artObject;

        this.setState({
          title: artObject.longTitle,
          maker: artObject.principalMaker,
          locationOfPiece: artObject.location,
          plaqueDescription: artObject.plaqueDescriptionEnglish
        });
      }.bind(this), () => {
        this.setState({requestFailed: true});
      });
  }

  render() {
    if (this.state.requestFailed) {
      return <p>Failed to get painting</p>
    } else {
      var title = this.state.title;
      var maker = this.state.maker;
      var location = this.state.locationOfPiece;
      var description = this.state.plaqueDescription;
      return <p>
        {'Title: ' + (title ? title:'Unavailable')}
        <br/>
        {'Maker: ' + (maker ? maker:'Unavailable')}
        <br/>
        {'Where to find: ' + (location ? location:'Unavailable')}
        <br/>
        {'Description: ' + (description ? description:'Unavailable')}
      </p>
    }
  }
}

module.exports = PaintingInfo;

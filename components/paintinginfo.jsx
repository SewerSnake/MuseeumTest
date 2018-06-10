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
      return <p><strong>Failed to get painting</strong></p>
    } else {
      var title = this.state.title;
      var maker = this.state.maker;
      var location = this.state.locationOfPiece;
      var description = this.state.plaqueDescription;
      return <p>
        <strong>Title: </strong>{(title ? title:'Unavailable')}
        <br/>
        <strong>Maker: </strong>{(maker ? maker:'Unavailable')}
        <br/>
        <strong>Where to find: </strong>{(location ? location:'Unavailable')}
        <br/>
        <strong>Description: </strong>{(description ? description:'Unavailable')}
      </p>
    }
  }
}

module.exports = PaintingInfo;

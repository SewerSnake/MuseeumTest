var React = require('react')
var PaintingInfo = require('./paintinginfo.jsx')

function createImage(webImage) {

  if (webImage != null) {
    var image = "url(" + webImage.url.replace("s0", "s128") + ")";

    return <div id="painting" style={{backgroundImage: image}}
    onClick={function functionName() {
      var parrotBox = document.querySelector('#box1 > .bg-image');
      parrotBox.style.backgroundImage = image;
    }}></div>
  } else {
    return <p><strong>No image available</strong></p>
  }
}


class ArtGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      requestFailed: false
    };
  }

  componentDidMount() {
    var artistName = this.props.match.params.artistName;
    var artArr = [];

    console.log(this.props.match.params.artistName)
    if (artistName == 'AdriaenCoorte') {
      artistName = 'coorte';
    }

    if (artistName == 'WillemClaesz') {
      artistName = 'willem%20claesz';
    }

    if (artistName == 'FlorisClaesz') {
      artistName = 'floris%20claesz';
    }

    if (artistName == 'vangogh') {
      artistName = 'vincent%20van%20gogh';
    }

    if (artistName == 'rachelRuysch') {
      artistName = 'rachel%20ruysch';
    }

    if (artistName == 'jozefIsraels') {
      artistName = 'jozef%20israels'
    }

    fetch("https://www.rijksmuseum.nl/api/en/collection?key=OTlO83oj&format=json&q="
    + artistName + "&s=relevance" + "&ps=" + 5)

      .then(function(response) {
        if (!response.ok) {
          throw Error('Network request failed');
        }
        return response.json();
      })
      .then(function(result) {

        var artObjects = result.artObjects;

        for (var i = 0; i < artObjects.length; i++) {
          artArr.push(artObjects[i]);
        }

        this.setState({artArray: artArr});
      }.bind(this), () => {
        this.setState({requestFailed: true});
      });
  }

  render() {
    if (!this.state.artArray) {
      return <p><strong>Loading...</strong></p>
    } else if (this.state.requestFailed || this.state.artArray.length == 0) {
      return <p><strong>Could not find what you seek</strong></p>
    } else {

      return <div id="artistArtGallery">{
        this.state.artArray.map(function(value, index) {
          return <div key={index}>
            {createImage(value.webImage)}
            <PaintingInfo id={value.objectNumber}></PaintingInfo>
          </div>
        })
      }</div>
    }
  }
}

module.exports = ArtGallery;

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

    if (artistName == 'claesz') {
      artistName = 'willem%20claesz';
    }

    if (artistName == 'f-claesz') {
      artistName = 'floris%20claesz';
    }

    if (artistName == 'vangogh') {
      artistName = 'vincent%20van%20gogh';
    }

    if (artistName == 'ruysch') {
      artistName = 'rachel%20ruysch';
    }

    if (artistName == 'israëls') {
      artistName = 'jozef%20israels'
    }
    if (artistName == 'degas') {
      artistName = 'edgar%20degas'
    }
    if (artistName == 'davinci') {
      artistName = 'leonardo%20da%20vinci'
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

      return <div id="artistArtGallery"><h2 className="content-title">{this.props.match.params.artistName.toUpperCase()}</h2>{
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

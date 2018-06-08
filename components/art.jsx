var React = require('react')
var ReactRouterDOM = require('react-router-dom')

var Card = require('./card.jsx')

var Link = ReactRouterDOM.Link;
// Petteri
class Art extends React.Component {
  render() {
      var artists = [['rembrandt','Rembrandt'],['monet','Claude Monet'],
      ['vermeer','Johannes Vermeer'],['rachelRuysch','Rachel Ruysch'],['edgardegas','Edgar Degas'],
      ['jozefIsraels','Josef Israëls'],['vangogh','Vincent van Gogh'],
      ['michelangelo','Michelangelo The Incredible'],['davinci','Lenardo da Vinci'],['picasso','Pablo Picasso'],
      ['AdriaenCoorte','Adriaen Coorte'],['WillemClaesz','Willem Claesz'],
      ['FlorisClaesz','Floris Claesz']]


    var renderValues = artists.map(function (value) {
      var img = "Painters/"+value[0] + ".jpeg";
      var routeValue = "art/"+value[0];
      return <Link to={routeValue} key={value[0]} >
      <Card
        heightSqr="150px"
        color="lightgrey"
        colorLbl="#FFC983"
        heightLbl="30px"
        name={value[1]}
        image={img}/></Link>
    })

      return <section id="artList" >
      <h1>Artists</h1>
      <div>{renderValues}</div>

      </section>
  }
}

module.exports = Art;

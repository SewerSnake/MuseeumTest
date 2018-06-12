var React = require('react')
var ReactRouterDOM = require('react-router-dom')

var Card = require('./card.jsx')

var Link = ReactRouterDOM.Link;
// Petteri
class Art extends React.Component {
  render() {
      var artists = [['rembrandt','Rembrandt'],['monet','Claude Monet'],
      ['vermeer','Johannes Vermeer'],['ruysch','Rachel Ruysch'],['degas','Edgar Degas'],
      ['israëls','Josef Israëls'],['vangogh','Vincent van Gogh'],['davinci','Lenardo da Vinci'],['picasso','Pablo Picasso'],
      ['coorte','Adriaen Coorte'],['claesz','Willem Claesz'],
      ['f-claesz','Floris Claesz']]


    var renderValues = artists.map(value => {
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
      <h2 className="content-title">Artists</h2>
      <div>{renderValues}</div>
      </section>
  }
}

module.exports = Art;

var React = require('react')
var Card = require('./card.jsx')

class Home extends React.Component {
  render() {
      return <section id="section-a">
                <div className="content-wrap">
                  <h2 className="content-title">Art & web technology</h2>
                  <p>Built with:</p>
                    <div id="builtWithCards">
                      <Card
                        heightSqr="100px"
                        color="lightgrey"
                        colorLbl="#FFC983"
                        heightLbl="20px"
                        name="React"
                        image={'media/React-icon.svg'}/>
                      <Card
                        heightSqr="100px"
                        color="lightgrey"
                        colorLbl="#FFC983"
                        heightLbl="20px"
                        name="Redux"
                        image={'media/redux.png'}/>  
                      <Card
                        heightSqr="100px"
                        color="lightgrey"
                        colorLbl="#FFC983"
                        heightLbl="20px"
                        name="Webpack"
                        image={'media/webpack.svg'}/>
                      <Card
                        heightSqr="100px"
                        color="lightgrey"
                        colorLbl="#FFC983"
                        heightLbl="20px"
                        name="Babel"
                        image={'media/babel.svg'}/>
                      <Card
                        heightSqr="100px"
                        color="lightgrey"
                        colorLbl="#FFC983"
                        heightLbl="20px"
                        name="Jsx"
                        image={'media/jsx22.png'}/>
                      <Card
                        heightSqr="100px"
                        color="lightgrey"
                        colorLbl="#FFC983"
                        heightLbl="20px"
                        name="JavaScript"
                        image={'media/JavaScriptLogo2.svg'}/>
                      <Card
                        heightSqr="100px"
                        color="lightgrey"
                        colorLbl="#FFC983"
                        heightLbl="20px"
                        name="CSS3"
                        image={'media/CSS_3.svg'}/>
                      <Card
                        heightSqr="100px"
                        color="lightgrey"
                        colorLbl="#FFC983"
                        heightLbl="20px"
                        name="HTML5"
                        image={'media/HTML5_logo.svg'}/>
                    </div>

                </div>
              </section>
        }
}

module.exports = Home;

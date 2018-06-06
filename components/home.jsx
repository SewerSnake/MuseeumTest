var React = require('react')
var Card = require('./card.jsx')

class Home extends React.Component {
  render() {
      return <section id="section-a">
                <div className="content-wrap">
                  <h2 className="content-title">Art & web technology</h2>
                  <p>Built with:</p>
                    <div id="builtWithCards">
                      <Card color="lightgrey" colorL="#FFC983" name="React" image={'media/React-icon.svg'}/>
                      <Card color="lightgrey" colorL="#FFC983" name="Webpack" image={'media/webpack.svg'}/>
                      <Card color="lightgrey" colorL="#FFC983" name="Babel" image={'media/babel.svg'}/>
                      <Card color="lightgrey" colorL="#FFC983" name="Jsx" image={'media/jsx22.png'}/>
                    </div>

                </div>
              </section>
        }
}

module.exports = Home;

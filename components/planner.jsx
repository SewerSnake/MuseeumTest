var React = require('react')
var moment = require('moment')


//Milja
var PLANNER_API_KEY = 'hXNnSkBw';

class Planner extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      today: moment(new Date()).format('YYYY-MM-DD'),
      calendarDate: moment(new Date()).format('YYYY-MM-DD'),
      time: 0,
      events: [],
      allEvents: []
    };
    this.onChange = this.onChange.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount(){
    console.log('mounted');
    var chosenDate = this.state.today;
    var EVENT_API = 'https://www.rijksmuseum.nl/api/en/agenda/'+chosenDate+'?key='+PLANNER_API_KEY+'&format=json';

    fetch(EVENT_API)
      .then(response => response.json())
      .then(result => {console.log(result)
        // var allEvents = result.options;
        this.setState({allEvents: result.options});
      }
    );
  }

  onChange(event){
    var momentt = moment(event.target.value).format('YYYY-MM-DD');
    this.setState({ calendarDate: momentt });
    var PICKED = momentt;
    var API = 'https://www.rijksmuseum.nl/api/en/agenda/'+PICKED+'?key='+PLANNER_API_KEY+'&format=json';

    fetch(API)
      .then(response => response.json())
      .then(result => {console.log(result)
      //  var allEvents = result.options;
        this.setState({allEvents: result.options});
      }
    );
  }

  render(){
    // moment.tz.add('Europe/Amsterdam|AMT NST +0120 +0020 CEST CET|-j.w -1j.w -1k -k -20 -10|010101010101010101010101010101010101010101012323234545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545|-2aFcj.w 11b0 1iP0 11A0 1io0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1co0 1io0 1yo0 Pc0 1a00 1fA0 1Bc0 Mo0 1tc0 Uo0 1tA0 U00 1uo0 W00 1s00 VA0 1so0 Vc0 1sM0 UM0 1wo0 Rc0 1u00 Wo0 1rA0 W00 1s00 VA0 1sM0 UM0 1w00 fV0 BCX.w 1tA0 U00 1u00 Wo0 1sm0 601k WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|16e5');

    //Kan flyttas till CSS senare
    var border = {padding: 1, border: 1, borderStyle: 'dotted'};

    var eventsToDisplay = this.state.allEvents.map((event, index) => {
    //  var s = moment(event.period.startDate);
      var available = <a href={event.links.web}>Book</a>;

        moment().calendar((event.period.startDate), {
          sameDay: function(now) {
            if (this.isBefore(now)){
              return console.log('will  happen today');
            } else {
              console.log('happened today');
              available = 'Event has passed.';
              return 'Event has passed.';
            }
          }
        });

    //  var timeLeft = moment().diff(event.period.startDate, 'days');
      console.log('timeleft: ' + moment(event.period.startDate).diff(moment(), 'days'));
      return <tr key={index}><td>{event.period.text}</td><td>{event.exposition.name}</td><td>{available}</td></tr>;
    });

    return <div id="plannerTable">
    <form>search date:<br/><input type="date" min={this.state.today} onChange={this.onChange}/></form>
    <br />
    <table>
    <tbody>
    <tr><th id="thDate" >{this.state.calendarDate}</th></tr>
    <tr>
      <th>Time</th>
      <th>Event</th>
      <th>Tickets</th>
    </tr>
      { eventsToDisplay }
    </tbody>
    </table>
    </div>
  }
}

module.exports = Planner;

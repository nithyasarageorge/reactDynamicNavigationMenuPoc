import React from 'react';
import data from "./data";
const nav = {
  height: '300px',
  width: '100px',
  float: 'left',
  padding: '5px'
};
const link = {
  'textDecoration': 'none',
  'color': 'black',
  'lineHeight': '30px'
};
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { val: "" };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    this.setState({
      val: event.target.value
    })
    this.props.fncall(event.target.value);
  }
  render() {
    var q = data.map((t) => {
      return <li style={{ listStyleType: 'none', 'cursor': 'pointer', 'marginBottom': '5px' }} onClick={this.handleClick} value={t.no} className="list">{t.name}</li>;
    });
    return (
      <div style={nav}>
        <ol style={{ listStyleType: 'none' }}>
          <li>{q}</li>
        </ol>
      </div>
    );
  }
}
export default App;

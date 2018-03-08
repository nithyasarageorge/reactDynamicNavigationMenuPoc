import React from 'react';
import data from './data';

const section = {
  width: '350px',
  float: 'left',
  padding: '20px',
  textAlign: 'center'
};

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};
class Menu extends React.Component {
  render() {
      return (
        <div style={styles}>
          <div style={section}>
            <p style={{ paddingTop:'0px', color: 'black' ,fontWeight:'bold'}}>{data[this.props.data].name}</p>
            <div>{data[this.props.data].value}</div>
          </div>
        </div>);
  }
}
export default Menu;

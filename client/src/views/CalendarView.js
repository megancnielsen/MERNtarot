import React, { Component } from 'react';
import Calendar from 'react-calendar';
import '../text.css'
import './CalendarView.css';

// const calenderStyle = {
//     width: '100%',
//     background: 'black',
// };

class CalendarView extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => {
    this.setState({ date })
    alert('This is the date ' + date);
  } 
  
  
 
  render() {
    return (
        <container>
            <div>
                <Calendar 
                className="w-100 p-5 mt-5"
                onChange={this.onChange}
                value={this.state.date} />
            </div>
            <div className="row border border-dark m-5"></div>
            <div className="row">
                <p>Connect:
                Email: segoviatarot@gmail.com | Instagram: @t_n_tarot</p>
            </div>
      </container>
    );
  }
}
export default CalendarView;
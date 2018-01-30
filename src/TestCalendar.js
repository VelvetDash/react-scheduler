import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import events from './events';
import 'react-big-calendar/lib/css/react-big-calendar.css';

BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

let Timeslots = props => (
  <BigCalendar
    {...props}
    events={events}
    step={30}       // defaults t
    timeslots={1}
    min={new Date(2018, 0, 30, 8, 0, 0)}
    max={new Date(2018, 0, 30, 18, 0, 0)}
    defaultView="week"
    defaultDate={new Date(2018, 0, 30)}
  />
)

export default Timeslots;
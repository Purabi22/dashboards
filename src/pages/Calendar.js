import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import './Calendar.css'; // Import custom CSS file

const Calendar = () => {
  return (
    <div className="calendar-container">
      <h1 className="calendar-heading">Calendar</h1>
      <div className="calendar">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
        />
      </div>
    </div>
  );
};

export default Calendar;

import React, { useState, useEffect } from "react";
// import Calendar from '../calendar';
import { formatDate } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
// Calendar
import "./calendar.css";
const EventsCalendar = ({ events }) => {
  const formteD = (d) => {
    return new Date(d).toLocaleDateString("fr-CA");
  };
  const hormonevents = [
    {
      title: "Prep 1",
      start: formteD(events.StandardPackageHormone__PrepDate1),
      textColor: "black",
      backgroundColor: "#63a7ff",
    },
    {
      title: "Prep 2",
      start: formteD(events.StandardPackageHormone__PrepDate2),
      textColor: "black",
      backgroundColor: "#63a7ff",
    },
    {
      title: "Prep 3",
      start: formteD(events.StandardPackageHormone__PrepDate3),
      textColor: "black",
      backgroundColor: "#63a7ff",
    },
    {
      title: "Prep 4",
      start: formteD(events.StandardPackageHormone__PrepDate4),
      textColor: "black",
      backgroundColor: "#63a7ff",
    },
    {
      title: "Test 1",
      start: formteD(events.StandardPackageHormone__testDate1),
      backgroundColor: "green",
      textColor: "black",
      backgroundColor: "#FFA000",
    },
    {
      title: "Test 2",
      start: formteD(events.StandardPackageHormone__testDate2),
      backgroundColor: "green",
      textColor: "black",
      backgroundColor: "#FFA000",
    },
    // Add more events as needed
  ];
  // const main_events = {type === 1?hormonevents:metabolicevents}
  return (
    <div className="demo-app">
      {/* {renderSidebar()} */}
      <div className="demo-app-main">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          initialView="dayGridMonth"
          initialDate={formteD(events.StandardPackageHormone__PrepDate1)}
          events={hormonevents}
          className='MainCal'
        />
      </div>
    </div>
  );
};
export default EventsCalendar;

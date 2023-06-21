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
      backgroundColor: "#CDC2AE",
    },
    {
      title: "Prep 2",
      start: formteD(events.StandardPackageHormone__PrepDate2),
      textColor: "black",
      backgroundColor: "#CDC2AE",
    },
    {
      title: "Prep 3",
      start: formteD(events.StandardPackageHormone__PrepDate3),
      textColor: "black",
      backgroundColor: "#CDC2AE",
    },
    {
      title: "Prep 4",
      start: formteD(events.StandardPackageHormone__PrepDate4),
      textColor: "black",
      backgroundColor: "#CDC2AE",
    },
    {
      title: "Reminder 1",
      start: formteD(events.StandardPackageHormone__reminder1Time),
      backgroundColor: "#CDC2AE",
      textColor: "black",
    },
    {
      title: "Reminder 2",
      start: formteD(events.StandardPackageHormone__reminder2Time),
      backgroundColor: "#CDC2AE",
      textColor: "black",
    },
    {
      title: "Test 1",
      start: formteD(events.StandardPackageHormone__testDate1),
      backgroundColor: "green",
      textColor: "black",
      backgroundColor: "#ECE5C7",
    },
    {
      title: "Test 2",
      start: formteD(events.StandardPackageHormone__testDate2),
      backgroundColor: "green",
      textColor: "black",
      backgroundColor: "#ECE5C7",
    },
    {
      title: "Test Sampling",
      start: formteD(events.hormoneTestSamplingDate),
      backgroundColor: "#C2DEDC",
      textColor: "black",
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

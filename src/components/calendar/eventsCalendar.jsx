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
    },
    {
      title: "Prep 2",
      start: formteD(events.StandardPackageHormone__PrepDate2),
    },
    {
      title: "Prep 3",
      start: formteD(events.StandardPackageHormone__PrepDate3),
    },
    {
      title: "Prep 4",
      start: formteD(events.StandardPackageHormone__PrepDate4),
    },
    {
      title: "Reminder 1",
      start: formteD(events.StandardPackageHormone__reminder1Time),
      backgroundColor: "red",
    },
    {
      title: "Reminder 2",
      start: formteD(events.StandardPackageHormone__reminder2Time),
      backgroundColor: "red",
    },
    {
      title: "Test 1",
      start: formteD(events.StandardPackageHormone__testDate1),
      backgroundColor: "green",
    },
    {
      title: "Test 2",
      start: formteD(events.StandardPackageHormone__testDate2),
      backgroundColor: "green",
    },
    {
      title: "Test Sampling",
      start: formteD(events.hormoneTestSamplingDate),
      backgroundColor: "aqua",
    },
    // Add more events as needed
  ];
  const metabolicevents = [
    {
      title: "Prep 1",
      start: formteD(events.StandardPackageMetabolic__PrepDate1),
    },
    {
      title: "Prep 2",
      start: formteD(events.StandardPackageMetabolic__PrepDate2),
    },
    {
      title: "Prep 3",
      start: formteD(events.StandardPackageMetabolic__PrepDate3),
    },
    {
      title: "Prep 4",
      start: formteD(events.StandardPackageMetabolic__PrepDate4),
    },
    {
      title: "Reminder 1",
      start: formteD(events.StandardPackageMetabolic__reminder1Time),
      backgroundColor: "red",
    },
    {
      title: "Reminder 2",
      start: formteD(events.StandardPackageMetabolic__reminder2Time),
      backgroundColor: "red",
    },
    {
      title: "Test 1",
      start: formteD(events.StandardPackageMetabolic__testDate1),
      backgroundColor: "green",
    },
    {
      title: "Test 2",
      start: formteD(events.StandardPackageMetabolic__testDate2),
      backgroundColor: "green",
    },
    {
      title: "Test Sampling",
      start: formteD(events.metabolicTestDate),
      backgroundColor: "aqua",
    },
    // Add more events as needed
  ];
  // const main_events = {type === 1?hormonevents:metabolicevents}
  return (
    <div className="demo-app">
      {/* {renderSidebar()} */}
      <div className="demo-app-main">
        <FullCalendar
          plugins={[dayGridPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth",
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

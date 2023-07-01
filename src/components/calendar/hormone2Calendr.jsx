import React, { useState, useEffect } from "react";
// import Calendar from '../calendar';
import { formatDate } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Grid, Alert } from "@mui/material";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

// Calendar
// import "./index.css"
const Hormone2Calendr = ({
  type,
  finalData,
  setData,
  HormoneSamplingDateEvents,
  setHormoneSamplingDateEvents,
  MetabolicEvents,
  setMetabolicEvents,
}) => {
  const [minDate, setminDate] = useState(null);
  const [validRange, setvalidRange] = useState({});
  const [showAlert, setShowAlert] = useState(true);
  const new_events = () => {
    return type == "1" ? HormoneSamplingDateEvents : MetabolicEvents;
  };
  const [eventsList, seteventsList] = useState([]);
  useEffect(() => {
    seteventsList(new_events);
  }, [HormoneSamplingDateEvents, MetabolicEvents]);
  useEffect(() => {
    if (eventsList.length > 0) {
      setvalidRange({ start: getFutDte("F", 0, new Date()) });
      console.log("setting new valid range");
    }
  }, [eventsList]);
  const getFutDte = (time, number, date) => {
    // Create a new Date object
    const currentDate = new Date(date);

    // Get the current day
    const currentDay = currentDate.getDate();

    // Set the date to the previous day
    if (time == "F") {
      currentDate.setDate(currentDay + number);
    } else {
      currentDate.setDate(currentDay - number);
    }

    // Get the year, month, and day from the updated Date object
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");

    // Format the date as yyyy-mm-dd
    const formattedDate = `${year}-${month}-${day}`;

    // Print the formatted date
    console.log(formattedDate);
    return formattedDate;
  };
  useEffect(() => {
    const dte = getFutDte("F", 5, new Date());
    setminDate(dte);
    setvalidRange({ start: dte });
  }, []);
  const eventRender = (info) => {
    const { event, el } = info;

    // Add custom rendering logic here
    // You can modify the event element (el) as needed

    return el;
  };
  // const [events, setevents] = useState([]);
  const handleDateSelect = (selectInfo) => {
    setShowAlert(false);
    console.log(selectInfo);
    const clickedDate = selectInfo.date;
    const clickedDayOfWeek = clickedDate.getDay();
    const enabledWeekDays = [0, 1, 2];
    if (!enabledWeekDays.includes(clickedDayOfWeek)) {
      return false;
    }
    if (selectInfo.dateStr < minDate) return;
    const prepEvents = [
      {
        start: getFutDte("P", 3, selectInfo.dateStr),
        title: "preparation Day 1",
        textColor: "black",
        backgroundColor: "#63a7ff",
      },
      {
        start: getFutDte("P", 2, selectInfo.dateStr),
        title: "preparation Day 2",
        textColor: "black",
        backgroundColor: "#63a7ff",
      },
      {
        start: getFutDte("P", 1, selectInfo.dateStr),
        title: "preparation Day 3",
        textColor: "black",
        backgroundColor: "#63a7ff",
      },
      {
        start: getFutDte("P", 0, selectInfo.dateStr),
        title: "Test Day 1",
        backgroundColor: "#a0dcff",
        textColor: "black",
      },
      {
        start: getFutDte("F", 1, selectInfo.dateStr),
        title: "Test Date 2",
        backgroundColor: "#FFA000",
        textColor: "black",
      },
    ];
    // setevents(prepEvents);
    setvalidRange({ start: getFutDte("F", 0, new Date()) });
    if (type == "1") {
      finalData.hormoneTestSamplingDate = selectInfo.dateStr;
      setHormoneSamplingDateEvents(prepEvents);
      setData({ ...finalData });
      console.log(finalData);
      console.log("hormone events", HormoneSamplingDateEvents);
    } else {
      finalData.metabolismTestSamplingDate = selectInfo.dateStr;
      setMetabolicEvents(prepEvents);
      setData({ ...finalData });
      console.log(finalData);
    }

    console.log("previoes date", getFutDte("P", 1, selectInfo.dateStr));
    // alert(selectInfo.dateStr);
  };
  return (
    <div className="demo-app calendr1">
      {/* Grid mei Dalo  */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          {renderSidebar()}
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="demo-app-main calendar2">
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay",
              }}
              initialView="dayGridMonth"
              // editable={true}
              validRange={validRange}
              selectable={true}
              // selectMirror={true}
              dateClick={handleDateSelect}
              events={
                type === "1" ? HormoneSamplingDateEvents : MetabolicEvents
              } // alternatively, use the `events` setting to fetch from a feed

              // eventRender={eventRender}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
  function renderSidebar() {
    return (
      <div className="demo-app-sidebar">
        <div className="demo-app-sidebar-section">
          <h2>Legend.</h2>
          <ul>
            <li
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span
                style={{
                  backgroundColor: "#f1f1f1",
                  height: "20px",
                  width: "50px",
                  color: "#f1f1f1",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                .
              </span>{" "}
              Disabled Dates{" "}
            </li>
            <li
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span
                style={{
                  backgroundColor: "#fff",
                  height: "20px",
                  width: "50px",
                  color: "#fff",
                  display: "flex",
                  flexDirection: "row",
                  border: "0.1px solid rgba(0,0,0,0.1)",
                  borderRadius: "4px",
                }}
              >
                .
              </span>{" "}
              Enabled Dates{" "}
            </li>
            <br />
            {showAlert && (
              <Alert severity="info">
                Select the dates to check the preparation dates, Click on Date
                to select it
              </Alert>
            )}
          </ul>
        </div>
        <br />
        <div className="demo-app-sidebar-section">
          <h2>Important Dates ({eventsList.length})</h2>
          <ul>{eventsList.map(renderSidebarEvent)}</ul>
        </div>
      </div>
    );
  }
};
function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

function renderSidebarEvent(event) {
  return (
    <li
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      key={event.id}
    >
      <Alert
        icon={<WatchLaterIcon fontSize="inherit" />}
        sx={{ margin: "4px 0px" }}
      >
        {event.title}:{" "}
        {formatDate(event.start, {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </Alert>
    </li>
  );
}
export default Hormone2Calendr;

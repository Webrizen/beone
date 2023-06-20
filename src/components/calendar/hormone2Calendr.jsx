import React, { useState, useEffect } from 'react'
// import Calendar from '../calendar';
import { formatDate } from '@fullcalendar/core'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
// Calendar
// import "./index.css"
const Hormone2Calendr = ({ type, finalData, setData }) => {

    const [minDate, setminDate] = useState(null);
    const [validRange, setvalidRange] = useState({});
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
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');

        // Format the date as yyyy-mm-dd
        const formattedDate = `${year}-${month}-${day}`;

        // Print the formatted date
        console.log(formattedDate);
        return formattedDate;
    }
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
    // const validRange = () => {

    //     return {
    //         // start: "2023-06-19",
    //         start: minDate,
    //         // daysOfWeek: [0, 1, 2]

    //     };
    // };
    const [events, setevents] = useState([]);
    const handleDateSelect = (selectInfo) => {
        console.log(selectInfo);
        const clickedDate = selectInfo.date;
        const clickedDayOfWeek = clickedDate.getDay();
        const enabledWeekDays = [0, 1, 2]
        if (!enabledWeekDays.includes(clickedDayOfWeek)) {
            return false;
        }
        if (selectInfo.dateStr < minDate) return;
        const prepEvents = [
            {
                start: getFutDte("P", 1, selectInfo.dateStr),
                title: 'Prep 3',
                // backgroundColor: ""
            },
            {
                start: getFutDte("P", 2, selectInfo.dateStr),
                title: 'Prep 2',
                // backgroundColor: ""
            },
            {
                start: getFutDte("P", 3, selectInfo.dateStr),
                title: 'Prep 1',
                // backgroundColor: ""
            },
            {
                start: getFutDte("P", 0, selectInfo.dateStr),
                title: 'Selected Date',
                backgroundColor: "green"
            },
            {
                start: getFutDte("F", 1, selectInfo.dateStr),
                title: 'Test Date',
                backgroundColor: "red"
            }
        ];
        setevents(prepEvents);
        setvalidRange({ start: getFutDte("F", 0, new Date()) })
        if (type == "1") {
            finalData.hormoneTestSamplingDate = selectInfo.dateStr;
            setData({ ...finalData }); console.log(finalData);
        } else {
            finalData.metabolismTestSamplingDate = selectInfo.dateStr;
            setData({ ...finalData }); console.log(finalData);
        }

        console.log("previoes date", getFutDte("P", 1, selectInfo.dateStr));
        alert(selectInfo.dateStr);

    }
    return (
        <div className='demo-app'>

            {renderSidebar()}
            <div className='demo-app-main'>
                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay'
                    }}
                    initialView='dayGridMonth'
                    // editable={true}
                    validRange={validRange}
                    selectable={true}
                    // selectMirror={true}
                    dateClick={handleDateSelect}

                    events={events} // alternatively, use the `events` setting to fetch from a feed

                // eventRender={eventRender}

                />
            </div>
        </div>
    );
    function renderSidebar() {
        return (
            <div className='demo-app-sidebar'>
                <div className='demo-app-sidebar-section'>
                    <h2>Instructions</h2>
                    <ul>
                        <li>Select dates and you will be prompted to create a new event</li>
                        <li>Drag, drop, and resize events</li>
                        <li>Click an event to delete it</li>
                    </ul>
                </div>

                <div className='demo-app-sidebar-section'>
                    <h2>All Events ({events.length})</h2>
                    <ul>
                        {events.map(renderSidebarEvent)}
                    </ul>
                </div>
            </div>
        )
    }
};
function renderEventContent(eventInfo) {
    return (
        <>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
        </>
    )
}

function renderSidebarEvent(event) {
    return (
        <li key={event.id}>
            <i>{event.title}: </i>
            <b>{formatDate(event.start, { year: 'numeric', month: 'short', day: 'numeric' })}</b>
        </li>
    )
}
export default Hormone2Calendr;
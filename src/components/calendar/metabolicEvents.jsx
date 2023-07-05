import React, { useState, useEffect } from 'react'
// import Calendar from '../calendar';
import { formatDate } from '@fullcalendar/core'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
// Calendar
// import "./index.css"
const MetaBolicEvents = ({ events }) => {
    const formteD = (d) => {
        return new Date(d).toLocaleDateString('fr-CA')
    }
    const metabolicevents = [
        {
            title: "Prep 1",
            start: formteD(events.StandardPackageMetabolic__PrepDate1),
            backgroundColor: "#63a7ff",
            textColor: "black",
        },
        {
            title: "Prep 2",
            start: formteD(events.StandardPackageMetabolic__PrepDate2),
            backgroundColor: "#63a7ff",
            textColor: "black",
        },
        {
            title: "Prep 3",
            start: formteD(events.StandardPackageMetabolic__PrepDate3),
            backgroundColor: "#63a7ff",
            textColor: "black",
        },
        {
            title: "Prep 4",
            start: formteD(events.StandardPackageMetabolic__PrepDate4),
            backgroundColor: "#63a7ff",
            textColor: "black",
        },
        {
            title: "Test 1",
            start: formteD(events.StandardPackageMetabolic__testDate1),
            backgroundColor: "#FFA000",
            textColor: "black",
        },
        {
            title: "Test 2",
            start: formteD(events.StandardPackageMetabolic__testDate2),
            backgroundColor: "#FFA000",
            textColor: "black",
        },
        // Add more events as needed
    ];
    const [mevents, setmevents] = useState([]);
    useEffect(() => {
        setmevents(metabolicevents);
        console.log("metabolic event rendering");
    }, []);
    const eventRender = (info) => {
        const { event, el } = info;

        // Add custom rendering logic here
        // You can modify the event element (el) as needed

        return el;
    };
    // const main_events = {type === 1?hormonevents:metabolicevents}
    return (
        <div className='demo-app'>

            {/* {renderSidebar()} */}
            <div className='demo-app-main'>
                <FullCalendar
                    plugins={[dayGridPlugin]}
                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth'
                    }}

                    initialView='dayGridMonth'
                    initialDate={formteD(events.StandardPackageHormone__PrepDate1)}
                    // editable={true}
                    events={metabolicevents}
                // eventRender={eventRender}
                // selectable={true}
                // eventsSet={handleEvents} // called after events are initialized/added/changed/removed
                /* you can update a remote database when these fire:
                eventAdd={function(){}}
                eventChange={function(){}}
                eventRemove={function(){}}
                */
                />
            </div>
        </div>
    );

};
export default MetaBolicEvents;
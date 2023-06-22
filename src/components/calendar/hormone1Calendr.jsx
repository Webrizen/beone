import React, { useState, useEffect } from 'react'
// import Calendar from '../calendar';
import { formatDate } from '@fullcalendar/core'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
// Calendar
// import "./index.css"
const Hormone1Calendr = ({ finalData, setData, testingWindwoDate, settestingWindwoDate }) => {
    const [date, setdate] = useState(null);

    const [validDate, setvalidDate] = useState();
    useEffect(() => {
        var currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 1);
        setvalidDate(currentDate);
    }, []);
    const handleDateSelect = (selectInfo) => {
        console.log(selectInfo);
        const clickedDate = selectInfo.dateStr;
        const events = [
            {
                start: clickedDate,
                display: 'background'
            }
        ];
        settestingWindwoDate(events);
        finalData.hormoneTestWindowStartDate = clickedDate;
        setData({ ...finalData }); console.log(finalData);
        setdate(clickedDate);
        // alert(clickedDate);
    }


    return (
        <div className='demo-app calendr1'>

            {/* {renderSidebar()} */}
            <div className='demo-app-main' style={{ margin: "auto" }}>
                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay'
                    }}
                    initialView='dayGridMonth'
                    events={testingWindwoDate}
                    // editable={true}
                    validRange={{
                        start: new Date(+new Date().setHours(0, 0, 0, 0) + 86400000).toLocaleDateString('fr-CA')
                    }}
                    selectable={true}
                    dateClick={handleDateSelect}

                />
            </div>
        </div>
    );

};
export default Hormone1Calendr;
import React from 'react';

import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';

const Calendar = () => {
    return (
        <div>
            <h1>Schedule</h1>
            <ScheduleComponent>
                <Inject services={[Day, Week, WorkWeek, Month, Agenda ]} />

            </ScheduleComponent>
        </div>
    )
}

export default Calendar;
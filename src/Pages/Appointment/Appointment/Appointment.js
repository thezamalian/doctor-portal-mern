import React from 'react';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    console.log(date);

    return (
        <div
        // style={{ marginTop: '15px' }}
        >
            <AppointmentHeader date={date} setDate={setDate} />
            <AvailableAppointments date={date} />
        </div>
    );
};

export default Appointment;
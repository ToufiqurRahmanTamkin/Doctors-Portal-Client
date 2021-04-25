import React from 'react';
import chair from '../../../images/chair.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './AppointmentHeader.css'

const AppointmentHeader = ({handleDateChange}) => {
    
    return (
        <main style={{ height: '550px'}} className="row pt-5">
            <div className="col-md-4 offset-md-1 ">
                <h1 style={{ color: '#3A4256' }}>Appointment</h1>
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default AppointmentHeader;
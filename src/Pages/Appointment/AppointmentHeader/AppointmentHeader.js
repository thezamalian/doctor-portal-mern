import { Container, Grid } from '@mui/material';
import React from 'react';
import chair from '../../../images/chair.png'
import Calendar from '../../Shared/Calendar/Calendar';

const AppointmentHeader = ({ date, setDate }) => {

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5} >
                    <h2>Appointment</h2>
                    <Calendar date={date} setDate={setDate} />

                </Grid>
                <Grid item xs={12} md={7}>
                    <img src={chair} style={{ width: '90%', marginTop: '20px' }} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppointmentHeader;
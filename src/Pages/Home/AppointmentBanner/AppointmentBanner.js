import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material'
import doctor from '../../../images/doctor.png'
import bgImg from '../../../images/appointment-bg.png'

const appointmentBanner = {
    background: `url(${bgImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left bottom',
    backgroundSize: '120%, 100%',
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken',
    marginTop: 175,
    color: 'white'
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} >
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: 400, marginTop: '-110px' }}
                        src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',

                }} >
                    <Box sx={{ mx: 3, }}>
                        <Typography variant="h6" color="skyBlue">
                            Appointment
                        </Typography>
                        <Typography variant="h4">
                            Make an Appointment Today
                        </Typography>
                        <Typography variant="h7" sx={{ fontSize: 14 }}>
                            Make an Appointment Today. ake an Appointment Today. Make an Appointment Today. Make an Appointment Today. Make an Appointment Today. Make an Appointment Today. Make an Appointment Today.
                        </Typography>
                        <br />
                        <Button variant='contained' color="success" sx={{ mt: 2 }}>
                            Learn More
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;
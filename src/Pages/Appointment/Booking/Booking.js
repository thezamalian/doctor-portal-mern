import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date }) => {
    const [open, setOpen] = React.useState(false);

    const { name, time, space } = booking;

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 3 }}>
                    <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant='h5' gutterBottom>
                        {name}
                    </Typography>
                    <Typography variant='h6' gutterBottom>
                        {time}
                    </Typography>
                    <Typography variant='caption' display="block" gutterBottom>
                        {space} Spaces are Available
                    </Typography>
                    <Button variant="contained" sx={{ color: '' }} onClick={handleOpen}>
                        Book Appointment
                    </Button>
                </Paper>
            </Grid >
            <BookingModal
                booking={booking}
                open={open}
                handleClose={handleClose}
                date={date}
            ></BookingModal>
        </>
    );
};

export default Booking;
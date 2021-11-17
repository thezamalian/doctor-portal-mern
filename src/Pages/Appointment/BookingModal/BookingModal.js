import React from 'react';
import { Backdrop, Fade, Modal, Box, Typography, TextField, Button } from '@mui/material'
// import { Box } from '@mui/system';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ open, handleClose, booking, date }) => {
    const { name, time } = booking;

    const handleBookingSubmit = e => {

        alert('submitting');
        handleClose();
        e.preventDefault()
    }

    return (

        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2" sx={{ mx: 'auto' }}>
                        {name}
                    </Typography>
                    <form onSubmit={handleBookingSubmit}>
                        <TextField
                            disabled
                            // label="Phone Number"
                            id="outlined-size-small"
                            defaultValue={date.toDateString()}
                            size="small"
                            sx={{ width: '90%', m: 1 }}
                        />
                        <TextField
                            disabled
                            // label="Size"
                            id="outlined-size-small"
                            defaultValue={time}
                            size="small"
                            sx={{ width: '90%', m: 1 }}
                        />
                        <TextField
                            label="Your Name"
                            id="outlined-size-small"
                            // defaultValue={time}
                            size="small"
                            sx={{ width: '90%', m: 1 }}
                        />
                        <TextField
                            label="Your Email"
                            id="outlined-size-small"
                            // defaultValue={time}
                            size="small"
                            sx={{ width: '90%', m: 1 }}
                        />
                        <TextField
                            label="Phone Number"
                            id="outlined-size-small"
                            // defaultValue={time}
                            size="small"
                            sx={{ width: '90%', m: 1 }}
                        />
                        <Button type="submit" variant="contained" sx={{ m: '5px' }}>
                            Submit
                        </Button>
                    </form>
                </Box>
            </Fade>
        </Modal>

    );
};

export default BookingModal;
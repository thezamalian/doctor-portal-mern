import React from 'react';
import { Box, Container, Grid, Typography, Button } from '@mui/material'

import chair from '../../../images/chair.png'
import bgImg from '../../../images/bg.png'

const bannerBg = {
    background: `url(${bgImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left bottom',
    backgroundSize: '120%, 100%',
    // backgroundColor: 'rgba(45, 58, 74, 0.9)',
    // backgroundBlendMode: 'darken',
    // marginTop: 175,
    // color: 'white'
}
const verticalCenter = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 400,
    // border: '1px solid red'
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}
            // sx={{
            //     display: 'flex',
            //     justifyContent: 'flex-start',
            //     alignItems: 'center',
            //     mx: 'auto'
            // }}
            >
                <Grid item sx={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={5}>
                    <Box>
                        <Typography variant="h3">
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant="h7" sx={{ fontSize: 13, color: 'gray' }}>
                            Your New Smile  Starts Here. Your New Smile  Starts Here. Your New Smile  Starts Here. Your New Smile  Starts Here. Your New Smile  Starts Here. Your New Smile  Starts Here. Your New Smile  Starts Here. Your New Smile  Starts Here. Your New Smile  Starts Here. Your New Smile  Starts Here.
                        </Typography>
                        <br />
                        <Button variant="contained" sx={{ my: 3 }}>
                            Get Appointment -_-
                        </Button>
                    </Box>
                </Grid>
                <Grid item style={verticalCenter} xs={12} md={7}>
                    <img style={{ width: '75%' }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;
import React from 'react';
// import { experimentalStyled as styled } from '@mui/material/styles';
import { Container, Box, Grid, Typography } from '@mui/material';
import Service from '../Service/Service';

import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png';

const services = [
    {
        name: 'Fluoride Treatment',
        details: 'Fluoride treatments are usually done at six-month cleaning appointments. Treatment involves the dentist applying varnish to your teeth using a gel, foam, or a rinse. We may also recommend fluoride treatments for adults who are at high risk of tooth decay.',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        details: "Dental fillings are used to treat cavities because a dentist tends to want to remove the decayed part (the cavity) and fill it to stop any further damage from occurring. While there aren't ways to remove a cavity without using a filling, there are ways almost to reverse the decay.",
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        details: 'Professional teeth whiteners are safe, effective, and done under the supervision of a dental professional. In most cases, it is worth the extra cost to visit the dentist to get long-lasting, safe results. Yes, teeth whitening is very safe when done correctly.',
        img: whitening
    }
]



const Services = () => {
    return (
        <Box sx={{ flexGrow: 1, mt: 3 }}>
            <Typography sx={{ fontWeight: 500, color: 'primary.main' }} variant="h6" component="div">
                OUR SERVICES
            </Typography>
            <Typography sx={{ fontWeight: 600, mb: 5 }} variant="h4" component="div">
                Services We Provide
            </Typography>
            <Container sx={{ mt: 3 }} >
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}  >
                    {
                        services.map(service => (
                            <Service
                                key={service.name}
                                service={service}
                            ></Service>
                        ))
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;
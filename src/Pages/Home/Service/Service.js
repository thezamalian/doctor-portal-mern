import { Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';
import React from 'react';

const Service = ({ service }) => {
    const { name, details, img } = service;

    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, boxShadow: 0 }}>
                <CardMedia
                    component="img"
                    style={{ width: 'auto', height: '80px', margin: '0 auto' }}
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>

                    <Typography variant="body2" color="text-secondary">
                        {details}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Service;
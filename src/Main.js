import React from 'react'
import './App.css';
import { CardContent, Typography, CardMedia } from '@mui/material';
import Navbar from './Nav/navbar';
import Footer from './Footer/Footer';
import { Container } from '@mui/system';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { Grid } from '@mui/material';
import NewHome from '../src/Assets/NewHome.png'

import Button from '@mui/material/Button';


export default function Main() {


    return (
        <div className="App">
            <Navbar />
            <Typography variant='h4' color='primary' sx={{ mt: 3 }}>Personal Portfolio page</Typography>

            <div style={{ display: "flex" }}>
                <Container component='main'>
                    <Grid item={true} xs={4} sx={{ mt: 1, mb: 3 }}>
                        {/* Photo */}
                        <Grid>
                            <Card sx={{ maxWidth: 400 }}>
                                <CardMedia
                                    component="img"
                                    image={NewHome}
                                    alt="Franco Photo"
                                />
                                <CardContent>

                                </CardContent>
                            </Card>
                        </Grid>
                        {/* Content */}

                    </Grid>
                    <Grid item={true} xs={4} sx={{ mt: 1, mb: 3 }}>
                        <Card sx={{ maxWidth: 700 }}>
                            <CardContent>
                                <Typography variant='h7' color='primary'>Franco Enslin </Typography>
                                <Typography variant='body1'>
                                    Junior Software developer at Keystone Electronic Solutions.
                                </Typography>
                                <Typography variant='body2'>
                                    Currently working in Reactjs, Redux and Python FastAPI
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Container>
            </div>

            <Footer sx={{ mt: 20, mb: 10 }} />

        </div>
    )

}

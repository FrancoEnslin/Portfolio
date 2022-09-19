import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export const Banner = () => {


    return (
        <section className='banner' id='home'>
            <Container >
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>Welcome to my portfolio</span>
                        <h1>{`Franco Enslin`} <span className='wrap'>Software Developer</span></h1>
                        <p></p>
                    </Col>
                </Row>
            </Container>

            Banner

        </section>
    )
}
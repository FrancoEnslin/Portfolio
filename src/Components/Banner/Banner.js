import { isValidInputTimeValue } from '@testing-library/user-event/dist/utils'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {ArrowRightCircle} from 'react-bootstrap-icons'
import { useHref } from 'react-router-dom'
import headerImg from '../../Assets/header-img.svg'
import pfp from '../../Assets/pfp.jpeg'
import Spline from '@splinetool/react-spline';


export const Banner = () => {
    const [loopNumber, setLoopNumber] = useState(0)
    const [isDeleting, setIsDeleting]= useState(false)
    const toRotate = ['Front end Developer','Mobile App developer',' Backend Developer']
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() *100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
          tick();
        }, delta);
    
        return () => { clearInterval(ticker) };
      }, [text])

    const tick = () => {
        let i = loopNumber * toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }

        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true)
            setDelta(period)
        }
        else if (!isDeleting && updatedText === '' ){
            setIsDeleting(false)
            setLoopNumber(loopNumber + 1)
            setDelta(500);
        }
    }
    return (
        <section className='banner' id='home'>
            <Container >
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>Welcome to my portfolio</span>
                        <h1>{`Franco Enslin `} <span className='wrap'>{text}</span></h1>
                        <p>Keep scrolling to discover my skills and previous projects </p>
                        <button onClick={() => {window.location = '#connect'}} >Let's connect<ArrowRightCircle size={25} />
                        
                        </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}> 
                    {/*  */}
                        <img src={headerImg} alt='Some cool photo' className=''/>
                        {/* <Spline scene="https://prod.spline.design/oUlczkNHSS-gc1F2/scene.splinecode" /> */}
                    </Col>
                </Row>
            </Container>

            

        </section>
    )
}
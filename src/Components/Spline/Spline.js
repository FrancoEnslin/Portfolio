import Spline from '@splinetool/react-spline';
import { Col, Container, Row } from 'react-bootstrap';

export default function spline() {

    const divStyle = {
        width: '100%',
        height: '800px',
    };

    function buttonClick(){
        
    }

    return (
        <div style={divStyle}>
           <button onClick={ () =>{window.location.href='https://my.spline.design/landing-a09fd1944355732eecc060d80b083b9e/'}}>?</button> 
           <Spline scene="https://prod.spline.design/oUlczkNHSS-gc1F2/scene.splinecode" />
        </div>

    );
}

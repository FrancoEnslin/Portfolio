
// import { Typography } from "@mui/material";
// import { Link } from "@mui/material";

// const Footer = ({ }) => {
//     return (
//         <footer style={{ mb: 10 }}>
//             <Typography variant="body2" color="text.secondary" align="center" >
//                 <br />
//                 {'Copyright © '}
//                 <Link color="inherit" href="">
//                     Developed by Franco Enslin.
//                 </Link>
//             </Typography>
//         </footer>

//     )

// }
// export default Footer;


import { Container, Row, Col } from "react-bootstrap";
import {MailchimpForm} from "../Contact/MailchimpForm";
import logo from "../../Assets/logo.svg";
import navIcon1 from "../../Assets/nav-icon1.svg"
import navIcon2 from "../../Assets/nav-item2.svg";
import navIcon3 from "../../Assets/nav-icon3.svg";
import newLogo from '../../Assets/logo portfolio background.gif'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={newLogo} alt="Logo" className="gifLogo" />
    
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            {/* <p>Copyright 2022. All Rights Reserved</p> */}
          </Col>
        </Row>
      </Container>
    </footer>
  )
}



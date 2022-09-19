
import { Typography } from "@mui/material";
import { Link } from "@mui/material";

const Footer = ({ }) => {
    return (
        <footer style={{ mb: 10 }}>
            <Typography variant="body2" color="text.secondary" align="center" >
                <br />
                {'Copyright © '}
                <Link color="inherit" href="">
                    Developed by Franco Enslin.
                </Link>
            </Typography>
        </footer>

    )

}
export default Footer;



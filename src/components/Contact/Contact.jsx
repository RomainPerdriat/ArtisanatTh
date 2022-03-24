import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './contact.scss';
import { Box, Typography } from '@material-ui/core';
import profilplage from '../../assets/profilplage.jpeg';
import { Divider } from '@material-ui/core';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import ContactForm from '../ContactForm/ContactForm'

const Contact = ({className, ...rest}) => {
   return (
       <Box
            className={classnames('contact', className)}
            {...rest}
         >
            <Box className ="contact-text">
                 <Card >
                    <CardMedia className ="contact-media"
                    component="img"
                    src={profilplage}
                    alt="matete" 
                    />
                  
                    <Typography className ="cardcontact"  variant="h5" >
                      Présentation
                    </Typography>
                    <Typography className ="cardcontact">
                      
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography> 
              </Card>        
              <ContactForm sx= {{mt:2 ,mb: 2 ,shadowBox:3}}/> 
              <Divider/>  
              <Box sx = {{mt:2}}>
              <Typography  variant="h5" >
                      Me situer
              </Typography>  
              <div className="contact-container-map">
                <iframe title="ludo'map" className="contact-container-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2646.1474306172313!2d-4.257497284157107!3d48.45370073706886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4816b2c241a4e6ab%3A0xe04f55b4d36b897c!2sMaison%20Pour%20Tous%2FCentre%20Social!5e0!3m2!1sfr!2sfr!4v1646304683575!5m2!1sfr!2sfr" loading="lazy"></iframe>
              </div> 
              </Box>                    
            </Box>
        </Box>
   );
};

Contact.propTypes = {
    className: PropTypes.string,
};
Contact.defaultProps = {
    className: '',
};
export default React.memo(Contact);

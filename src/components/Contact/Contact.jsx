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
                    </Typography>
                  
              </Card>
            
            
            {/* <Divider/>
            <Typography>Me contacter</Typography>
            <Divider/>
            <Typography>Où me trouver?</Typography> */}
                
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

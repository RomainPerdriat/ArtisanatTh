import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './contactform.scss';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import profilplage from '../../assets/profilplage.jpeg';
import { Typography } from '@material-ui/core';


const ContactForm = ({className, ...rest}) => {
   return (
        <Box className={classnames('contactform', className)}
            {...rest}>
            <Box
                component="form"
                className= "form"
                >
                    <Typography  variant="h5" >
                      Me joindre par mail
                    </Typography> 
                    <TextField
                        label="Email"
                        className='form-input'
                        size="small"/>
                    <TextField
                        label="Objet"
                        className='form-input'
                        size="small"
                        multiline/>
                    <TextField
                    rows={10}
                        label="Message"
                        className='form-input'
                        multiline
                        />
                <Box>
                    <Button className="form-button" variant="contained">Envoyer</Button>
                </Box>
            </Box>
        </Box>

   );
};

ContactForm.propTypes = {
    className: PropTypes.string,
};
ContactForm.defaultProps = {
    className: '',
};
export default React.memo(ContactForm);

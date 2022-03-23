import * as React from 'react';

import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './homepagecard.scss';
import { Box } from '@material-ui/core';



const HomePageCard = ({className, ...rest}) => {
   return (
       <Box
            className={classnames('homepagecard', className)}
            {...rest}
            sx={{
                     height: 350,
                     maxWidth: 300,                    
                }}
         >                           
                    
                    
                    <CardContent className = "homepagecard-cardcontent">
                        <Avatar alt="MaTête" src='../../assets/profilplage.jpeg' sx={{ width: 100, height: 100 ,mt:1 , mb: 4}} />                           
                        <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                        </Typography>
                    </CardContent>  
                 
            
        </Box>
   );
};

HomePageCard.propTypes = {
    className: PropTypes.string,
};
HomePageCard.defaultProps = {
    className: '',
};
export default React.memo(HomePageCard);

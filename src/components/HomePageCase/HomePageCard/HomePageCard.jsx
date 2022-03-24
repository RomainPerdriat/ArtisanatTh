import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './homepagecard.scss';
import { Box, Divider } from '@material-ui/core';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import profilplage from '../../../assets/profilplage.jpeg';


const HomePageCard = ({className, ...rest}) => {
   return (
       
    <Card sx={{ maxWidth: 345, minHeight:360, mt:25,p:1, bgcolor :'#e7d7c5'}}>
      <CardActionArea>
        <CardMedia 
          sx={{ boxShadow: 3 }}
          component="img"
          height="140"
          src={profilplage}
          alt="matete" 
        />
        <CardContent >
          <Typography sx={{p:2,}} gutterBottom variant="h5" component="div">
            Qui suis-je?
          </Typography>
          <Divider/>
          <Typography sx={{p:2,}} variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>   
   );
};

HomePageCard.propTypes = {
    className: PropTypes.string,
};
HomePageCard.defaultProps = {
    className: '',
};
export default React.memo(HomePageCard);

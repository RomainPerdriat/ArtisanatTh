import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './beforeafter.scss';
import { Box } from '@material-ui/core';
import profilplage from '../../assets/profilplage.jpeg';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@material-ui/core';

const BeforeAfter = ({className, ...rest}) => {
   return (
       <Box
            className={classnames('beforeafter', className)}
            {...rest}
         >
              <Box className="flip-card-container">
    <Box className="flip-card">
      <Box className="flip-card-front">
        <CardMedia src={profilplage} alt="profilplage"/>
        <Box 
        component="img"
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="The house from the offer."
        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2">
        </Box>
      </Box>
      <Box class="flip-card-back">
        <Typography>
        &quot;Two things are infinite: the universe and human stupidity; and I&apos;m not sure about the universe.&quot;
          <span>- Albert Einstein -</span>
        </Typography>
      </Box>
    </Box>
  </Box>
        </Box>
   );
};

BeforeAfter.propTypes = {
    className: PropTypes.string,
};
BeforeAfter.defaultProps = {
    className: '',
};
export default React.memo(BeforeAfter);

/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './homepage.scss';
import { Box, Typography } from '@material-ui/core';
import HomePageCard from '../HomePageCard/HomePageCard';

// import bg from '../../assets/exemple.jpg';

const HomePage = ({className, ...rest}) => {
   return (
       <Box
            className={classnames('homepage', className)}
            {...rest}
         >
           <Box className = "homepage-picture"/>
            <Box className = "homepage-card">
                <HomePageCard/>
                <HomePageCard/>
                <HomePageCard/>
            </Box>
            <Box className = "homepage-cuire"/>
            <Box className = "homepage-text">
                <Typography>                
                PRESENTATION DES CUIRES
                But we’ve met before. That was a long time ago, I was a kid at St. Swithin’s, It used to be funded by the Wayne Foundation. It’s an orphanage. My mum died when I was small, it was a car accident. I don’t remember it. My dad got shot a couple of years later for a gambling debt. Oh I remember that one just fine. Not a lot of people know what it feels like to be angry in your bones. I mean they understand. The fosters parents. Everybody understands, for a while. Then they want the angry little kid to do something he knows he can’t do, move on. After a while they stop understanding. They send the angry kid to a boy’s home, I figured it out too late. Yeah I learned to hide the anger, and practice smiling in the mirror. It’s like putting on a mask. So you showed up this one day, in a cool car, pretty girl on your arm. We were so excited! Bruce Wayne, a billionaire orphan? We used to make up stories about you man, legends and you know with the other kids, that’s all it was, just stories, but right when I saw you, I knew who you really were. I’d seen that look on your face before. It’s the same one I taught myself. I don’t why you took the fault for Dent’s murder but I’m still a believer in the Batman. Even if you’re not…

                </Typography>
            </Box>            
        </Box>
   );
};

HomePage.propPageTypes = {
    className: PropTypes.string,
};
HomePage.defaultProps = {
    className: '',
};
export default React.memo(HomePage);

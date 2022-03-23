import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './footer.scss';
import logo from '../../assets/Logo_cuir.svg.png';
import facebookLogo from '../../assets/fb-logo.png';
import instaLogo from '../../assets/insta-logo.png';
import { Box } from '@mui/material';

const Footer = ({className, ...rest}) => {
   return (
    <footer
    className={classnames('footer', className)}
    {...rest}
 >
 {/* <Box className='footer-container'> */}
   <Box className='footer-left'>
     <img className="footer-logo" src={logo} alt="logo artisan" />
     <p className="footer-artName">Artisanatth© - 2022 </p>
   </Box>
     <Box className='footer-right'>
        <a className="footer-texte" href="/mentions légales">Mentions légales</a>
        <a className="footer-texte"href="politique de confidentialité">Politique de confidentialité</a>

     <a href="https://fr-fr.facebook.com/pages/category/Community/Ludautisme-344242315626617/" target="_blank" rel="noreferrer"><img className="footer-facebook-logo"src={facebookLogo} alt="logo facebook" /></a>
     <a href="https://fr-fr.facebook.com/pages/category/Community/Ludautisme-344242315626617/" target="_blank" rel="noreferrer"><img className="footer-facebook-logo"src={instaLogo} alt="logo instagram" /></a>
     </Box>
     {/* </Box> */}
</footer>
   );
};

Footer.propTypes = {
    className: PropTypes.string,
};
Footer.defaultProps = {
    className: '',
};
export default React.memo(Footer);

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Box,Divider } from '@material-ui/core';
import { CardActionArea } from '@mui/material';
import cuirs from '../../assets/cuirs.jpg';
import './article.scss';
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import CardMedia from '@mui/material/CardMedia';
import { Button } from '@material-ui/core';

const Article = ({
  className,
  pict,
   ...rest
  }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
   return (
       <Box
            className={classnames('article', className)}
            {...rest}
         >
         <Button onClick={handleOpen}>
            <CardActionArea>
                  <Box className ='article-unity'  >
                    <Box >
                      <Box 
                      component="img"
                      sx={{
                        height: 270,
                        width: 340,
                      }}
                      alt="article"
                      src={pict}>
                      </Box>
                      <Typography sx={{p:2,}} gutterBottom variant="h6" component="div">
                      <Typography sx={{p:2,}} variant="body2" color="text.secondary">
                      12euros
                      </Typography>Nom de l&apos;article
                      </Typography>
                      <Divider/>
                      <Typography sx={{p:2,}} variant="body2" color="text.secondary">
                       blabla a propose de ce bel article
                      </Typography>
                    </Box>
                  </Box>
            </CardActionArea>
         </Button>
            <Modal
               aria-labelledby="transition-modal-title"
               aria-describedby="transition-modal-description"
               open={open}
               onClose={handleClose}
               closeAfterTransition
               BackdropComponent={Backdrop}
               BackdropProps={{
               timeout: 500,
               }}
           >
               <Fade in={open}>
               <Box className={classnames('homepagecardmodal', className)}>
               <CardMedia 
                    sx={{ boxShadow: 3 }}
                    component="img"
                    height="150"
                    src={pict}
                    alt='img de l&apos;article cliqué'
                  />
                   <Typography id="transition-modal-title" variant="h6" component="h2">
                   title
                   </Typography>
                   <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                   blablablbalbalablalablbalblablalablablalallaal
                   </Typography>
               </Box>
               </Fade>
            </Modal>                 
     </Box>
        
   );
};

Article.propTypes = {
    className: PropTypes.string,
    pict: PropTypes.string,
};
Article.defaultProps = {
    className: '',
};
export default React.memo(Article);

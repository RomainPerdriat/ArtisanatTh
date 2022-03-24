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
// import HomePageCardModal from '../HomePageCardModal/HomePageCardModal';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import engagements from '../../../assets/engagements.jpg';
import mesures from '../../../assets/metre-main-mesure.jpg';


const HomePageCard = ({
  className,
  ...data
  }) => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log(`Ici`, data.src, engagements, mesures)
   return (
     
    <Card sx={{ maxWidth: 345, minHeight:360, mt:25,p:1, bgcolor :'#e7d7c5'}}>
    <Button onClick={handleOpen}>
              <CardActionArea>
                  <CardMedia 
                    sx={{ boxShadow: 3 }}
                    component="img"
                    height="140"
                    src={data.src}
                    alt={data.alt} 
                  />
                  <CardContent >
                    <Typography sx={{p:2,}} gutterBottom variant="h5" component="div">
                      {data.title}
                    </Typography>
                    <Divider/>
                    <Typography sx={{p:2,}} variant="body2" color="text.secondary">
                      {data.intro}
                    </Typography>
                  </CardContent>
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
                    height="140"
                    src={data.src}
                    alt={data.alt} 
                  />
                   <Typography id="transition-modal-title" variant="h6" component="h2">
                   {data.title}
                   </Typography>
                   <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                   {data.description}
                   </Typography>
               </Box>
               </Fade>
           </Modal>
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

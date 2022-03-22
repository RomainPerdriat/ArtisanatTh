/* eslint-disable no-unused-vars */
import React from 'react';
import { Box, } from '@mui/material';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import './searchinput.scss';


const SearchInput = () => {



  const handleSubmit = (event) => {
      event.preventDefault()
    console.log(`coucou`)
  };

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <TextField className= "input"
        placeholder="Search..."
      ></TextField>
    </Box>
  );
};

SearchInput.propTypes = {

};
SearchInput.defaultProps = {
  
};

export default React.memo(SearchInput);

import React from 'react';
import { Box } from '@chakra-ui/core';
import { trackPageview } from '../components/ga-script';

class DefaultLayout extends React.Component {
  state = {
    isBannerClosed: false
  };

  componentDidMount() {
    trackPageview(window.location.pathname);
  }

  render() {
    return (
      <Box p='40px'>
        <div className={ 'body-wrap' }>
          { this.props.children }
        </div>
      </Box>
    );
  }
}

export default DefaultLayout;

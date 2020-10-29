import React from 'react';
import { trackPageview } from '../src/analytics/track-event';
import { Box } from '@chakra-ui/core';

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
        <div className={'body-wrap'}>
          { this.props.children }
        </div>
      </Box>
    );
  }
}

export default DefaultLayout;

import React from 'react';
import { trackPageview } from '../src/analytics/track-event';

class DefaultLayout extends React.Component {
  state = {
    isBannerClosed: false
  };

  componentDidMount() {
    trackPageview(window.location.pathname);
  }

  render() {
    return (
      <div>
        <div className={'body-wrap'}>
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default DefaultLayout;

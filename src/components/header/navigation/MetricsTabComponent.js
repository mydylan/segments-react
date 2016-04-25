'use strict';

import React from 'react';
import Router from 'react-router-component';

require('styles/header/navigation/MetricsTab.sass');

const Link = Router.Link;

class MetricsTabComponent extends React.Component {
  render() {
    return (
      <div className="tab-btn metricstab-component">
        <Link className="tab-link" href="/metrics">Metrics</Link>
      </div>
    );
  }
}

MetricsTabComponent.displayName = 'HeaderNavigationMetricsTabComponent';

// Uncomment properties you need
// MetricsTabComponent.propTypes = {};
// MetricsTabComponent.defaultProps = {};

export default MetricsTabComponent;

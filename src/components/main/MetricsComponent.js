'use strict';

import React from 'react';

require('styles/main/Metrics.sass');

class MetricsComponent extends React.Component {
  render() {
    return (
      <div className="metrics-component">
        <h1>Metrics</h1>
      </div>
    );
  }
}

MetricsComponent.displayName = 'MainMetricsComponent';

// Uncomment properties you need
// MetricsComponent.propTypes = {};
// MetricsComponent.defaultProps = {};

export default MetricsComponent;

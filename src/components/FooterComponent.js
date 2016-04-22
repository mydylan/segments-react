'use strict';

import React from 'react';

require('styles//Footer.sass');

class FooterComponent extends React.Component {
  render() {
    return (
      <div className="footer-component">
        Segments
      </div>
    );
  }
}

FooterComponent.displayName = 'FooterComponent';

// Uncomment properties you need
// FooterComponent.propTypes = {};
// FooterComponent.defaultProps = {};

export default FooterComponent;

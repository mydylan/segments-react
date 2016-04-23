'use strict';

import React from 'react';
import Tabs from './navigation/TabsComponent';

require('styles//Header.sass');

class HeaderComponent extends React.Component {
  render() {
    return (
      <div className="header-component">
        <div className="logo">
          <img src="images/logo.png"></img>
        </div>
        <Tabs/>
      </div>
    );
  }
}

HeaderComponent.displayName = 'HeaderComponent';

// Uncomment properties you need
// HeaderComponent.propTypes = {};
// HeaderComponent.defaultProps = {};

export default HeaderComponent;

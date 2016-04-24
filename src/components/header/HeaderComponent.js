'use strict';

import React from 'react';
import Logo from './logo/LogoComponent';
import Tabs from './navigation/TabsComponent';


require('styles/header/Header.sass');

class HeaderComponent extends React.Component {
  render() {
    return (
      <div className="header-component">
        <Logo/>
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

'use strict';

import React from 'react';
import Router from 'react-router-component';

require('styles/header/logo/Logo.sass');

const Link = Router.Link;

class LogoComponent extends React.Component {
  render() {
    return (
      <div className="logo-component">
        <Link href="/">
          <img src="images/logo.png"></img>
        </Link>
      </div>
    );
  }
}

LogoComponent.displayName = 'HeaderLogoComponent';

// Uncomment properties you need
// LogoComponent.propTypes = {};
// LogoComponent.defaultProps = {};

export default LogoComponent;

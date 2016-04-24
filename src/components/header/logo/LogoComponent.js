'use strict';

import React from 'react';
import Router from 'react-router-component';

require('styles/header/logo/Logo.sass');

const Link = Router.Link;

class LogoComponent extends React.Component {
  render() {
    return (
      <div className="logo-component">
        <div className="logo">
          <Link href="/">
            <img src="images/logo.png"></img>
          </Link>
        </div>
      </div>
    );
  }
}

LogoComponent.displayName = 'HeaderLogoComponent';

// Uncomment properties you need
// LogoComponent.propTypes = {};
// LogoComponent.defaultProps = {};

export default LogoComponent;

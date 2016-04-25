'use strict';

import React from 'react';
import Router from 'react-router-component';

require('styles/header/navigation/ProfileTab.sass');

const Link = Router.Link;

class ProfileTabComponent extends React.Component {
  render() {
    return (
      <div className='tab-btn profiletab-component'>
        <Link className="tab-link" href="/profile">Profile</Link>
      </div>
    );
  }
}

ProfileTabComponent.displayName = 'HeaderNavigationProfileTabComponent';

// Uncomment properties you need
// ProfileTabComponent.propTypes = {};
// ProfileTabComponent.defaultProps = {};

export default ProfileTabComponent;

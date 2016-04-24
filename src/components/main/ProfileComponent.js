'use strict';

import React from 'react';

require('styles/main/Profile.sass');

class ProfileComponent extends React.Component {
  render() {
    return (
      <div className="profile-component">
        <h1>Profile</h1>
      </div>
    );
  }
}

ProfileComponent.displayName = 'MainProfileComponent';

// Uncomment properties you need
// ProfileComponent.propTypes = {};
// ProfileComponent.defaultProps = {};

export default ProfileComponent;

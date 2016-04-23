'use strict';

import React from 'react';

require('styles//Main.sass');

class MainComponent extends React.Component {
  render() {
    return (
      <div className="main-component">
        <h1>MAIN</h1>
      </div>
    );
  }
}

MainComponent.displayName = 'MainComponent';

// Uncomment properties you need
// MainComponent.propTypes = {};
// MainComponent.defaultProps = {};

export default MainComponent;

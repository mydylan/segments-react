'use strict';

import React from 'react';

require('styles/main/Main.sass');

class MainComponent extends React.Component {
  render() {
    return (
      <div className="main-component">
        <h1>Segments</h1>
      </div>
    );
  }
}

MainComponent.displayName = 'MainMainComponent';

// Uncomment properties you need
// MainComponent.propTypes = {};
// MainComponent.defaultProps = {};

export default MainComponent;

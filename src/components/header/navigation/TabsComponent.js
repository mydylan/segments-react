'use strict';

import React from 'react';

require('styles/header/navigation/Tabs.sass');

class TabsComponent extends React.Component {
  render() {
    return (
      <div className="tabs-component">
        <div className="tab-btn active">Metrics</div>
        <div className="tab-btn">Profile</div>
      </div>
    );
  }
}

TabsComponent.displayName = 'HeaderNavigationTabsComponent';

// Uncomment properties you need
// TabsComponent.propTypes = {};
// TabsComponent.defaultProps = {};

export default TabsComponent;

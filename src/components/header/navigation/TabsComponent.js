'use strict';

import React from 'react';
import Router from 'react-router-component';

const Link = Router.Link;

require('styles/header/navigation/Tabs.sass');

class TabsComponent extends React.Component {
  changeState() {
    debugger
  }
  render() {
    return (
      <div className="tabs-component">
        <div className="tab-btn" onClick={this.changeState}>
          <Link className="tab-link" data-link="metrics" href="/metrics">Metrics</Link>
        </div>
        <div className="tab-btn" onClick={this.changeState}>
          <Link className="tab-link" data-link="profile" href="/profile">Profile</Link>
        </div>
      </div>
    );
  }
}

TabsComponent.displayName = 'HeaderNavigationTabsComponent';

// Uncomment properties you need
// TabsComponent.propTypes = {};
// TabsComponent.defaultProps = {};

export default TabsComponent;

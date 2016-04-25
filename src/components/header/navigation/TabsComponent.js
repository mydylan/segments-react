'use strict';

import React from 'react';
import MetricsTab from './MetricsTabComponent';
import ProfileTab from './ProfileTabComponent';

require('styles/header/navigation/Tabs.sass');

class TabsComponent extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      className: 'tabs-component',
      active: ''
    };
  }
  handler() {
    if (this.state.active === '') {
      this.setState({
        active: 'active'
      });
    } else {
      this.setState({
        active: ''
      });
    }
  }
  setClass() {
    return this.state.className + ' ' + this.state.active;
  }
  render() {
    return (
      <div className={this.setClass()} onClick={this.handler.bind(this)}>
        <MetricsTab />
        <ProfileTab />
      </div>
    );
  }
}

TabsComponent.displayName = 'HeaderNavigationTabsComponent';

// Uncomment properties you need
// TabsComponent.propTypes = {};
// TabsComponent.defaultProps = {};

export default TabsComponent;

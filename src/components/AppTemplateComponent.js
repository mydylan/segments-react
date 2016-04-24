'use strict';

import React from 'react';
import Header from './header/HeaderComponent';

require('styles//AppTemplate.sass');

class AppTemplateComponent extends React.Component {
  render() {
    return (
      <div className="apptemplate-component">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

AppTemplateComponent.displayName = 'AppTemplateComponent';

// Uncomment properties you need
// AppTemplateComponent.propTypes = {};
// AppTemplateComponent.defaultProps = {};

export default AppTemplateComponent;

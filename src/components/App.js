require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Header from './header/HeaderComponent';
import Main from './main/MainComponent';


class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Header/>
        <Main/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;

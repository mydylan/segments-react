require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';


class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Header/>
        <Footer/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;

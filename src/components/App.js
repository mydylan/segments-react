require('normalize.css/normalize.css');
require('styles/App.sass');

import React from 'react';
import Router from 'react-router-component';
import Template from './AppTemplateComponent';
import Main from './main/MainComponent';
import Metrics from './main/MetricsComponent';
import Profile from './main/ProfileComponent'

const Locations = Router.Locations;
const Location = Router.Location;

class AppComponent extends React.Component {
  render() {
    return (
      <Template>
        <Locations>
          <Location path="/" handler={Main} />
          <Location path="/metrics" handler={Metrics} />
          <Location path="/profile" handler={Profile} />
        </Locations>
      </Template>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;

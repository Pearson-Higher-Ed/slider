import './main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import ComponentOwner from './src/js/component-owner';

export default class MyComponent {

  constructor(config) {

    this.init(config);
  }

  init(config) {
    ReactDOM.render(
      <ComponentOwner data={config} />,
      document.getElementById(config.elementId)
    );
  }

}

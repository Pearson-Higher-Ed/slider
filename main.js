import './main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import SliderComponent from './src/js/component-owner';

export default class MySlider {

  constructor(config) {

    this.init(config);
  }

  init(config) {
    ReactDOM.render(
      <SliderComponent data={config} />,
      document.getElementById(config.elementId)
    );
  }

}

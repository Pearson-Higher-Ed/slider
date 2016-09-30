import './main.scss';
import './slider.css';

import React from 'react';
import ReactDOM from 'react-dom';
import SliderComponent from './src/js/slider';

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

document.body.addEventListener('o.InitMyComponent', e => new MySlider(e.detail));

import './main.scss'; // Needed for run build, not for page load.
import './slider.css'; // Non existent before build is run. Needed once build has been run.

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

document.body.addEventListener('o.InitMySliderComponent', e => new MySlider(e.detail));

import React from 'react';
import Range from 'react-range';

const ie11AndGreater = navigator.userAgent.indexOf('Trident') !== -1 && navigator.userAgent.indexOf('MSIE') === -1;

class SliderComponent extends React.Component {

  constructor() {
    super();

    this.state = {
      value: '50'
    };
  }

  updateSliderValue(e) {
    this.setState({value:e.target.value});
  }

  render() {

    return (
      <span>

        <Range
          type="range"
          id="numInput"
          min="0"
          max="100"
          value={this.state.value}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow={this.state.value}
          onInput={(e) => this.updateSliderValue(e)}
          onChange={ie11AndGreater ? (e) => this.updateSliderValue(e) : () => {}}
        /><br/><br/>
        <label id="slider-label" HTMLFor="numInput">
        Slider label
        </label>

      </span>
    );
  }

}

export default SliderComponent;

import React from 'react';

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
        <label id="slider-label">
        Hidden slider label<br/>

        <input type="range" id="numInput"
        min="0"
        max="100"
        value={this.state.value}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={this.state.value}
        onChange={(e) => this.updateSliderValue(e)}
        aria-labelledby="slider-label" tabindex="0" />

        </label>
      </span>
    );
  }

}

export default SliderComponent;

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

        <input
          type="range"
          id="numInput"
          min="0"
          max="100"
          value={this.state.value}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow={this.state.value}
          onChange={(e) => this.updateSliderValue(e)}
        /><br/><br/>

        <label id="slider-label" HTMLFor="numInput">
        Hidden slider label
        </label>

      </span>
    );
  }

}

export default SliderComponent;

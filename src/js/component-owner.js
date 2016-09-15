import React from 'react';

class ComponentOwner extends React.Component {

  constructor() {
    super();

    this.state = {
      value: '50'
    };
  }

  updateSliderValue() {
    this.setState({value:document.getElementById('numInput').value});
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
        onChange={() => this.updateSliderValue()}
        aria-labelledby="slider-label" tabindex="0" />

        <output>{this.state.value}</output>
        </label>
      </span>
    );
  }

}

export default (ComponentOwner);

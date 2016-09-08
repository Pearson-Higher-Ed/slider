import React from 'react';
import {injectIntl} from 'react-intl';

class ComponentOwner extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <span>
        <label id="slider-label"> Slider placeholder label
          <input type="range" role="slider" aria-labelledby="slider-label"/>
        </label>
      </span>

    )
  }

}

export default injectIntl(ComponentOwner);

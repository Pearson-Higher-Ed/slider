import React from 'react';
import {injectIntl} from 'react-intl';

class ComponentOwner extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <span>
        <input type="range" />
      </span>
    )
  }

}

export default injectIntl(ComponentOwner);

import React from 'react';
import Button from './atoms/Button/Buuton.js';

class Hello extends React.Component {
  render() {
    return(
      <div>
        <h1> hey more will be here</h1>
        <Button
          size={this.props.size}
          onClick={this.props.onClick}
        >
          BUTTON exist here
        </Button>
      </div>
    )
  }
}

export default Hello;

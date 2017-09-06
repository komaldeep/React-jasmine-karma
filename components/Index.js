import React from 'react';
import Button, {buttonSizes , buttonSkins}  from './atoms/Button/Buuton.js';
import InputText from './atoms/InputText/InputText';

class Index extends React.Component {
  render() {
    return(
      <div>
        <h1> Hey more will be here</h1>
        <InputText
          name="input field name is"
          type="text"
          placeholder="Enter your name"
        />

        <Button
          size={buttonSizes.LG}
          skin={buttonSkins.PRIMARY}
          onClick={this.props.onClick}
        >
          Button Exist HERE
        </Button>
      </div>
    )
  }
}

export default Index;

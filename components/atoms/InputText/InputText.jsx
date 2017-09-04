import React, { Component } from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';

export default class InputText extends Component {

  static displayName = 'atoms/InputText';

  static propTypes = {
    value: PropTypes.string,
    updateValue: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    handleChange: PropTypes.func,
    onKeyPress: PropTypes.func,
    pattern: PropTypes.string,
    maxLength: PropTypes.number,
    disableDeleteButton: PropTypes.bool,
  };

  static defaultProps = {
    type: 'text',
    placeholder: '',
    pattern: null,
    disabled: false,
    showSuccess: false,
    showError: false,
    pending: false,
    focus: false,
    maxLength: 9999,
  };

  constructor(props) {
    super(props);
    this.keepFocus = false;
    this.state = {
      showDeleteButton: false,
      value: props.value,
    };
  }

  render() {
    const {
      name,
      type,
      placeholder,
      disabled,
      id,
      showError,
      showSuccess,
      onKeyPress,
      maxLength,
      disableDeleteButton,
    } = this.props;

    const hasValueAndSuccess = (showSuccess && !_.isEmpty(this.state.value));

    const showInputStatus = (
      (hasValueAndSuccess && !this.keepFocus)
      || pending
    );

    return (
      <div className={styles.wrap}>
        <input
          type={type}
          name={name}
          id={id}
          value={this.state.value}
          placeholder={placeholder}
          ref={(input) => { this.inputField = input; }}
          className={
            cx({
              [bootstrap.formControl]: true,
              [styles.input]: true,
              [styles.hasDanger]: showError && !this.keepFocus,
              [styles.pending]: pending,
            })
          }
          disabled={disabled}
          autoComplete={autocomplete}
          onKeyPress={onKeyPress}
          pattern={pattern}
          maxLength={maxLength}
        />

      </div>
    );
  }
}

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './Buuton.css';
// import stylesSkins from './ButtonSkins.id.scss';
// import stylesSizes from './ButtonSizes.id.scss';

const buttonSizes = {
  LG: 'lg',
  MD: 'md',
  SM: 'sm',
  XS: 'xs',
};

export const buttonSkins = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};

export default class Buuton extends Component {

  static displayName = 'atoms/Button/Buuton.js';

  static propTypes = {
    // size: PropTypes.string,
    // skin: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.node,
    block: PropTypes.bool,
    type: PropTypes.oneOf(['button', 'submit']),
  };

  static defaultProps = {
    skin: buttonSkins.PRIMARY,
    size: buttonSizes.MD,
    onClick: () => {},
    disabled: false,
    block: false,
  };


  handleClick() {
    this.props.onClick();
  };


  render() {
    const className = cx(
      styles.btn,
    );

    return (
      <button
        onClick={ this.handleClick }
        className={ className }
        disabled={ this.props.disabled }
        type={this.props.type}
      >
        <div className={styles.flexContainer}>
          { this.props.children }
        </div>
      </button>
    );
  }
}

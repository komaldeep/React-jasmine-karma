import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import _ from 'lodash';

// import styles from './Button.id.scss';
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

const getEnumValues = (obj) => Object.keys(obj).map(key => obj[key]);

export default class Button extends Component {

  static displayName = 'atoms/Button';

  static propTypes = {
    size: PropTypes.oneOf(getEnumValues(buttonSizes)),
    skin: PropTypes.oneOf(getEnumValues(buttonSkins)),
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.node,
    block: PropTypes.bool,
    type: PropTypes.oneOf(['button', 'submit']),
  };

  static defaultProps = {
    skin: buttonSkins.PRIMARY,
    size: buttonSizes.MD,
    onClick: () => {
    },
    disabled: false,
    block: false,
  };


  handleClick = () => {
    this.props.onClick();
  };


  render() {
    const className = cx(
      styles.btn,
      stylesSkins[`btn-${this.props.skin}`],
      stylesSizes[`btn-${this.props.size}`],
      {
        [styles.block]: this.props.block,
      }
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

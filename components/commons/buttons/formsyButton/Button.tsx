import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;

  disabled?: boolean;

  /**
   * What background color to use
   */
  backgroundColor?: string;

  /**
   * How large should the button be?
   */
  size?: `small` | `medium` | `large`;

  /**
   * Button contents
   */
  label: string;

  /**
   * Optional click handler
   */
  onClick?: () => void;

  /**
   *
   */
  type: `button` | `submit` | `reset`;
}

/**
 * Primary UI component for user interaction
 */
export const SubmitButton = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  disabled,
  type = 'button',
  ...props
}: ButtonProps) => {
  function buttonSize(size: string) {
    switch (size) {
      case 'large':
        return styles.button__large;
      case 'medium':
        return styles.button__medium;
      case 'small':
        return styles.button__small;
      default:
        return styles.button__medium;
    }
  }

  const mode = primary ? styles.button_primary : styles.button_secondary;

  return (
    <button
      type={type}
      disabled={disabled}
      className={[`${styles.button}`, `${buttonSize(size)}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

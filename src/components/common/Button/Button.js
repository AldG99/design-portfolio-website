import React from 'react';
import './Button.scss';

const Button = ({
  children,
  type = 'button',
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  fullWidth = false,
  className = '',
  icon = null,
  iconPosition = 'left',
  ...props
}) => {
  return (
    <button
      type={type}
      className={`
        btn 
        btn--${variant} 
        btn--${size} 
        ${fullWidth ? 'btn--full-width' : ''} 
        ${className}
      `}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span className="btn__icon btn__icon--left">{icon}</span>
      )}

      <span className="btn__text">{children}</span>

      {icon && iconPosition === 'right' && (
        <span className="btn__icon btn__icon--right">{icon}</span>
      )}
    </button>
  );
};

export default Button;

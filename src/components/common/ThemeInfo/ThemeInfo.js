import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import './ThemeInfo.scss';

/**
 * Componente para mostrar información del tema actual (usado principalmente en desarrollo)
 */
const ThemeInfo = () => {
  const { theme } = useTheme();

  return (
    <div className={`theme-info ${theme === 'dark' ? 'theme-info--dark' : ''}`}>
      <div className="theme-info__content">
        <h4 className="theme-info__title">Tema: {theme}</h4>
        <div className="theme-info__colors">
          <div className="theme-info__color">
            <div className="theme-info__color-box theme-info__color-box--primary"></div>
            <span className="theme-info__color-name">Principal (60%)</span>
          </div>
          <div className="theme-info__color">
            <div className="theme-info__color-box theme-info__color-box--secondary"></div>
            <span className="theme-info__color-name">Secundario (30%)</span>
          </div>
          <div className="theme-info__color">
            <div className="theme-info__color-box theme-info__color-box--accent"></div>
            <span className="theme-info__color-name">Acento (10%)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeInfo;

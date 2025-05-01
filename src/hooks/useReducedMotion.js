import { useState, useEffect } from 'react';

/**
 * Hook personalizado para detectar si el usuario prefiere animaciones reducidas
 * Útil para respetar las preferencias de accesibilidad
 *
 * @returns {boolean} - true si el usuario prefiere animaciones reducidas
 */
const useReducedMotion = () => {
  // Consultar la preferencia mediaQuery para reducción de movimiento
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

  // Estado inicial basado en la preferencia del sistema
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    mediaQuery.matches
  );

  useEffect(() => {
    // Función para manejar cambios en la preferencia
    const handleChange = event => {
      setPrefersReducedMotion(event.matches);
    };

    // Añadir listener para detectar cambios en la preferencia
    mediaQuery.addEventListener('change', handleChange);

    // Limpieza
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [mediaQuery]);

  return prefersReducedMotion;
};

export default useReducedMotion;

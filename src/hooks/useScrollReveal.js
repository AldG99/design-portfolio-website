import { useEffect, useRef } from 'react';
import useReducedMotion from './useReducedMotion';

/**
 * Hook personalizado para animar elementos cuando entran en el viewport
 * @param {Object} options - Opciones para la animación
 * @param {string} options.direction - Dirección de la animación: 'up', 'down', 'left', 'right'
 * @param {number} options.duration - Duración de la animación en ms
 * @param {number} options.delay - Retraso de la animación en ms
 * @param {number} options.distance - Distancia de movimiento en px
 * @param {number} options.threshold - Porcentaje del elemento visible para iniciar animación (0-1)
 * @param {boolean} options.once - Si debe animar solo una vez
 * @returns {Object} - Referencia al elemento que se animará
 */
const useScrollReveal = (options = {}) => {
  const {
    direction = 'up',
    duration = 800,
    delay = 0,
    distance = 50,
    threshold = 0.1,
    once = true,
  } = options;

  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Si el usuario prefiere animaciones reducidas, no animar
    if (prefersReducedMotion) {
      element.style.opacity = '1';
      element.style.transform = 'translate(0)';
      return;
    }

    // Configuración inicial
    let translateFrom = '';
    switch (direction) {
      case 'up':
        translateFrom = `translateY(${distance}px)`;
        break;
      case 'down':
        translateFrom = `translateY(-${distance}px)`;
        break;
      case 'left':
        translateFrom = `translateX(${distance}px)`;
        break;
      case 'right':
        translateFrom = `translateX(-${distance}px)`;
        break;
      default:
        translateFrom = `translateY(${distance}px)`;
    }

    // Estilo inicial
    element.style.opacity = '0';
    element.style.transform = translateFrom;
    element.style.transition = `opacity ${duration}ms ease ${delay}ms, transform ${duration}ms ease ${delay}ms`;

    // IntersectionObserver para detectar cuando el elemento está visible
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            element.style.opacity = '1';
            element.style.transform = 'translate(0)';

            if (once) {
              observer.unobserve(element);
            }
          } else if (!once) {
            element.style.opacity = '0';
            element.style.transform = translateFrom;
          }
        });
      },
      {
        threshold,
        rootMargin: '0px',
      }
    );

    observer.observe(element);

    // Limpieza
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [
    direction,
    duration,
    delay,
    distance,
    threshold,
    once,
    prefersReducedMotion,
  ]);

  return ref;
};

export default useScrollReveal;

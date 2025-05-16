// src/components/ScrollToTop/ScrollToTop.js
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Componente mejorado que restablece la posición del scroll al cambiar de ruta
 * Se debe colocar dentro del Router pero fuera de las Routes
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  const prevPathRef = useRef(pathname);

  useEffect(() => {
    // Solo ejecutar cuando realmente cambia la ruta (no en el primer render)
    if (prevPathRef.current !== pathname) {
      // Aseguramos que el DOM se ha actualizado antes de hacer scroll
      // usando setTimeout con 0ms para ponerlo al final de la cola de eventos
      setTimeout(() => {
        // Usando behavior: "instant" en lugar de "auto" para asegurar que el scroll es inmediato
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant', // Puede ser "auto" o "smooth" si prefieres un efecto
        });

        // Como respaldo, intentamos una segunda vez después de una pequeña espera
        // para casos donde haya contenido que se carga de forma asíncrona
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 50);
      }, 0);

      // Actualizar la referencia de la ruta anterior
      prevPathRef.current = pathname;
    }
  }, [pathname]);

  return null; // Este componente no renderiza nada
};

export default ScrollToTop;

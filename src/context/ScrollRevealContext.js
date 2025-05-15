// NUEVO ARCHIVO: src/context/ScrollRevealContext.js
// Este archivo gestiona la lógica de detección de scroll para las animaciones

import React, { createContext, useContext } from 'react';

const ScrollRevealContext = createContext({
  revealRef: () => {},
});

export const useScrollReveal = () => useContext(ScrollRevealContext);

export const ScrollRevealProvider = ({ children }) => {
  const revealRef = node => {
    if (node) {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('reveal--visible');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1, // 10% del elemento visible para activar
          rootMargin: '0px 0px -50px 0px', // Ajusta el margen para activar un poco antes
        }
      );

      node.classList.add('reveal');
      observer.observe(node);
    }
  };

  return (
    <ScrollRevealContext.Provider value={{ revealRef }}>
      {children}
    </ScrollRevealContext.Provider>
  );
};

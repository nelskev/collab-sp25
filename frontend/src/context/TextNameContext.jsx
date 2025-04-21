import React, { createContext, useState } from 'react';

export const TextNameContext = createContext();

export const TextNameProvider = ({ children }) => {
  const [textName, setTextName] = useState(''); // Initial value is an empty string

  return (
    <TextNameContext.Provider value={{ textName, setTextName }}>
      {children}
    </TextNameContext.Provider>
  );
};
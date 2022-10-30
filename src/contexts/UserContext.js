import * as React from 'react';

import { createContext, useState } from 'react';

export const UsuarioContext = createContext([
  {},
  () => {},
])

export const UsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState({});
  const [membership, setMembership] = useState({});

  function setDadosDoUsuario({id, name, email, membership}) {
    setUsuario({
      id,
      name,
      email,
      membership,
    });
    localStorage.setItem('data', JSON.stringify({
      id,
      name,
      email,
      membership,
    }));
    setMembership(membership)
  }

  return (
    <UsuarioContext.Provider value={[usuario, setDadosDoUsuario, membership, setMembership]}>
      {children}
    </UsuarioContext.Provider>
  )
};
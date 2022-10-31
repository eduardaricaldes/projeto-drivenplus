import * as React from 'react';

import { createContext, useState, useEffect } from 'react';

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

  function atualizarMembership(membership) {
    const user = localStorage.getItem('data');
    const dadosUsuario = JSON.parse(user);
    dadosUsuario.membership = membership
    setMembership(membership)
  }

  useEffect(() => {
    const dadosUsuarios = localStorage.getItem('data');
    if(dadosUsuarios) {
      setUsuario(JSON.parse(dadosUsuarios))
    }
  }, [])

  return (
    <UsuarioContext.Provider value={[usuario, setDadosDoUsuario, atualizarMembership, membership, setMembership]}>
      {children}
    </UsuarioContext.Provider>
  )
};
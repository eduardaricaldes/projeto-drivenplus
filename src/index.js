import * as ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import "./reset.css"

import { AutenticacaoProvider } from './contexts/AutenticacaoProvider';
import { UsuarioProvider } from './contexts/UserContext';

import App from './App';

ReactDom.render(
<BrowserRouter>
  <AutenticacaoProvider>
    <UsuarioProvider>
      <App />
    </UsuarioProvider>
  </AutenticacaoProvider>
</BrowserRouter>
, document.getElementById('root'));

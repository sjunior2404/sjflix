import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';
import PageDefault from './components/PageDefault';
import Erro from './assets/img/erro_404.gif'

// Desafio master blaster na descrição
// Colocar um jogo ou brincadeira nessa página:

const Pagina404 = () => (
    <PageDefault>
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
    <h1>Ops, quebrou tudo :O</h1>
    <p>
      <a href="/">Você podenpm voltar pra home :)</a>
    </p>
    {/*
      Pessoal, quem quiser fazer o desafio do Flappy Bird, da pra usar esse iframe aqui: 
      - https://codepen.io/omariosouto/pen/pogmdGE
      E quem quiser programar o jogo:
      - https://www.youtube.com/watch?v=jOAU81jdi-c&list=PLTcmLKdIkOWmeNferJ292VYKBXydGeDej
    */}
   <div><img src={Erro} alt="Página Quebrada" /></div>
  </div>
  </PageDefault>
)


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
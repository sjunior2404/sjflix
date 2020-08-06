import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
    const [categorias, setCategorias] = useState(['Teste']) ;
    
    const [nomeDaCategoria, setNomeDaCategoria] = useState('Valor Inicial');
    
    
  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {nomeDaCategoria}</h1>
        {/*State*/}
      <form onSubmit = {function handleSubmit(infosDoEvento){
        infosDoEvento.preventDefault();
        console.log('Você tentou enviar o form');
        setCategorias([
          ...categorias,
          nomeDaCategoria
        ]);
      }}>

        <label>
          Nome da Categoria:
          <input
            type="text"
            value = {nomeDaCategoria}
            onChange = {function funcaoHandlerQueOErroPediu(infosDoEvento){
              /*console.log('[nomeDaCategoria]', nomeDaCategoria);
              console.log('[infosDoEvento.target.value]', infosDoEvento.target.value);*/
              setNomeDaCategoria(infosDoEvento.target.value);

          }}
          />
        </label>

        <button>
          Cadastrar
        </button>
      </form>
        <ul>
          {categorias.map((categoria, indice) => {
            return (
              <li key={ `${categoria} ${indice}` }>
                {categoria}
              </li>
            )
          })}
        </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;
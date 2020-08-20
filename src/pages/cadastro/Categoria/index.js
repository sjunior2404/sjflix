import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../../src/hooks/useForm';



function CadastroCategoria() {
    const valoresIniciais = {
        titulo: '',
        descricao: '',
        cor: '',

    };
    const { handleChange, values, clearForm } = useForm(valoresIniciais);
    const [categorias, setCategorias] = useState([]);


    useEffect(() => {
        console.log('alo alo w brasil');
        const URL_TOP = 'https://sjflix.herokuapp.com/categorias';
        fetch(URL_TOP)
            .then(async (respostaDoServidor) => {
                const resposta = await respostaDoServidor.json();
                setCategorias([
                    ...resposta,
                ]);
            })
        //setTimeout(() => {
        //    setCategorias([
        //        ...categorias,
        //       {
        //            "id": 1,
        //            "nome": "Front End",
        //            "descricao": "uma categoria bacanudassa",
        //            "cor": "#6BD1FF"
        //        },
        //        {
        //            "id": 2,
        //            "nome": "Back End",
        //            "descricao": "uma categoria bacanudassa",
        //            "cor": "#6BD1FF"
        //        }

        //    ]);
        // }, 4 * 1000);

    }, []);

    return (
        <PageDefault>
            <h1>
                Cadastro de Categoria:
        {values.titulo}
            </h1>
            {/* State */}
            <form onSubmit={function handleSubmit(infosDoEvento) {
                infosDoEvento.preventDefault();
                setCategorias([
                    ...categorias,
                    values,
                ]);
                clearForm();
            }}
            >
                <FormField
                    label="titulo da Categoria"
                    type="text"
                    name="titulo"
                    value={values.titulo}
                    onChange={handleChange}
                />
                <FormField
                    label="Descrição"
                    type="textarea"
                    name="descricao"
                    value={values.descricao}
                    onChange={handleChange}
                />

                <FormField
                    label="Cor"
                    type="color"
                    name="cor"
                    value={values.cor}
                    onChange={handleChange}
                />

                <Button>
                    Cadastrar
                </Button>

                {categorias.length === 0 && <div>
                    {/*Carregando...*/}
                        Loading...
                </div>}
            </form>
            <ul>
                {categorias.map((categoria) => (
                    <li key={`${categoria.titulo}`}>
                        {categoria.titulo}
                    </li>
                ))}
            </ul>

            <Link to="/">
                Ir para home
      </Link>
        </PageDefault>
    );
}

export default CadastroCategoria;

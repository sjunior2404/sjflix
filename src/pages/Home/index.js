import React, { useEffect, useState } from 'react';
import Menu from '../../components/Menu';
//import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import categoriasRepository from '../../repositories/categorias';
import PageDefault from '../../components/PageDefault'

function Home() {

    const [dadosIniciais, setDadosIniciais] = useState([]);



    useEffect(() => {
        categoriasRepository.getAllWithVideos()
            .then((categoriasComVideos) => {
                console.log(categoriasComVideos);
                setDadosIniciais(categoriasComVideos);
            })
            .catch((err) => {
                console.log(err.message)
            });

    }, []);
    //http://localhost:8080/categorias?_embed=videos
    return (
        <PageDefault>
            <Menu />
            {JSON.stringify(dadosIniciais)}

            {/*<BannerMain
                videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
                url={dadosIniciais.categorias[0].videos[0].url}
                videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
            />
            <Carousel
                ignoreFirstVideo
                category={dadosIniciais.categorias[0]}
            />
            <Carousel
                ignoreFirstVideo
                category={dadosIniciais.categorias[1]}
            />
            <Carousel
                ignoreFirstVideo
                category={dadosIniciais.categorias[2]}
            />
            <Carousel
                ignoreFirstVideo
                category={dadosIniciais.categorias[3]}
            />
            <Carousel
                ignoreFirstVideo
                category={dadosIniciais.categorias[4]}
            />
            <Carousel
                ignoreFirstVideo
                category={dadosIniciais.categorias[5]}
            />*/}

        </PageDefault>
    );
}

export default Home;

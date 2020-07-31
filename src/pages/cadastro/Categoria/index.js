import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

const initialCategoria = {
    nome: '',
    descricao: '',
    cor: '#ffffff'
}

function CadastroCategoria() {
    const [categoria, setCategoria] = useState(initialCategoria);
    const [categorias, setCategorias] = useState([]);

    return (
        <PageDefault>
            <h1>Cadastro de Categoria</h1>

            <form onSubmit={(event) => {
                event.preventDefault();
                setCategorias([...categorias, { nome: categoria.nome, descricao: categoria.descricao, cor: categoria.cor }]);
                setCategoria(initialCategoria);
            }}>

                <FormField
                    label="Nome da Categoria: "
                    type="text"
                    name="nome"
                    value={categoria.nome}
                    onChange={(event) => { setCategoria({ ...categoria, nome: event.target.value })}}
                />

                <FormField
                    label="Descrição: "
                    type="text"
                    name="descricao"
                    value={categoria.descricao}
                    onChange={(event) => { setCategoria({ ...categoria, descricao: event.target.value })}}
                />

                <FormField
                    label="Cor: "
                    type="color"
                    name="cor"
                    value={categoria.cor}
                    onChange={(event) => { setCategoria({ ...categoria, cor: event.target.value })}}
                />

                <button>
                    Cadastrar
                </button>

            </form>

            <ul>
                {categorias.map((categoria, index) => (
                    <li key={`${index}${categoria}`}>{categoria.nome} - {categoria.descricao} - {categoria.cor}</li>
                ))}
            </ul>

            <Link to="/">
               Ir para home
            </Link>            
        </PageDefault>
    );
}

export default CadastroCategoria;

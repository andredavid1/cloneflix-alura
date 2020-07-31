/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

const initialCategoria = {
  nome: '',
  descricao: '',
  cor: '#ffffff',
};

function CadastroCategoria() {
  const [categoria, setCategoria] = useState(initialCategoria);
  const [categorias, setCategorias] = useState([]);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        setCategorias([
          ...categorias,
          {
            nome: categoria.nome,
            descricao: categoria.descricao,
            cor: categoria.cor,
          },
        ]);
        setCategoria(initialCategoria);
      }}
      >

        <FormField
          label="Nome da Categoria: "
          type="text"
          name="nome"
          value={categoria.nome}
          onChange={(event) => { setCategoria({ ...categoria, nome: event.target.value }); }}
        />

        <FormField
          label="Descrição: "
          type="text"
          name="descricao"
          value={categoria.descricao}
          onChange={(event) => { setCategoria({ ...categoria, descricao: event.target.value }); }}
        />

        <FormField
          label="Cor: "
          type="color"
          name="cor"
          value={categoria.cor}
          onChange={(event) => { setCategoria({ ...categoria, cor: event.target.value }); }}
        />

        <button type="submit">
          Cadastrar
        </button>

      </form>

      <ul>
        {categorias.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={`${index}+${item}`}>
            {`${item.nome}, ${item.descricao}, ${item.cor}`}
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

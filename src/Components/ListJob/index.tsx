import React, { useState } from 'react';
import {
  ListaJob,
  ListEspecialidades,
  Especialidades,
  ListaVagas,
} from './style';
import Destaque from '../Destaque';
import Vaga from '../Vaga'; // Importe o componente Vaga
import vagas from './vagas/vagas.json'; // Importe o JSON de vagas

const validarTipo = (tipo: string): 'CLT' | 'Freelance' | 'Estagio' =>{
  if (tipo === 'CLT' || tipo === 'Freelance' || tipo === 'Estagio'){
    return tipo;
  }
  return 'CLT';
};

const ListJob: React.FC = () => {
  const quantidadedeVagas = vagas.length;

  const [itemSelecionado, setItemSelecionado] = useState<number | null>(null);

  const handleClick = (index: number) => {
    if (itemSelecionado === index) {
      setItemSelecionado(null);
    } else {
      setItemSelecionado(index);
    }
  };

  // Ordena as vagas por curtidas
  const VagasOrdenadas = [...vagas].sort((a, b) => {
    if (!a.curtidas || !b.curtidas) return 0; // Verifica se há curtidas
    return b.curtidas - a.curtidas;
  });

  return (
    <ListaJob>
      <h2>Conheça nossas</h2>
      <h1>/// Vagas em destaque</h1>

      {VagasOrdenadas.slice(0, 4).map((vaga, index) => (
        <Destaque
          key={index}
          nomeEmpresa={vaga.empresa}
          vaga={vaga.titulo} // Use vaga.titulo em vez de vaga.vaga
          local={vaga.localizacao} // Use vaga.localizacao em vez de vaga.local
          curtidas={vaga.curtidas}
          contratacao={vaga.tipo} // Use vaga.tipo em vez de vaga.contratacao
          img={''}        />
      ))}

      <h2>O que você mais entende?</h2>
      <h1>/// Procure por especialidade</h1>
      <ListEspecialidades>
        <Especialidades>
          <a id="front" href="#">
            Front-End
          </a>
          {itemSelecionado === 0 && <span>▼</span>}
        </Especialidades>

        <Especialidades>
          <a href="#">Design</a>
        </Especialidades>

        <Especialidades>
          <a href="#">Back-end</a>
        </Especialidades>

        <Especialidades>
          <a href="#">Comercial</a>
        </Especialidades>

        <Especialidades>
          <a href="#">Fotografia</a>
        </Especialidades>

        <Especialidades>
          <a href="#">Planejamento</a>
        </Especialidades>
      </ListEspecialidades>

      <ListaVagas>
        {vagas.map((vaga, index) => {
          // Verifica se o tipo é válido
          const tipoValido = validarTipo(vaga.tipo);

          return (
            <Vaga
              key={index}
              tipo={tipoValido}
              titulo={vaga.titulo}
              empresa={vaga.empresa}
              descricao={vaga.descricao}
              dataPublicacao={vaga.dataPublicacao}
              localizacao={vaga.localizacao}
              experiencia={vaga.experiencia}
              salario={vaga.salario}
              candidaturas={vaga.candidaturas}
              curtidas={vaga.curtidas}
            />
          );
        })}
      </ListaVagas>

      <h3>
        Você tem <strong>{quantidadedeVagas}</strong> vagas disponíveis.
      </h3>
      <button>Veja mais</button>
    </ListaJob>
  );
};

export default ListJob;
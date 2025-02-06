import React from 'react';
import {
  CardVaga,
  NomeEmpresa,
  TituloVaga,
  DescriptionVaga,
  DataPub,
  TypeVaga,
} from './styles';

interface VagaProps {
  tipo: 'CLT' | 'Freelance' | 'Estagio';
  titulo: string;
  empresa: string;
  descricao: string;
  dataPublicacao: string;
  localizacao: string;
  experiencia: string;
  salario?: string;
  candidaturas: number;
  curtidas: number;
}

const Vagas: React.FC<VagaProps> = ({
  tipo,
  titulo,
  empresa,
  descricao,
  dataPublicacao,
  localizacao,
  experiencia,
  salario,
  candidaturas,
  curtidas,
}) => {
  return (
    <CardVaga>
        <DescriptionVaga>
            <div className="contentDescription">
                <TituloVaga tipo={tipo}>{titulo}</TituloVaga>
                <div className='boxInfoTitle'>
                    <NomeEmpresa>{empresa}</NomeEmpresa>
                    <TypeVaga>{tipo}</TypeVaga>
                    <h3 className='localItem'>{localizacao}</h3>
                </div>
            </div>
            <h2 className="ContentVaga">{descricao}</h2>
            <ul>
                <li className='expItem'>
                    <h3>Experiência: {experiencia}</h3>
                </li>
                <li className='dataItem'>
                    <h3><DataPub>{dataPublicacao}</DataPub></h3>
                </li>
            </ul>
        </DescriptionVaga>
        
    </CardVaga>
  );
};

export default Vagas;
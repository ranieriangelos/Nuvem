import React from 'react';
import { Content, Imagem, TituloVaga, Empresa, Curtidas } from './styles';

interface VagaProps{
        img: string;
        nomeEmpresa: String;
        vaga: string;
        local: string;
        curtidas: number;
        contratacao: string;
}

const Destaque: React.FC<VagaProps> = ({img, nomeEmpresa, vaga, local, curtidas, contratacao}) =>{
        
    return(
      <Content> 
        <div>
            <TituloVaga>{vaga}</TituloVaga>
            <Empresa>{nomeEmpresa}</Empresa>
            <Empresa>{local}</Empresa>
            <Curtidas>{curtidas} curtidas</Curtidas>
            <button>Candidatar</button>
        </div>
      </Content>
    );
  }
  
  export default Destaque;
  
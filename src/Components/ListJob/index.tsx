import React, {useState} from 'react';
import {ListaJob, ListEspecialidades, JobsContent, ImgEmpresa, NomeEmpresa, Vaga, Local, Especialidades, ListaVagas} from './style';
import vagas from './vagas';

const ListJob: React.FC = () =>{

  const quantidadedeVagas = vagas.length;
 
  const [itemSelecionado, setItemSelecionado] = useState<number | null> (null);
  
    const handleClick = (index: number) =>{
      if(itemSelecionado === index){
        setItemSelecionado(null);
      } else{
        setItemSelecionado(index)
      }
    }

  return(
      <ListaJob> 

        <h2>veja nossas</h2>
        <h1>///vagas em destaque</h1>
        
            
        <ListEspecialidades>
          <Especialidades
            className={itemSelecionado === 0? 'selecionado' : ''}
            onClick={() => handleClick(0)}
            ><a id="front" href="#">Front-End</a>
            {itemSelecionado === 0 && <span>▼</span> }
          </Especialidades>

          <Especialidades><a href="#">Design</a></Especialidades>

          <Especialidades><a href="#">Back-end</a></Especialidades>

          <Especialidades><a href="#">Comercial</a></Especialidades>

          <Especialidades><a href="#">Fotografia</a></Especialidades>

          <Especialidades><a href="#">Planejamento</a></Especialidades>
        </ListEspecialidades>
        <ListaVagas>
         
            {vagas.slice(0, 4).map((vaga, index) => (
            <JobsContent key={index}>
              <ImgEmpresa src={vaga.img} alt="Logo Empresa"/>
              <NomeEmpresa><a href="#">{vaga.nomeEmpresa}</a></NomeEmpresa>
              <Vaga>{vaga.vaga}</Vaga>
              <Local>{vaga.local}</Local>
              <button>Candidatar</button>
            </JobsContent>
            ))}
          
          </ListaVagas>

          <h2>o que você mais entende?</h2>
        <h1>///procure por especialidade</h1>
          
          <ListaVagas>
         
            {vagas.slice(0, 4).map((vaga, index) => (
            <JobsContent key={index}>
              <ImgEmpresa src={vaga.img} alt={vaga.nomeEmpresa}/>
              <NomeEmpresa><a href="#">{vaga.nomeEmpresa}</a></NomeEmpresa>
              <Vaga>{vaga.vaga}</Vaga>
              <Local>{vaga.local}</Local>
              <button>Candidatar</button>
            </JobsContent>
            ))}
          
          </ListaVagas>
          
            <h3>Voce tem <strong>{quantidadedeVagas}</strong> vagas disponíveis.</h3>
          
          <button value="Veja Mais">Veja mais</button>

      </ListaJob>
    );
  }
  
  export default ListJob;
  
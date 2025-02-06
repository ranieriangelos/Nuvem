import React, {useState} from 'react';
import axios from 'axios';
import { FormCadastro } from './style';
import HeaderCadastroVagas from '../HeaderCadastroVagas';

const CadastroVagas: React.FC = () =>{
    const [formValues, setFormValues] = useState({
        contratacao:'',
        trabalho:'',
        experiencia_necessaria:'',
        nivel:'',
        data_postagem:'',
        salario:'',
        descricao:'',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>{
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        axios.post('../../api', formValues)
            .then((response) =>{
                console.log('Deu certo');
            })
            .catch((error)=>{
                console.log(error)
            });
    };

    return (
        <>
          <HeaderCadastroVagas></HeaderCadastroVagas>
           <FormCadastro>
              <h1>///Cadastro de Vagas</h1>
              <h2>Que legal, qual oportunidade nova teremos hoje?</h2>
              <form onSubmit={handleSubmit}>
                <label>
                  Contratação:
                  <select name="contratacao" value={formValues.contratacao} onChange={handleChange}>
                    <option value="">Selecione...</option>
                    <option value="clt">CLT</option>
                    <option value="freelance">Freelance</option>
                    <option value="pj">PJ</option>
                    <option value="estagio">Estágio</option>
                  </select>
                </label>
        
                <label>
                  Tipo:
                  <select name="local" value={formValues.trabalho} onChange={handleChange}>
                    <option value="">Selecione...</option>
                    <option value="homeoffice">Home Office</option>
                    <option value="hibrido">Híbrido</option>
                    <option value="presencial">Presencial</option>
                  </select>
                </label>
        
                <label>
                  Experiência Necessária:
                  <select name="experiencia_necessaria" value={formValues.experiencia_necessaria} onChange={handleChange}>
                    <option value="">Selecione...</option>
                    <option value="0-1">0 - 1 ano</option>
                    <option value="1-2">1 - 2 anos</option>
                    <option value="2-3">2 - 3 anos</option>
                    <option value="3-4">3 - 4 anos</option>
                    <option value="4-5">4 - 5 anos</option>
                    <option value="5-max">5 ou mais anos</option>
                  </select>
                </label>
        
                <label>
                  Nível:
                  <select name="nivel" value={formValues.nivel} onChange={handleChange}>
                    <option value="">Selecione...</option>
                    <option value="junior">Junior</option>
                    <option value="pleno">Pleno</option>
                    <option value="senior">Senior</option>
                  </select>
                </label>
        
                <label>
                  Salário:
                  <input className="salario" type="number" name="salario" value={formValues.salario} onChange={handleChange} />
                </label>
        
                <label>
                  Descrição:
                  <textarea className="areaDescription" name="descricao" value={formValues.descricao} onChange={handleChange} />
                </label>
        
                <button type="submit">Cadastrar</button>
              </form>
            </FormCadastro>
        </>
       
      );
    };

export default CadastroVagas;
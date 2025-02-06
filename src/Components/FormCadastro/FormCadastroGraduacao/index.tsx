import React, { useState } from "react";
import { FormularioCV } from "./style";
import "react-datepicker/dist/react-datepicker.css";
import "moment/locale/pt-br";
import { Link } from "react-router-dom";
import MainHeader from "../../Layout/MainHeader";

interface FormacaoAcademica{
    nivel: string,
    situacao: string,
    curso: string,
    mesInicio: string,
    anoInicio: string,
    mesConclusao: string,
    anoConclusao: string,

}

const FormGraduacao: React.FC = () => {
  const [formacoesAcademicas, setFormacoesAcademicas] = useState<FormacaoAcademica[]>([
    {
      nivel: "",
      situacao: "",
      curso: "",
      mesInicio: "",
      anoInicio: "",
      mesConclusao: "",
      anoConclusao: "",
    },
  ]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    const updatedFormacoesAcademicas = [...formacoesAcademicas];
    updatedFormacoesAcademicas[index] = {
        ...updatedFormacoesAcademicas[index],
        [name]: value,
    }
    setFormacoesAcademicas(updatedFormacoesAcademicas);
  };

  const handleSelectChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    const updatedFormacoesAcademicas = [...formacoesAcademicas];
    updatedFormacoesAcademicas[index] = {
        ...updatedFormacoesAcademicas[index],
        [name]: value,
    }
    setFormacoesAcademicas(updatedFormacoesAcademicas);
  };

  const adicionarFormacaoAcademica = () => {
    setFormacoesAcademicas([
      ...formacoesAcademicas,
      {
        nivel: "",
        situacao: "",
        curso: "",
        mesInicio: "",
        anoInicio: "",
        mesConclusao: "",
        anoConclusao: "",
      },
    ]);
  };

  const removerFormacaoAcademica = (index: number) => {
    const novasFormacoes = [...formacoesAcademicas];
    novasFormacoes.splice(index, 1);
    setFormacoesAcademicas(novasFormacoes);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if(formacoesAcademicas === null){
        alert("Preencha pelo menos uma formação acadêmica.")
        return;
    }
  };

  return (
    <>
      <MainHeader></MainHeader>
      <FormularioCV>
        <h2>cadastre seu currículo</h2>
        <h1>///Qual sua formação?</h1>
        <form className="formularioContent" onSubmit={handleSubmit}>
          {formacoesAcademicas.map((formacao, index) => (
            <div key={index}>
              <select
                className="inputForm Nivel"
                name="nivel"
                value={formacao.nivel}
                onChange={(e) => handleSelectChange(e, index)}
              >
                <option value="">Selecione o Nível de graduação</option>
                <option value="Tecnico">Técnico</option>
                <option value="Graduação">Graduação</option>
                <option value="Pós">Pós-graduação</option>
                <option value="Mestrado">Mestrado</option>
                <option value="Doutorado">Doutorado</option>
              </select>

              <select
                className="inputForm Situacao"
                name="situacao"
                value={formacao.situacao}
                onChange={(e) => handleSelectChange(e, index)}
              >
                <option value="">Selecione a Situação</option>
                <option value="Cursando">Cursando</option>
                <option value="Concluido">Concluído</option>
              </select>

              <input
                className="inputForm Curso"
                type="text"
                name="curso"
                value={formacao.curso}
                onChange={(e) => handleInputChange(e, index)}
                placeholder="Qual curso está fazendo?"
              />
            <div className="contentDatasAulas">

            <h2>///Quando iniciou suas aulas?</h2>
              <select
                className="inputForm Inicio"
                name="mesInicio"
                value={formacao.mesInicio}
                onChange={(e) => handleSelectChange(e, index)}
              >
                <option value="">Selecione um mês</option>
                <option value="01">Jan</option>
                {/* ... opções dos meses ... */}
                <option value="12">Dez</option>
              </select>

              <select
                className="inputForm Inicio"
                name="anoInicio"
                value={formacao.anoInicio}
                onChange={(e) => handleSelectChange(e, index)}
              >
                <option value="">Selecione um ano</option>
                <option value="2023">2023</option>
                {/* ... opções dos anos ... */}
                <option value="2030">2030</option>
              </select>

            </div>
              
            <div className="contentDatasAulas">

            <h2>///Qual a data de término?</h2>
              <select
                className="inputForm Inicio"
                name="mesConclusao"
                value={formacao.mesConclusao}
                onChange={(e) => handleSelectChange(e, index)}
              >
                <option value="">Selecione um mês</option>
                <option value="01">Jan</option>
                {/* ... opções dos meses ... */}
                <option value="12">Dez</option>
              </select>

              <select
                className="inputForm Inicio"
                name="anoConclusao"
                value={formacao.anoConclusao}
                onChange={(e) => handleSelectChange(e, index)}
              >
                <option value="">Selecione um ano</option>
                <option value="2023">2023</option>
                {/* ... opções dos anos ... */}
                <option value="2030">2030</option>
              </select>

            </div>
              

              {/* Desabilita o botão de "Remover Formação" se só houver uma formação acadêmica */}
                {formacoesAcademicas.length > 1 && (
                <button className="buttonFormacao" type="button" onClick={() => removerFormacaoAcademica(index)}>
                    Remover Formação
                </button>
                )}
            </div>
          ))}

          <button className="buttonAddFormacao" type="button" onClick={adicionarFormacaoAcademica}>
            Adicionar Formação
          </button>

          <Link className="LinkRouter" to="/FormCV">
            <button className="enviarButton" type="submit">
              Voltar
            </button>
          </Link>
          <Link className="LinkRouter" to="/login">
            <button className="nextButton" type="submit">
              Salvar e Próxima
            </button>
          </Link>
        </form>
      </FormularioCV>
    </>
  );
};

export default FormGraduacao;

import styled from "styled-components";

export const ListaJob = styled.div`
  width: 70%;
  margin: auto;
  justify-content: center;
  text-align: center;

  > h1 {
    font-size: 20pt;
    font-weight: normal;
    margin: 10px 0 0 0;
    text-transform: uppercase;
    color: #2f3535;
    float: left;
    width: 100%;
    text-align: left;
  }

  > h2 {
    text-align: left;
    font-size: 13pt;
    font-weight: normal;
    width: 100%;
    margin: 40px 0 0 0;
    color: #2f3535;
    float: left;
  }

  > h3 {
    font-size: 13pt;
    font-weight: normal;
    color: #2f3535;
  }

  > button {
    margin: auto;
    background-color: #00b5ce;
    border-radius: 10px;
    border-color: #00b5ce;
    border-style: none;
    color: white;
    text-transform: uppercase;
    font-size: 12pt;
    width: 20%;
    height: 30px;
  }

  > button:hover {
    cursor: pointer;
    background-color: #2f3535;
  }

  /* Estilos para telas menores (largura igual ou menor que 768px) */
  @media (max-width: 768px) {
    width: 90%;
    font-size: 16px;

    > h1 {
      font-size: 18pt;
    }

    > h2 {
      font-size: 14pt;
    }

    > h3 {
      font-size: 14pt;
    }

    > button {
      width: 40%;
      height: 25px;
      font-size: 10pt;
    }
  }
`;

export const ListEspecialidades = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding-bottom: 5px;

  /* Estilos para telas menores (largura igual ou menor que 768px) */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ListaVagas = styled.ul`
  list-style: none;
  display: flex;
  float: left;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;

  /* Estilos para telas menores (largura igual ou menor que 768px) */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const JobsContent = styled.li`
  border: solid #b9cfdd 1px;
  width: 25%;
  height: 200px;
  padding: 20px;
  list-style: none;
  text-align: center;

  > button {
    width: 70%;
    height: 13%;
    text-align: center;
    background-color: #00b5ce;
    border-radius: 10px;
    border-color: #00b5ce;
    border-style: none;
    margin: 10% 0 0 0;
    color: white;
    text-transform: uppercase;
    font-size: 8pt;
  }

  > button:hover {
    cursor: pointer;
    background-color: #2f3535;
  }

  /* Estilos para telas menores (largura igual ou menor que 768px) */
  @media (max-width: 768px) {
    width: 100%;
    margin: 10px 0;
  }
`;

export const ImgEmpresa = styled.img`
  width: 60%;
  height: 40px;

  /* Estilos para telas menores (largura igual ou menor que 768px) */
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

/* O restante do CSS permanece o mesmo */


export const NomeEmpresa = styled.div`
    font-weight: bold;
    font-size: 13pt;
    margin: 5px 0 5px 0;
    
    >a{
        text-decoration: none;
        color: #00BFFF;
    }:hover{
        text-decoration: underline;
    }

`

export const Vaga = styled.div`
    font-size: 11pt;
    text-align: center;
    height: 35px;
    color: #33434e;
`

export const Local = styled.div``

export const Especialidades = styled.div`
    border-bottom: solid #00BFFF 3px;
    width: 20%;
    height: 20px;
    padding-top:10px;
    padding-bottom: 5px; 
    text-align: center;
    font-size: 10pt;
    text-transform: uppercase;

    a{
      cursor: pointer;
      text-decoration: none; 
      color:#2e2e2e;
 
    }:hover{
        text-decoration: underline;
    }

`
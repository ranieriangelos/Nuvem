import styled from "styled-components";

export const FormCadastro = styled.div`
  text-align: center;
  width: 70%;
  margin: 40px auto;
  padding: 0;

  h1 {
    text-transform: uppercase;
    color: #373c3c;
    font-weight: 300;
    margin: 0;
    padding: 0;
    text-align: left;
  }

  h2 {
    color: #373c3c;
    font-weight: 300;
    margin: 0;
    padding: 0;
    text-align: left;
    margin: 30px 0 20px;
  }

  form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    label {
      margin: 10px 0;
      text-align: left;
      display: block;
    }

    select,
    input {
      border-radius: 25px;
      height: 40px;
      padding: 10px;
      border: solid 1px;
      color: #373c3c;
      border-color: #00b5ce; 
      width: 100%;

      @media (max-width: 768px) {
        width: 100%;
      }
    }

    textarea {
      border-radius: 25px;
      padding: 10px;
      border: solid 1px;
      color: #373c3c;
      border-color: #00b5ce;
      width: 100%;
      height: 150px;
      resize: vertical;
    }

    .salario{
      width: 95%;
    }

    .descricao-container {
      grid-column: 1 / span 2;

      @media (max-width: 768px) {
        grid-column: 1;
      }
    }

    button {
      background-color: #00b5ce;
      color: white;
      text-align: center;
      margin: 40px auto;
      border-radius: 25px;
      height: 40px;
      width: 100%;
      border: none;
      cursor: pointer;
      text-transform: uppercase;
      font-size: 14px;
    }

    button:hover {
      background-color: #373c3c;
    }
  }
`;

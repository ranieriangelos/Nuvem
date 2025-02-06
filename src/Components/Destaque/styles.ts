import styled from "styled-components";

export const Content = styled.nav`
    width: 200px;
    padding: 10px 0;
    display: inline-flex;
    margin: 40px 1vw 0px;
    float: left;
    border: solid .5px    #00b5ce;
    border-radius: 10px;
    justify-content: center;
    height: 180px;
    .conteiner-img{
        height: 70px;
    }
    button{
        background-color: #00b5ce;
        border: none;
        padding: 12px;
        width: 100px;
        color: #fff;
        border-radius: 5px;
    }button:hover {
    cursor: pointer;
    background-color: #2f3535;
  }
`

export const Imagem = styled.img`
    width: 100px;
    height: auto;
    margin: 30px 0 0 0;
`

export const TituloVaga = styled.h3`
    font-family: BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: 12px;
    text-transform: uppercase;
    color: #2f3535;
    position: relative;
    
`

export const Empresa = styled.p`
    font-weight: normal;
    color: #2f3535;
    margin: 0;
    font-size: 13px;
`

export const Curtidas = styled.p`
    font-size: 12px;
    color:  #00b5ce;
`
import styled from 'styled-components';
interface CardVagaProps{
    tipo: 'CLT' | 'Freelance' | 'Estagio'; 
}
export const CardVaga = styled.div`
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        width: 440px;
        margin: 10px auto 0;
        border: 1px solid rgb(151, 158, 158);
        border-radius: 10px;
        padding: 10px;

        .contentDescription{
            width: 100%;
            float: left;
            margin: 10px auto 15px;
        }

        .boxInfoTitle{
            width: 100%;
            float: left;
            padding: 0 120px;
        }
        
button{
    border: none;
    background: #00CED1;
    color: #fff;
    padding: 15px;
    border-radius: 10px;
}
button:hover{
    background-color: #2f3535;
    cursor: pointer;
    justify-content: center;
}

h2, h3{
    margin: 0;
    font-weight: normal;
    font-size: 14px;
    float: left;
}
`;

export const NomeEmpresa = styled.h3`
font-weight: normal;
display: flex;
float: left;
`
export const TituloVaga = styled.h1<CardVagaProps>`
    color: ${({tipo}) =>
    tipo === 'CLT' ? '#00CED1' : tipo === 'Freelance' ? '#FF8C00' : '#9932CC'};
    font-weight: normal;
    font-size: 17px;
    margin: 0;
`
export const DescriptionVaga = styled.div`
    font-weight: normal;
    width: 100%;
    float: left;
    ul{
        list-style: none;
        width: 100%;
        float: left;
        font-size: 12px;

    }
    li{
        width: 100%;
    }
`
export const DataPub = styled.h3`
    font-weight: normal;
    `
export const TypeVaga = styled.h3`
    font-weight: normal;
    float: left;
    width: 20%;
`
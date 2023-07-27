import styled from "styled-components";

export const DescriptionVaga = styled.div`
    width: 100%;
    grid-area: CD;
    >ul>li>h3 {
    font-weight: 500;
    font-size: 10pt;
    float: left;
    margin: 0px 20px 0;
    justify-content: center;
    }
    .ContentVaga{
        float: left;
        font-weight: 400;
        font-size: 10pt;
        height: 50px;
        color: #6e6e6e;
        width: 474px;
}

    >ul {
    list-style: none;
    display: flex;
    padding: 0;
    margin: 10px 0;
    }
    `  

export const CardCLT = styled.div`
    width: 100%;
    display: flex;
    display: grid;
    grid-template-areas: 
    'CT CD'
    'CF CF';
    .contentLeft{
        grid-area: CT; 
        text-align: center;}
    .footerCardVaga{
        grid-area:CF; 
        border-top: 1px solid #dedede;
        border-bottom: 3px solid #dedede;
        display: flex;
        height: 60px;
    }
    .footerCardVaga>h2 {
    font-size: 10pt;
    margin: 20px 5px 0 45px;
    height: 50px;
    width: 102px;
}

    .periodoPagamento {
    font-size: 10pt;
    color: #7a6f6f;
    font-weight: 600;
    margin: 20px 0;
}
.enviarCVcard{
    background-color: #00b5ce;
    border: none;
    border-radius: 35px;
    padding: 0 20px;
    height: 40px;
    color: white;
    margin: 10px 0 0 260px;
}
`
export const FotoEmpresa = styled.div`
        width:70px;
        height: 70px;
        border-radius: 90px;
        background-color: #00b5ce;
        margin: 10px auto;
    `
export const TituloVaga = styled.div`
    font-size: 14pt; 
    font-weight: 400;
    text-align: left;
    width: 100%;
    margin: 10px 0 0;
    color: #00b5ce;
`
export const NomeEmpresa = styled.div`
     font-size: 10pt; 
     font-weight: 400;
     text-align: left;
     margin: 0;
`
export const DataPub = styled.div`
    
    font-weight: 300;
    font-size: 10pt;
    float: left;
    margin: 0px 20px 0;
` 
export const TypeVaga = styled.div``
import styled from "styled-components";

export const ContentMain = styled.div`
   width: 70%;
   text-align: center;
    justify-content: center;
   >h1{
        font-size: 20pt;
        font-weight: normal;
        margin: 0px 0 0 0;
        text-align: left;
        text-transform: uppercase;

    };
    >h2{ font-size: 13pt;
        font-weight: 300;
        width: 400px;
        margin: 30px 0 0 0;
        text-align: left;
        
    };
    >h3{
        font-size: 13pt;
        font-weight: 350;
        line-height: 14pt;
    }
    .pontos{
        width: 58%;
    }
    .ponto-azul{
        width: 10px;
        height: 10px; 
        background-color: #00b5ce;
        border-radius: 10px;
        float: left;
        margin: 17% 4px 0 5px;
    }
    .Content-imagens-guia{
        width: 100%;
        justify-content: center;
        text-align: center;
        display: flex;
        margin: 30px 0 0 3%;
    }
    .guia-imagens {
    display: flex;
    float: left;
    justify-content: center;
}
    .img-content{
        float: left;
        text-align: center;
        width: 38%;
    }
    .legenda-img{
        float: left;
        font-weight: 200;
        font-size: 13px;
        width: 95px;

    }

    >div{
    }
`

export const ContentEmpresasHome = styled.div`
    margin: 30px 0;
    background-color: #2f3535;
    width: 100%;
    text-align: center;
    height: 400px;
    justify-content: center;
    display: flex;
    color: white;
    >img{
        display: flex;}
`


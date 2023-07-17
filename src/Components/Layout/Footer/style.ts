import styled from "styled-components";
import NuvemFooter from '../../../assets/nuvem-footer.png';


export const FooterMain = styled.div`
    background-color: #2f3535;
    width: 100%;
    height: 100tr;
    margin: 50px 0 0 0;
    border-top: solid 7px #00b5ce;
    padding: 0 0 5px;
    `;

export const ImgLogo = styled.div`
    background-image: url(${NuvemFooter});
    background-size: 109px 23px;
    width: 109px;
    height: 23px;
    border: none;
    margin: 0px 0 0 0;
`

export const ContentFooter = styled.div`
    width: 70%;
    margin: 20px auto;
    display: grid;

    .ContentRodape{
        color: white;
        font-weight: 100;
        font-size: 9pt;
        text-align: center;
        margin: 50px 0 0 0;
        padding: 0;
    }

`

export const Newsletter = styled.div`
    display: flex;
    color: white;
    text-transform: uppercase;
    height: 24px;
    
    >h2{
        display: flex;
        margin: 0 20px 0 100px;    
        font-weight: 200;
        font-size: 13pt;

    }
    >img{
        margin: 0 10px 0 10px;
    }
    >input{
        border-radius: 7px;
        padding: 10px;
        width: 28%;
        margin: 0 8px 0 5px;
        color: #2f3535;
        border: none;
    }
    >button{
        border-radius: 7px;
        background-color: #00b5ce;
        border: none;
        width: 100px;
        height: 24px;
        margin: 0 5px 0 5px;    
    }
    button:hover{
        background-color: #fff;
        cursor: pointer;
    }
`

export const ListasMapadoSite = styled.nav`
    width: 100%;
    display: flex;
    margin: 50px 0 0 0;
    ul.ListMap{
        width: 200px;
        list-style: none;
        margin: 15px 0;
        padding: 0;
    }
    >li{
        display: flex;
        list-style: none;
    }
   
`

export const Lista = styled.nav`
        display: grid;
        grid-template-columns: 1fr;
        font-size:11pt;
        font-weight: 100pt;
    >h1{
    margin: 0 0 0px 0;
    padding: 0;
    color: #00b5ce;
    font-weight: 400;
    text-transform: uppercase;
    }
    .Link{
        color: white;
        text-decoration: none;
        margin: 20px 0 0 0;
    }:hover{
        color: #00b5ce;
    }
    .redesSociais{
        float: left;
        display: flex;
        list-style: none;
        margin: 0 5px 0 5px;
        padding: 0px;
    }
    .intemSocialNet{
        margin: 0 5px;
    }
`
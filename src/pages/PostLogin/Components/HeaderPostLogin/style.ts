import styled from "styled-components";
import LogoImg from '../../../../assets/logo.png';

export const HeaderLogin = styled.div`
    display: flex;
    background-color: #404646;
    height: 70px;
    .headerPostLogin{
        width: 80%;
        margin: 0 auto;
        display: flex;
    }
   .headerPostLogin>h2{
    text-transform: uppercase;
    color: white;
    font-size: 13pt;
    font-weight: 200;
    margin: 30px 20px;
}
`

export const ImgLogo = styled.div`
    background-image: url(${LogoImg});
    background-size: 149px 35px;
    width: 149px;
    height: 35px;
    border: none;
    margin: 20px 0 0 0;

`

export const Message = styled.div`
    width: 30px;
    height: 30px;
    color: white;
    margin: 30px 0 0 550px;
    font-weight: 600;
    font-size: 12pt;
`
export const Notification = styled.div`
    width: 30px;
    height: 30px;
    color: white;
    margin: 30px 0;
    `
export const FotoPerfil = styled.div``

export const MenuDropDown= styled.div`
    border: none;  
    z-index: 1;
    .menuDropDownButton{
        background-color: #404646;
        color: white;
        border: none;
        font-size: 14pt;   
        margin: 20px 0 0 0;
        position: absolute;
        
    }:hover{
        cursor: pointer;
        color: #3dbede;
    }
    .ListMenu {
        list-style: none;
        background-color: white;
        margin: 0px 98px 0 0;
        padding: 20px;
        border-radius: 20px;
        border: solid 1px #3dbede;
        z-index: 1;
        text-transform: uppercase;
        position: absolute;
        top: 60px;
        right: 20px;
    }
    .itemMenu{
        margin: 5px 10px;
        border-bottom: solid 1px #dcdcdc;
        padding-bottom: 3px;
        
        
    }:Link{
        text-decoration: none;
        color: #404646;
    }:hover{
        color: #3dbede;
    }
`

import styled from "styled-components";
import LogoImg from '../../../assets/logo.png';


export const Header = styled.header`
    width: 100%;
    text-align: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    
    `
export const MenuHeader = styled.div`
    background-color: #2f3535;
    margin: auto;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;

`

export const ImgLogo = styled.div`
    background-image: url(${LogoImg});
    background-size: 149px 35px;
    width: 149px;
    height: 35px;
    border: none;
    margin: 10px 0 0 0;
   
`

export const ListMenu = styled.ul`
    list-style: none;
    display: flex;
     color:  white;
    text-transform: uppercase;
    justify-content: right;
    //font-weight: 200;
    font-size: 12pt;
    width: 60%;
`

export const MenuItens = styled.li`
    display: flex;
    float: left;
    >a{
        text-decoration: none;
        color: white;
    }:hover{
        text-decoration: underline;
    };

`

export const Point = styled.div`
    display: block;
    background-color: #00BFFF;
    width: 5px;
    height: 5px;
    border-radius: 10px;
    margin-top: 8px;
    margin-right: 5px;
    margin-left: 20px;
`



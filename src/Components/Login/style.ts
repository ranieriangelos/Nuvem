import styled from "styled-components";

export const Login = styled.div`
width:35%;
margin: 0;
padding: 0;
display: flex;
`

export const ContentForm= styled.div`
text-align: left;
width: 100%;
border-right: solid 3px #00b5ce;

>h2{color: #373c3c; font-weight: 300; margin: 0; padding: 0;}
>h1{text-transform: uppercase; color: #373c3c; font-weight: 300; margin: 0; padding: 0;}
.InputLogin {
    width: 85%;
    border-radius: 25px;
    height: 20px;
    padding: 10px;
    border: solid 1px;
    color: #373c3c;
}
>button{background-color:#00b5ce; border: none; border-radius: 20px; width: 30%; height: 40px; margin: 15px 0 0; color: white; justify-content: center;}
>button:hover{background-color:#373c3c; cursor: pointer;}
.LegendaInput{color: #373c3c; font-weight: 300; margin: 20px 0 0; padding: 0; text-transform: uppercase;}
`
import React from "react";
import {Login, ContentForm} from './style'

const LoginUsuario: React.FC = () =>{
    return (
        <Login>
            <ContentForm>
            <h2>achou sua vaga?</h2>
            <h1>///Faça Login</h1>

            <form>
                <h3 className="LegendaInput">Email*</h3>
                <input className='InputLogin' value="Email"></input>
                <h3 className="LegendaInput">Senha*</h3>
                <input className='InputLogin' value="Senha"></input>
            </form>
            <button value="Login">Login</button>
            </ContentForm>
        </Login>
    )
}

export default LoginUsuario;


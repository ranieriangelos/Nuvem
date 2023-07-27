import React, {useContext, useState} from "react";
import {Login, ContentForm} from './style'
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginUsuario: React.FC = () =>{


    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const [usuario, setUser] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () =>{
        if(usuario && password){
            const isLogged = auth.signin(usuario, password);
            if( await isLogged){
                    navigate('/Dashboard');
            } else {
                alert("Nao foi")
            }
        }
    }

    return (
        <Login>
            <ContentForm>
            <h2>achou sua vaga?</h2>
            <h1>///Faça Login</h1>

            <form>
                
                <h3 className="LegendaInput">Usuário*</h3>
                
                <input 
                onChange={e => setUser(e.target.value)} 
                className='InputLogin' 
                value={usuario} 
                placeholder="Usuário" />
               
                <h3 className="LegendaInput">Senha*</h3>
                
                <input 
                onChange={e => setPassword(e.target.value)} 
                className='InputLogin' 
                value={password} 
                placeholder="Senha" 
                type="password"/>

            </form>
            <button value="Login" onClick={handleLogin}>Login</button>
            </ContentForm>
        </Login>
    )
}

export default LoginUsuario;


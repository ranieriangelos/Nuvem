import React from 'react';
import LoginUsuario from '../../Components/Login';
import Cadastrese from '../../Components/CadastroLogin/Index';
import {LoginContent} from './style'

const Login: React.FC = () =>{
    return(
        <LoginContent>
            <LoginUsuario/>
            <Cadastrese></Cadastrese>
        </LoginContent>

      );
  }
  
  export default Login;
  
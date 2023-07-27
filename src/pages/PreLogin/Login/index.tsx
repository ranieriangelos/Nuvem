import React from 'react';
import LoginUsuario from '../../../Components/Login';
import Cadastrese from '../../../Components/CadastroLogin/Index';
import {LoginContent} from './style'
import MainHeader from '../../../Components/Layout/MainHeader';

const Login: React.FC = () =>{
    return(
        <>
        <MainHeader></MainHeader>
        <LoginContent>
            
            <LoginUsuario/>
            <Cadastrese></Cadastrese>
        </LoginContent>
        </>
      );
  }
  
  export default Login;
  
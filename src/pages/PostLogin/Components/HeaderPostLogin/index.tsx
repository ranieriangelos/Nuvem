import React, { useContext, useState } from "react";
import {HeaderLogin, Message, Notification, FotoPerfil, MenuDropDown, ImgLogo} from './style'
import auth from '../../../PreLogin/Login'
import { BsBell, BsEnvelope } from 'react-icons/bs';
import {AuthContext} from '../../../../contexts/Auth/AuthContext'
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Link  } from 'react-router-dom';

const HeaderPostLogin: React.FC = () =>{
    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const handleLogout = async () =>{
        await auth.signout();
        navigate('/');
    }

    const toogleDropdown = () =>{
        setIsOpen(!isOpen);
    }

    function teste() {
        if(prompt("Digite Ok para verdadeiro.") == "Ok")
        return true;
        else
        return false;
    }
    
    return(
        
        <HeaderLogin> 
            <div className="headerPostLogin"> 
            <Link to='/Dashboard'><ImgLogo/></Link>
            <h2>///Olá, bem vindo <strong>{auth.user?.name}</strong></h2>
            <Message><BsEnvelope></BsEnvelope></Message>
            <Notification><BsBell></BsBell></Notification>
            <FotoPerfil></FotoPerfil>
            <MenuDropDown>
                <button onMouseOver={toogleDropdown} className='menuDropDownButton'>☰</button>
                {isOpen &&(
                    <ul className='ListMenu'>
                        <li className='itemMenu'><Link to='/Configuracoes'>///perfil</Link></li>
                        <li className='itemMenu'><Link to='/Configuracoes'>///vagas</Link></li>
                        <li className='itemMenu'><Link to='/Configuracoes'>///projetos colaborativos</Link></li>
                        <li className='itemMenu'><Link to='/Configuracoes'>///Minhas Candidaturas</Link></li>
                        <li className='itemMenu'><Link to='/Configuracoes'>///cursos</Link></li>
                        <li className='itemMenu'><Link to='/Configuracoes'>///ajuda/ suporte</Link></li>

                        <li className='itemMenu'><Link to='/Configuracoes'>///Configurações</Link></li>
                        <li className='itemMenu'>{auth.user && <a onClick={handleLogout}>///Sair</a>}</li>
                    </ul>
                    
                )}
                
            </MenuDropDown>
            </div> 
        </HeaderLogin>
    );
} 

export default HeaderPostLogin;
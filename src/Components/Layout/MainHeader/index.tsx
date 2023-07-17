import React from 'react';
import { Header, ImgLogo, ListMenu, MenuItens, Point, MenuHeader } from './style';
      


const MainHeader: React.FC = () =>{
    return(

       
      <Header>
       
        <MenuHeader>
            <ImgLogo/>
            <ListMenu>
                <MenuItens>
                    <Point></Point>
                    <a href="#">Sobre</a>
                </MenuItens>
                <MenuItens>
                    <Point></Point>
                    <a href="#">Empresa</a>
                </MenuItens>
                <MenuItens>
                    <Point></Point>
                    <a href="#">Vagas</a>
                </MenuItens>
                <MenuItens>
                    <Point></Point>
                    <a href="#">Cadastre-se</a>
                </MenuItens>
                <MenuItens>
                    <Point></Point>
                    <a href="#">lOGIN</a>
                </MenuItens>
            </ListMenu>
        </MenuHeader>

      </Header>
      
    );
  }
  
  export default MainHeader;
  
import React, { useContext,  } from 'react';
import { Header, ImgLogo, ListMenu, MenuItens, Point, MenuHeader } from './style';
import { AuthContext } from '../../../contexts/Auth/AuthContext';
import { RequireAuth  } from '../../../contexts/Auth/RequireAuth';
import Candidato from '../../../pages/PostLogin/Pages/Perfil';
import { BrowserRouter as Router, Route, Link, Routes  } from 'react-router-dom';


    


const MainHeader: React.FC = () =>{
    
    const auth = useContext(AuthContext);
    
    return(

       
      <Header>
       
       <MenuHeader>
       <Link to='/'><ImgLogo/></Link>
           <ListMenu>
           <MenuItens>
                   <Point></Point>
                   <Link to='/'>Home</Link>        
               </MenuItens>
               <MenuItens>
                   <Point></Point>
                   <Link to='/empresas'>Empresas</Link>
               </MenuItens>
              
               <MenuItens>
                   <Point></Point>
                   <Link to='/jobs'>Vagas</Link>
               </MenuItens>
               <MenuItens>
                   <Point></Point>
                   {auth.user &&  <Link to='/Dashboard'>Dashboard</Link>}
                   {!auth.user &&  <Link to='/login'>Login</Link>}
               </MenuItens>
               
           
           </ListMenu>
       </MenuHeader>
       
       </Header>
      
    );
  }
  
  export default MainHeader;
  
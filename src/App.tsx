import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Home from './pages/Home';
import Candidato from './pages/Candidato';
import Jobs from './pages/Jobs';
import Empresas from './pages/Empresas';
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Link, Routes  } from 'react-router-dom';
import { Header, ImgLogo, ListMenu, MenuItens, Point, MenuHeader } from './Components/Layout/MainHeader/style';
import Footer from './Components/Layout/Footer';


const App: React.FC = () =>{
  return(
    <>
    <Router>
    <Header>
       
       <MenuHeader>
           <ImgLogo/>
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
                   <Link to='/login'>Login</Link>
               </MenuItens>
           </ListMenu>
       </MenuHeader>
       
       </Header>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/candidato' element={<Candidato></Candidato>} />
        <Route path='/jobs' element={<Jobs></Jobs>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/empresas' element={<Empresas></Empresas>} />
      </Routes>
    </Router>  
    <Footer></Footer>



</>






    );
}

export default App;

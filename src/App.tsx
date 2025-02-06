import React from 'react';
import Home from './pages/PreLogin/Home';
import Candidato from './pages/PostLogin/Pages/Perfil';
import Jobs from './pages/PreLogin/Jobs';
import Empresas from './pages/PreLogin/Empresas';
import Login from './pages/PreLogin/Login';
import { BrowserRouter as Router, Route, Link, Routes  } from 'react-router-dom';
import Footer from './Components/Layout/Footer';
import FormularioDadosPessoais from './Components/FormCadastro/FormCadastroDadosPessoais'
import FormularioEndereco from './Components/FormCadastro/FormCadastroEndereco'
import FormularioAcesso from './Components/FormCadastro/FormCadastroAcesso'
import FormularioGraduacao from './Components/FormCadastro/FormCadastroGraduacao'
import { RequireAuth } from './contexts/Auth/RequireAuth';
import Dashboard from './pages/PostLogin/Pages/Dashboard';


const App: React.FC = () =>{
  return(
    <>
    <Router>
      
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/candidato' element={<Candidato></Candidato>} />
        <Route path='/jobs' element={<Jobs></Jobs>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/empresas' element={<Empresas></Empresas>} />
        <Route path='/FormCV' element={<FormularioDadosPessoais></FormularioDadosPessoais>} />
        <Route path='/FormEnd' element={<FormularioEndereco></FormularioEndereco>} />
        <Route path='/FormAcesso' element={<FormularioAcesso></FormularioAcesso>} />
        <Route path='/FormGraduacao' element={<FormularioGraduacao></FormularioGraduacao>} />
        <Route path='/Dashboard' element={<RequireAuth><Dashboard/></RequireAuth>} />


      </Routes>
    </Router>  
    <Footer></Footer>
</>
    );
}

export default App;

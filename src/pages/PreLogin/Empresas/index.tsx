import React from 'react';
import MainHeader from '../../../Components/Layout/MainHeader';
import CadastroVagas from '../../../Components/CadastroVagas/Index';
import Footer from '../../../Components/Layout/Footer';


const Empresas: React.FC = () =>{
    return(
      <>
      <MainHeader></MainHeader>
            <CadastroVagas></CadastroVagas>
            <Footer></Footer>
      </>
    );
  }
  
  export default Empresas;
  
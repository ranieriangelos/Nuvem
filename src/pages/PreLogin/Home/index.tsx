import React from 'react';
import ListJob from '../../../Components/ListJob';
import MainHeader from '../../../Components/Layout/MainHeader'
import ParaEmpresasHome from '../../../Components/ParaEmpresasHome'
import NewsHome from '../../../Components/News';
import Footer from '../../../Components/Layout/Footer';
import Baner from '../../../Components/Layout/Baner';

import {  } from './style';

const Home: React.FC = () =>{
    return(
      <>
      <MainHeader></MainHeader>
      <Baner></Baner>
      <ListJob></ListJob>
      <ParaEmpresasHome></ParaEmpresasHome>
      <NewsHome></NewsHome>
      </>
    );
  }
  
  export default Home;
  
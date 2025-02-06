import React from "react";
import CadastroVagas from "../../../Components/CadastroVagas/Index";
import MainHeader from "../../../Components/Layout/MainHeader";
import Footer from "../../../Components/Layout/Footer";
import { ContentCadastroVagas } from "./style";

const CadastroVagasPage: React.FC = () =>{
    return  (
        <ContentCadastroVagas>  
            <MainHeader></MainHeader>
            <CadastroVagas></CadastroVagas>
            <Footer></Footer>
        </ContentCadastroVagas>
    )
    }
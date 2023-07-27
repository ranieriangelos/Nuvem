import React from "react";
import { ListMainVagas } from "./style";
import VagaCLT from "../Components/TypeVagas/CLT"
import VagaFreelance from "../Components/TypeVagas/Freelance";
import VagaPartner from "../Components/TypeVagas/Partner";



const ListVagas: React.FC = () =>{

    return(

        <ListMainVagas>
            <div className="BuscaOption">
                <h3>///Encontre a sua oportunidade aqui</h3>
                <input></input>
                <button className="buttonBuscar">///Buscar</button>
                <button className="buttonFilter">///Filtros</button>
            </div>
            <div className="ScrollContent">
                <VagaCLT/>
                <VagaFreelance/>
                <VagaPartner/>
                <VagaPartner/>
                <VagaCLT/>
            </div>

        </ListMainVagas>
 
    )
}

export default ListVagas;
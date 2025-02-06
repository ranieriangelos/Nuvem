import React from "react";
import { ListMainVagas } from "./style";


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
                
            </div>

        </ListMainVagas>
 
    )
}

export default ListVagas;
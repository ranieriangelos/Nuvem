import React from "react";
import {CadastroMesage} from './style'

const Cadastrese: React.FC = () => {
    return(
        <CadastroMesage>
            <h2>primeira vez?</h2>
            <h1>///Cadastre-se</h1>

            <h3 className="LegendaCadastro">Aquele trampo que parecia coisa impossivel pode rolar aqui e com você!</h3>
            <h3 className="LegendaCadastro">Cadastre-se e receba propostas no seu celular!</h3>
            
            <button value="Cadastrar">Cadastrar</button>
        </CadastroMesage>
    )
}

export default Cadastrese;
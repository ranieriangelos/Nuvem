import React from "react";
import {CadastroMesage} from './style';
import {Link} from 'react-router-dom';

const Cadastrese: React.FC = () => {
    return(
            <CadastroMesage>
                <h2>primeira vez?</h2>
                <h1>///Cadastre-se</h1>

                <h3 className="LegendaCadastro">Aquele trampo que parecia coisa impossivel pode rolar aqui e com você!</h3>
                <h3 className="LegendaCadastro">Cadastre-se e conheça essa comunidade.</h3>
                
                <Link className="LinkRouter" to="/FormCV"><button value="Cadastrar">Cadastrar</button></Link>
            </CadastroMesage>
           
    )
}

export default Cadastrese;
import React from "react";
import { CardFreelance ,NomeEmpresa, FotoEmpresa, TituloVaga, DescriptionVaga, DataPub, TypeVaga} from "./style";

const VagaFreelance: React.FC = () => {
    return(
        <CardFreelance>
            
            <div className="contentLeft">
                <FotoEmpresa></FotoEmpresa>
                <TypeVaga>Freela</TypeVaga>
            </div>
            
           
            <DescriptionVaga>
                <div className="contentDescription">
                <TituloVaga>///Desenvolvedor Full-Stack</TituloVaga>
                <NomeEmpresa>nuvem</NomeEmpresa>
                </div>
                    <ul>
                        <li><h3>Remoto</h3></li>
                        <li><h3>1-2 anos</h3></li>
                        <li><h3>São Paulo</h3> </li>
                        <li><h3>Pleno</h3></li>
                        <li><DataPub>19/07/2023</DataPub></li>
                    </ul>
                    
                    
                    <h2 className="ContentVaga">Lorem ipsum sot diler amet, anot amore ocutber et la mor, vinets Argmonu yola.</h2>
            </DescriptionVaga>

                <div className="footerCardVaga">

                    <h2>R$ 2000 - 4000</h2>
                    <h4 className="periodoPagamento">/Mes</h4>

                    <h2 className="contCandidatura">30 Candidaturas</h2>
                    <button className="enviarCVcard">Candidatar</button>
                </div>
            
            
        </CardFreelance>
    )
}

export default VagaFreelance;
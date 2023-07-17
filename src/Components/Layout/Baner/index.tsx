import React from "react"
import { BannerBusca } from "./style";

 const Baner: React.FC = () =>{
    return(
            <BannerBusca>
                <div className="ContentBanner">
                        <h1 className="MainText">///A gente te ajuda a ir mais longe</h1>
                        <h2 className="SecondText">Na Nuvem você encontra o trampo dos seus sonhos e as empresas encontram o profissional que procuram.</h2>
                        <h3 className="Calltoaction">Ta esperando o que?</h3>
                        <input className="buscaJob" defaultValue="Qual o trampo do seu sonho?"></input>  
                 </div>      
            </BannerBusca>
    )
 }

export default Baner;
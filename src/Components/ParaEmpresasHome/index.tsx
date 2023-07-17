import React from "react"
import {ContentEmpresasHome, ContentMain} from "./style";

const ParaEmpresasHome: React.FC = () => {
    const    ImageEPontos = [
        {
        imagem:require("../../assets/find-home.png"),
        pontos: 10,
        text: "Anuncie com a NUVEM"
        },
        {
        imagem:require("../../assets/person-home.png"),
        pontos: 10,
        text: "Encontre o profissional certo"
        },
        {
        imagem: require("../../assets/time-home.png"),
        pontos: 0,
        text: "Contrate, economize tempo e dinheiro"
        }
    ];


    return (
    <ContentEmpresasHome>
        <ContentMain>
    <h2>para empresas</h2>
    <h1>///encontre as pessoas certas</h1>

    <h3>Não é tão complicado achar profissionais com o perfil da sua empresa!</h3>

    <h3>Anuncie com a Nuvem e você aparece para milhares de profissionais criativos e diferenciados
        de forma mais rápida e direta.
    </h3>
    <div className="Content-imagens-guia">
        {ImageEPontos.map((item, index) =>(
            <div className="guia-imagens" key={index}>
                <div className="img-content">
                    <img src={`${item.imagem}`} alt={`Imagem ${index + 1}`}/>
                    <h4 className="legenda-img">{item.text}</h4>
                </div>
                <div className="pontos">
                    {[...Array(item.pontos)].map((_, pontoIndex) =>(
                        <div key={pontoIndex} className={`ponto-azul ${pontoIndex === item.pontos - 1? "ultimo-ponto" : ""}`} />
                    ))}
                   
                </div>
            </div>
        ))}
    </div>
    </ContentMain>
    </ContentEmpresasHome>
    );};
    
export default ParaEmpresasHome;
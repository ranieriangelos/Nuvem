import React from 'react';
import {
  FooterMain,
  ImgLogo,
  ContentFooter,
  Newsletter,
  ListasMapadoSite,
  Lista,
} from './style';
import instagram from '../../../assets/instagram.png';
import facebook from '../../../assets/facebook.png';
import linkedin from '../../../assets/linkedin.png';
import youtube from '../../../assets/youtube.png';

const Footer: React.FC = () => {
  return (
    <FooterMain>
      <ContentFooter>
        <Newsletter>
          <ImgLogo />
          <h2>receba nossa newsletter</h2>
          <input placeholder="Digite seu e-mail" type='email'/>
          <button>Enviar</button>
        </Newsletter>
        <ListasMapadoSite>
          <Lista>
            <h1>Empresas</h1>
            <ul className="ListMap">
              <li>
                <a href="#" className="Link">
                  Cadastre sua empresa
                </a>
              </li>
              <li>
                <a href="#" className="Link">
                  Publique uma vaga
                </a>
              </li>
              <li>
                <a href="#" className="Link">
                  Login
                </a>
              </li>
              <li>
                <a href="#" className="Link">
                  FAQ
                </a>
              </li>
            </ul>
          </Lista>
          <Lista>
            <h1>Candidatos</h1>
            <ul className="ListMap">
              <li>
                <a href="#" className="Link">
                  Cadastre seu currículo
                </a>
              </li>
              <li>
                <a href="#" className="Link">
                  Procure uma vaga
                </a>
              </li>
              <li>
                <a href="#" className="Link">
                  Busque empresas
                </a>
              </li>
              <li>
                <a href="#" className="Link">
                  Login
                </a>
              </li>
              <li>
                <a href="#" className="Link">
                  FAQ
                </a>
              </li>
            </ul>
          </Lista>
          <Lista>
            <h1>Sobre a Nuvem</h1>
            <ul className="ListMap">
              <li>
                <a className="Link" href="#">
                  Quem somos?
                </a>
              </li>
              <li>
                <a className="Link" href="#">
                  Seja parceiro
                </a>
              </li>
              <li>
                <a className="Link" href="#">
                  Blog
                </a>
              </li>
              <li>
                <a className="Link" href="#">
                  Contato
                </a>
              </li>
              <li>
                <a className="Link" href="#">
                  Anuncie com a gente
                </a>
              </li>
            </ul>
          </Lista>
          <Lista>
            <h1>Redes Sociais</h1>
            <ul className="redesSociais">
              <li className="intemSocialNet">
                <a href="#">
                  <img src={instagram} alt="Instagram" />
                </a>
              </li>
              <li className="intemSocialNet">
                <a href="#">
                  <img src={youtube} alt="YouTube" />
                </a>
              </li>
              <li className="intemSocialNet">
                <a href="#">
                  <img src={facebook} alt="Facebook" />
                </a>
              </li>
              <li className="intemSocialNet">
                <a href="#">
                  <img src={linkedin} alt="LinkedIn" />
                </a>
              </li>
            </ul>
          </Lista>
        </ListasMapadoSite>
        <h3 className="ContentRodape">
          Nuvem Ltda. Copyright 2023. Todos os direitos reservados. CNPJ:
          14.058.034/0001-41 - Rua Marechal Deodoro, nº 1805 - Sala 201 - São
          Bernardo do Campo - SP - Brasil
        </h3>
      </ContentFooter>
    </FooterMain>
  );
};

export default Footer;

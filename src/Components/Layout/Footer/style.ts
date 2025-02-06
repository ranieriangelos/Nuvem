import styled from "styled-components";
import NuvemFooter from '../../../assets/nuvem-footer.png';

export const FooterMain = styled.div`
  background-color: #2f3535;
  padding: 20px 0;
  border-top: solid 7px #00b5ce;
  text-align: center;
  ul.ListMap{
    list-style: none;
    padding: 0px;
    
  }
  .redesSociais{
    display: flex;
    list-style: none;
    padding: 0;
    justify-content: center;
} 
.intemSocialNet{
    margin: 0 10px;
}
.ContentRodape{
    width: 100%;
    padding: 0px;
    color: white;
    text-transform: uppercase;
    font-size: 70%;
    text-align: center;
}
`;

export const ImgLogo = styled.div`
  background-image: url(${NuvemFooter});
  background-size: 109px 23px;
  width: 109px;
  height: 23px;
  margin: 0 auto 20px;
`;

export const ContentFooter = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Newsletter = styled.div`
  color: white;
  text-align: center;
  margin-bottom: 20px;
  flex-basis: 100%;
  text-transform: uppercase;

  > h2 {
    margin: 10px 0;
    font-weight: 200;
    font-size: 13pt;
  }

  > input {
    border-radius: 7px;
    padding: 10px;
    width: 100%;
    max-width: 280px;
    margin: 8px 0;
    color: #2f3535;
    border: none;
  }

  > button {
    border-radius: 7px;
    background-color: #00b5ce;
    border: none;
    width: 100%;
    max-width: 280px;
    height: 40px;
    margin-top: 10px;
    margin-left: 20px;
    cursor: pointer;
  }

  button:hover {
    background-color: #fff;
  }
`;

export const ListasMapadoSite = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  justify-content: center;
  flex-basis: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Lista = styled.div`
  font-size: 12pt;
  font-weight: 400;
  color: white;

  > h1 {
    margin: 0 0 15px;
    padding: 0;
    color: #00b5ce;
    font-size: 20px;
    font-weight: 400;
    text-transform: uppercase;
  }

  .Link {
    color: white;
    text-decoration: none;
    margin: 5px 0;
    display: block;
  }

  .Link:hover {
    color: #00b5ce;
  }
`;

export const redesSociais = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-basis: 100%;
  text-align: center;
`;

export const intemSocialNet = styled.li`
  margin: 0;
`;

export const SocialLink = styled.a``;

export const SocialIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const ContentRodape = styled.h3`
  color: white;
  font-weight: 400;
  font-size: 9pt;
  text-align: center;
  margin: 30px 0;
  padding: 0;
  flex-basis: 100%;
`;

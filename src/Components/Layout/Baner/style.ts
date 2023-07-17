import styled from "styled-components"
import backgroundImage from '../../../assets/img-header-home.jpg';

export const BannerBusca = styled.div`
    background-image: url(${backgroundImage});
    width: 100%;
    text-align: center;
    color: white;
    height: 300px;
    display: flex;
    justify-content: center; 

    .ContentBanner{
        width: 70%;
    };
    .MainText{
        font-size: 20pt;
        font-weight: normal;
        margin: 30px 0 0 0;
        text-transform: uppercase;

    };
    .SecondText{ font-size: 14pt;
        font-weight: 400;
        width: 70%;
        margin: 30px auto;
        line-height: 18pt;
    };

    .Calltoaction{ font-size: 11pt;
        font-weight: normal;
        };

    .buscaJob{
        width: 40%;
        border: none;
        border-radius: 7px;
        padding: 4px 10px;;
        color: #858888;
        height: 30px;
        margin: 10px 0 0 0;
    }

`

import styled from "styled-components";

export const NewsHome = styled.div`
    width: 100%;
    justify-content: center;
    display: flex;
    text-align: center;
    margin: 0 0 50px 0;

    .MainNews{
        width: 70%;
        list-style: none;
        
    }
    .MainNews>h1{
        font-size: 20pt;
        font-weight: normal;
        margin: 10px 0 0 0;
        text-transform: uppercase;
        color: #2f3535;
        float: left;
        width: 100%;
        text-align: left;
    };
    .MainNews>h2{ 
        text-align: left;
        font-size: 13pt;
        font-weight: normal;
        width: 100%;
        margin: 40px 0 0 0;
        color: #2f3535;
        float: left;
    };

`

export const ListNews = styled.ul`
        list-style: none;
        border: solid 1px #a8b3b3 ;
        width: 26%;
        display: flex;
        float: left;
        margin: 30px 1% 0 1%;
`

export const ItemList = styled.li`
            text-align: center;
        >a{
            text-decoration: none;
        }
`
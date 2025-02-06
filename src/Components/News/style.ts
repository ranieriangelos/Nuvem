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
        width: 200px;
        padding: 0px 0;
        display: inline-flex;
        margin: 40px 1vw 0px;
        float: left;
        border: solid .5px    #a8b3b3;
        border-radius: 10px;
        justify-content: center;
        list-style: none;
`

export const ItemList = styled.li`
            text-align: center;
        img{
            width: 200px;
            height: 200px;
            background-color: red; 
            border-top-right-radius: 10px;
            border-top-left-radius: 10px;
        }

        >a{
            text-decoration: none;
            font-weight: normal;
            color: #2f3535;
        }
        h2{
            font-size: 12pt;
            text-transform: uppercase;
            color:rgb(113, 117, 117);
        }
        h3{
            font-size: 10pt;
            color:rgb(102, 110, 110);
            height: 70px;
        }
`
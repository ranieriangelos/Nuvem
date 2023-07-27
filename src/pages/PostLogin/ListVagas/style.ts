import styled from "styled-components";

export const ListMainVagas = styled.div`
        width: 100%;
        text-align: center;

        .BuscaOption{
            font-size: 10pt;
            color: #404646;
            text-transform: uppercase;
            font-weight: 600;
            padding: 0 0 20px;
            border-bottom: solid 2px #00b5ce ;
            text-align: left;
           
        } 
        .BuscaOption>h3{font-weight: 400;}
        .BuscaOption>input{width: 50%; border: solid 1px #00b5ce; color: #404646; border-radius: 20px; padding: 10px;}
       
        .buttonBuscar{width: 110px; margin:0 30px; background-color: #00b5ce; border: solid 1px;  border-radius: 20px; padding: 10px; color: white;}
        .buttonFilter{width: 110px; margin:0 0px 0 20px; background-color: #404646; border: solid 1px;  border-radius: 20px; padding: 10px; color: #00b5ce;}
        .buttonBuscar:hover{cursor: pointer; background-color: #404646;}
        .buttonFilter:hover{cursor: pointer; color: white; }  
        .ScrollContent{
            overflow-y: scroll; 
            height: 450px;
            &::-webkit-scrollbar{
            width: 8px;
            }
            &::-webkit-scrollbar-thumb {
            background-color: #404646;
            border-radius: 8px;
          }
            &::-webkit-scrollbar-track {
            background-color: #f0f0f0;
            border-radius: 8px;
          }
        }
`

 
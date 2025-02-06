import styled from "styled-components";

export const FormularioCV = styled.div`
    text-align: center;
    width: 70%;
    margin: 40px auto;
    padding: 0;

.inputForm{
    border-radius: 25px;
    height: 20px;
    padding: 10px;
    border: solid 1px;
    color: #373c3c;
    border-color: #00b5ce;
    margin: 10px 0;
    justify-content: space-between;
}    
>h2{color: #373c3c; font-weight: 300; margin: 0; padding: 0; text-align: left; margin: 30px 0 0;}
>h1{text-transform: uppercase; color: #373c3c; font-weight: 300; margin: 0; padding: 0; text-align: left;}
.formularioContent{text-align: left;}
.Rua{margin: 20px 30px 0 0; width: 44%;}
.Numero{margin: 20px 30px 0 0; width: 24%;}.enviarButton{background-color: #00b5ce; color: white; text-align: center; margin: 40px auto; border-radius: 25px; height: 40px; width: 25%; border: none; }
.enviarButton:hover{background-color: #373c3c; cursor: pointer; }
.nextButton{background-color: #00b5ce; color: white; text-align: center; margin: 40px 0 0 46%; border-radius: 25px; height: 40px; width: 25%; border: none; }
.nextButton:hover{background-color: #373c3c; cursor: pointer; }
.LinkRouter{text-decoration: none; color: white;}
.contentDatasAulas {
    width: 48%;
    float: left;
} 
.contentDatasAulas>select {
    height: 40px;
    margin: 0 20px;
} 
.buttonFormacao {
    background-color: #00b5ce; 
    color: white; 
    text-align: center; 
    margin: 40px 20px 0 0; 
    border-radius: 25px; 
    height: 40px; 
    width: 25%; 
    border: none; 
}
.buttonAddFormacao {
    background-color: #00b5ce; 
    color: white; 
    text-align: center; 
    margin: 40px 20px 0 0; 
    border-radius: 25px; 
    height: 40px; 
    width: 100%; 
    border: none; 
}
.contentDatasAulas>h2{
    color: #373c3c; 
    font-weight: 300; 
    margin: 0; 
    padding: 0; 
    text-align: left; 
    margin: 30px 0 15px 0;
}
.formularioContent >div >select{
    height:40px
}

select.inputForm.Situacao {
    margin: 40px 20px;
}

input.inputForm.Curso {
    width: 100%;
}


`
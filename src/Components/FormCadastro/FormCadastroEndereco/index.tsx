import React, {useState} from "react";
import {FormularioCV} from "./style";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "moment/locale/pt-br"
import {Link} from 'react-router-dom';
import MainHeader from "../../Layout/MainHeader";


const FormEndereco: React.FC = () => {

    const[formValues, setFormValues] = useState({
        rua:'',
        numero:'',
        complemento:'',
        bairro:'',
        cidade:'',
        estado:'',
    })


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const {name, value} = event.target;
        setFormValues((prevValues)=>({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleSubmit = (event: React.FormEvent) =>{
            event.preventDefault();
            console.log(formValues);
    }


    console.log(formValues);

        return(
            <>
        <MainHeader></MainHeader>
            <FormularioCV>
                <h2>agora nos diga</h2>
                <h1>///Qual seu endereço?</h1>
                <form className="formularioContent" onSubmit={handleSubmit}>

                    <input 
                        className="inputForm Rua"
                        type="text" 
                        name="rua"
                        value={formValues.rua}
                        onChange={handleInputChange}
                        placeholder="Informe a Rua da sua residência*"
                    />

                    <input 
                    className="inputForm Numero"
                    type="text" 
                    name="numero" 
                    value={formValues.numero} 
                    onChange={handleInputChange} 
                    placeholder="Número da sua residência*" />
                    
                    <input 
                    className="inputForm Rua"
                    type="text" 
                    name="complemento" 
                    value={formValues.complemento} 
                    onChange={handleInputChange} 
                    placeholder="Há algum Complemento?" />

                    <input 
                    className="inputForm Rua"
                    type="text" 
                    name="bairro" 
                    value={formValues.bairro} 
                    onChange={handleInputChange}
                    placeholder="Informe seu Bairro*" />

                    <input 
                    className="inputForm Rua"
                    type="text" 
                    name="cidade" 
                    value={formValues.cidade} 
                    onChange={handleInputChange}
                    placeholder="Informe sua Cidade*" />

                    <input 
                    className="inputForm Rua"
                    type="text" 
                    name="estado" 
                    value={formValues.estado} 
                    onChange={handleInputChange}
                    placeholder="Informe seu Estado" />
                

                <Link className="LinkRouter" to="/FormCV"><button className="enviarButton" type='submit'>Voltar</button></Link>
                    <Link className="LinkRouter" to="/FormAcesso"><button className="nextButton" type='submit'>Salvar e Próxima </button></Link>

                </form>
            </FormularioCV>
            </>
        )
}

export default FormEndereco;
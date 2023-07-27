import React, {useState} from "react";
import {FormularioCV} from "./style";
import "react-datepicker/dist/react-datepicker.css";
import "moment/locale/pt-br"
import {Link} from 'react-router-dom';
import MainHeader from "../Layout/MainHeader";


const FormAcesso: React.FC = () => {

    const[formValues, setFormValues] = useState({
        login:'',
        senha:'',
        confirmasenha:'',
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
                <h2>vamos criar um </h2>
                <h1>///usuário e senha</h1>
                <form className="formularioContent" onSubmit={handleSubmit}>
                <div className="MainLoginContent">
                    <input 
                        className="inputForm FormInput"
                        type="text" 
                        name="login"
                        value={formValues.login}
                        onChange={handleInputChange}
                        placeholder="Crie um nome de usuário unico*"
                    />

                    <input 
                    className="inputForm FormInput"
                    type="text" 
                    name="senha" 
                    value={formValues.senha} 
                    onChange={handleInputChange} 
                    placeholder="Crie uma senha segura com numeros e caracteres especiais*" />
                    
                    <input 
                    className="inputForm FormInput"
                    type="text" 
                    name="confirmasenha" 
                    value={formValues.confirmasenha} 
                    onChange={handleInputChange} 
                    placeholder="Confirme sua senha, vamos garantir sua segurança e acesso." />
                </div>
                <Link className="LinkRouter" to="/FormEnd"><button className="enviarButton" type='submit'>Voltar</button></Link>
                    <button className="nextButton" type='submit'>Salvar e Próxima </button>

                </form>
            </FormularioCV>
            </>
        )
}

export default FormAcesso;
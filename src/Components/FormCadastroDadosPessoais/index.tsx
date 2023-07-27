import React, {useState} from "react";
import {FormularioCV} from "./style";
import "react-datepicker/dist/react-datepicker.css";
import "moment/locale/pt-br"
import {Link} from 'react-router-dom';
import MainHeader from "../Layout/MainHeader";


const FormCV: React.FC = () => {

    const[formValues, setFormValues] = useState({
        nome:'',
        sobrenome:'',
        email:'',
        confirmarEmail:'',
        dataNascimento:'',
        telefone:'',
        celular:'',
    })

    const [dataNascimento, setdataNascimeneto] = useState(formValues.dataNascimento);


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const {name, value} = event.target;
        setFormValues((prevValues)=>({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleSubmit = (event: React.FormEvent) =>{
            event.preventDefault();
            if(formValues.email !== formValues.confirmarEmail){
                alert("Confirme seu email.")
                return;
            }
            console.log(formValues);
    }


    console.log(formValues);

        return(
            <>
            <MainHeader></MainHeader>
            <FormularioCV>
                <h2>para começar</h2>
                <h1>///Cadastre seus dados</h1>
                <form className="formularioContent" onSubmit={handleSubmit}>

                    <input 
                        className="inputForm Nome"
                        type="text" 
                        name="nome"
                        value={formValues.nome}
                        onChange={handleInputChange}
                        placeholder="Nome*"
                    />

                    <input 
                    className="inputForm Nome"
                    type="text" 
                    name="sobrenome" 
                    value={formValues.sobrenome} 
                    onChange={handleInputChange} 
                    placeholder="Sobrenome*" />
                    
                    <input 
                    className="inputForm Email"
                    type="text" 
                    name="email" 
                    value={formValues.email} 
                    onChange={handleInputChange} 
                    placeholder="Email*" />

                    <input 
                    className="inputForm Email"
                    type="text" 
                    name="confirmarEmail" 
                    value={formValues.confirmarEmail} 
                    onChange={handleInputChange}
                    placeholder="Confirme seu Email*" />

                    <input 
                    className="inputForm Nascimento"
                    type="text" 
                    name="dataNascimento" 
                    value={formValues.dataNascimento} 
                    onChange={handleInputChange}
                    placeholder="Data de Nascimento*" />

                    <input 
                    className="inputForm Telefone"
                    type="text" 
                    name="telefone" 
                    value={formValues.telefone} 
                    onChange={handleInputChange}
                    placeholder="Telefone de Contato" />

                    <input 
                    className="inputForm Telefone"
                    type="text" 
                    name="celular" 
                    value={formValues.celular} 
                    onChange={handleInputChange}
                    placeholder="Celular*" />
                

                    <button className="enviarButton" type='submit'>Salvar</button>
                    <Link className="LinkRouter" to="/FormEnd"><button className="nextButton" type='submit'>Próxima</button></Link>

                </form>
            </FormularioCV>
            </>
        )
}

export default FormCV;
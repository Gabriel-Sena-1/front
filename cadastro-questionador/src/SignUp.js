import React from 'react';
import './SignUp.css';
import ufmsLogo from './ufms logo.png'; // Importação da imagem
import { allUser, createUser } from './services/user.service';

const listOfUsers = () => {
    allUser().map((user) => {
        return (
            <li>Nome: {user.name}</li>
        )
    })
}

const SignUp = () => {
    return (
        <div>
        <div className="signup-container">
            <h1>CRIE SUA CONTA</h1>
            <p>Informe os dados abaixo para ter acesso a sua nova conta.</p>
            <form>
                <input type="text" placeholder="Nome c test ompleto" required />
                <input type="email" placeholder="E-mail" required />
                <input type="tel" placeholder="Telefone" required />
                <input type="password" placeholder="Senha" required />
                <input type="password" placeholder="Confirme sua senha" required />
                <button type="button" onClick={createUser}>FAZER CADASTRO</button>
            </form>
            <div className="logo">
                <img src={ufmsLogo} alt="UFMS Logo" /> {/* Uso da imagem importada */}
            </div>
        </div>
        {listOfUsers}
    </div>
    );
}

export default SignUp;

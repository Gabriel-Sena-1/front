import React from 'react';
import './SignUp.css';
import ufmsLogo from './ufms logo.png'; // Importação da imagem

const SignUp = () => {
    return (
        <div className="signup-container">
            <h1>CRIE SUA CONTA</h1>
            <p>Informe os dados abaixo para ter acesso a sua nova conta.</p>
            <form>
                <input type="text" placeholder="Nome completo" required />
                <input type="email" placeholder="E-mail" required />
                <input type="tel" placeholder="Telefone" required />
                <input type="password" placeholder="Senha" required />
                <input type="password" placeholder="Confirme sua senha" required />
                <button type="submit">FAZER CADASTRO</button>
            </form>
            <div className="logo">
                <img src={ufmsLogo} alt="UFMS Logo" /> {/* Uso da imagem importada */}
            </div>
        </div>
    );
}

export default SignUp;

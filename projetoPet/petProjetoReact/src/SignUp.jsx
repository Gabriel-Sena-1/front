import React from 'react';
import './SignUp.css';
import ufmsLogo from './assets/ufms logo.png'; // Importação da imagem

function createUser (data) {
    console.log(data)
}

const SignUp = () => {
    return (
        <div className="signup-container">
            <h1 className='signup-title'>CRIE SUA CONTA</h1>
            <p className='signup-subtitle'>*Informe os dados abaixo para ter acesso a sua nova conta.</p>
            <div>
                <input className='signup-input' type="text" placeholder="*Nome co sdfsdfmpleto" required />
                <input className='signup-input' type="email" placeholder="*E-mail" required />
                <input className='signup-input' type="email" placeholder="*Confirmar seu e-mail" required />
                <input className='signup-input' type="text" placeholder="*RGA" required />
                <input className='signup-input' type="tel" placeholder="*Telefone" required />
                <input className='signup-input' type="password" placeholder="*Senha" required />
                <input className='signup-input' type="password" placeholder="*Confirme sua senha" required />
                <button type="button" onClick={createUser}>FAZER CADASTRO</button>
            </div>
            <div className="logo">
                <img src={ufmsLogo} alt="UFMS Logo" /> {/* Uso da imagem importada */}
            </div>
        </div>
    );
}

export default SignUp;

import '../../styles/SignUp.css';
import ufmsLogo from '../../assets/ufms-logo.png'; // Importação da imagem
import { Flex } from '@chakra-ui/layout';
import { createUser } from '../../services/user.service';

export function SignUp() {
  return (
    <Flex w="full" h="min-content">
      <div className="signup-container">
          <h1>CRIE SUA CONTA</h1>
          <p>Informe os dados abaixo para ter acesso a sua nova conta.</p>
          <form className="form-input">
            <input type="text" placeholder="Nome completo" required />
            <input type="email" placeholder="E-mail" required />
            <input type="tel" placeholder="Telefone" required />
            <input type="password" placeholder="Senha" required />
            <input type="password" placeholder="Confirme sua senha" required />
            <button type="button">FAZER CADASTRO</button>
          </form>
          <div className="logo">
            <img src={ufmsLogo} alt="UFMS Logo" /> {/* Uso da imagem importada */}
          </div>
      </div>
    </Flex>
  );
}

export default SignUp;

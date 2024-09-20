import "../../styles/SignUp.css";
import ufmsLogo from "../../assets/ufms-logo.png"; // Importação da imagem
import { Divider, Flex } from "@chakra-ui/layout";
import { createUser } from "../../services/user.service";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

// bg-white w-[500px] mx-auto rounded-xl min-h-200 shadow-sm border border-black/20

export function SignUp() {
  return (
    <Flex w="full" h="min-content" className="mx-auto justify-center">
      <Flex className="signup-container row">
        <Flex flex={1} style={{ padding: "20px" }} className="col flex-col">
          <div>Logo</div>
        </Flex>
        <Divider orientation="vertical" />
        <Flex flex={1} style={{ padding: "20px" }} className="col flex-col">
          <h1 className="text-sky-500">Cadastrar-se</h1>
          <p>Informe os dados abaixo para ter acesso a sua nova conta.</p>
          <Card as="form">
            <CardBody>
              <FormControl>
                <Input type="text" placeholder="* Nome completo" required />
              </FormControl>
              <FormControl>
                <Input type="email" placeholder="* E-mail" required />
              </FormControl>
              <Input type="tel" placeholder="* Telefone" required />
              <Input type="password" placeholder="* Senha" required />
              <Input
                type="password"
                placeholder="* Confirme sua senha"
                required
              />
            </CardBody>
            <CardFooter className="w-full">
              <Button type="button" className="m-auto">
                FAZER CADASTRO
              </Button>
            </CardFooter>
          </Card>
          <div className="logo mx-auto">
            <img src={ufmsLogo} alt="UFMS Logo" />{" "}
            {/* Uso da imagem importada */}
          </div>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default SignUp;

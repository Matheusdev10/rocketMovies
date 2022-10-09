import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { MdArrowBack } from 'react-icons/md';
import { Container, Form, Background } from './styles';
import Input from '../../Components/Input';
import { Button } from '../../Components/Button';

export default function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Crie sua conta</h2>
        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="Email" type="text" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />
        <Button title="Cadastrar" />
        <div>
          <MdArrowBack />
          <a href="#">Voltar para o login</a>
        </div>
      </Form>
      <Background />
    </Container>
  );
}

import { FiMail, FiLock } from 'react-icons/fi';
import { Container, Form, Background } from './styles';
import Input from '../../Components/Input';
import { Button } from '../../Components/Button';

export default function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>
        <Input placeholder="Email" type="text" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />
        <Button title="Entrar" />
        <a href="#">Criar conta</a>
      </Form>
      <Background />
    </Container>
  );
}
import { Container, Profile, Text } from './styles';
import Input from '../Input';

export function Header() {
  return (
    <Container>
      <Text>RocketMovies</Text>
      <Input placeholder="Pesquise pelo título" />
      <Profile>
        <div>
          <span>Matheus Campos</span>
          <button>sair</button>
        </div>
        <img src="https://github.com/matheusdev10.png" alt="foto do usuário" />
      </Profile>
    </Container>
  );
}

import { Container, Main } from './styles';
import { Header } from '../../Components/Header';
import { MdArrowBack } from 'react-icons/md';
import Input from '../../Components/Input';
import { TextArea } from '../../Components/TextArea';
export function CreateMovie() {
  return (
    <>
      <Header />
      <Container>
        <div>
          <MdArrowBack />
          <a href="#">Voltar</a>
        </div>
        <h1>Novo filme</h1>
        <Main>
          <Input placeholder="Título" />
          <Input placeholder="Sua nota (de 0 a 5)" />
        </Main>
        <TextArea placeholder="Observações" />
      </Container>
    </>
  );
}

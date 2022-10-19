import { Container, Main, Section, Footer } from './styles';
import { Header } from '../../Components/Header';
import { MdArrowBack } from 'react-icons/md';
import Input from '../../Components/Input';
import { TextArea } from '../../Components/TextArea';
import { FilmItem } from '../../Components/FilmItem';
import { Button } from '../../Components/Button';
import { Link } from 'react-router-dom';
export function CreateMovie() {
  return (
    <>
      <Header />
      <Container>
        <div>
          <MdArrowBack />
          <Link to="/">Voltar</Link>
        </div>
        <h1>Novo filme</h1>
        <Main>
          <Input placeholder="Título" />
          <Input placeholder="Sua nota (de 0 a 5)" />
        </Main>
        <TextArea placeholder="Observações" />

        <Section>
          <p>Marcadores</p>

          <div className="tags">
            <FilmItem value="React" />
            <FilmItem isNew placeholder="Novo marcador" />
          </div>
        </Section>
        <Footer>
          <Button title="Excluir filme"></Button>
          <Button title="Salvar alterações">Excluir filme</Button>
        </Footer>
      </Container>
    </>
  );
}

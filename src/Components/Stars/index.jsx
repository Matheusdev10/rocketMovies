import { Container } from './styles';
import { FiStar } from 'react-icons/fi';
import { ThemeConsumer } from 'styled-components';

export function Stars({ stars }) {
  return (
    <Container>
      {' '}
      {Array(5)
        .fill('')
        .map((_, i) => i)
        .map((element) => (
          <FiStar
            key={String(element)}
            color={element < stars ? '#FF859B' : 'white'}
          />
        ))}
    </Container>
  );
}

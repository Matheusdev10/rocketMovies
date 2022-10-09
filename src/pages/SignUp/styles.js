import styled from 'styled-components';
import backgroundImg from '../../assets/background.png';
export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 136px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 48px;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    font-size: 14px;
  }

  > h2 {
    margin: 48px 0;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > div:nth-child(8) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 48px;
    gap: 8px;
  }
  a {
    list-style: none;
    color: ${({ theme }) => theme.COLORS.PINK};
    text-align: center;
  }

  svg {
    color: ${({ theme }) => theme.COLORS.PINK};
    width: 16px;
    height: 16px;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;

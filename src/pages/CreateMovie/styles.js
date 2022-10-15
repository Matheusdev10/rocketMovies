import styled from 'styled-components';

export const Container = styled.div`
  height: auto;
  width: 1137px;
  margin: auto;
  margin-top: 40px;
  > h1 {
    margin-top: 24px;
  }

  > div {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.PINK};

    > a {
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`;

export const Main = styled.main`
  display: flex;
  gap: 40px;
  margin-top: 40px;
  margin-bottom: 40px;
`;

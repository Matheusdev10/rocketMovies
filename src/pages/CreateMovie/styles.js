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

export const Section = styled.div`
  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_400};
    margin-top: 40px;
    margin-bottom: 24px;
  }

  .tags {
    height: 88px;
    width: 1113px;
    border-radius: 8px;
    padding: 16px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  gap: 40px;
  margin-top: 40px;

  > Button:first-child {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

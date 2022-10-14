import styled from 'styled-components';

export const Container = styled.div`
  height: 581px;
  width: 1137px;
  margin: auto;
  margin-top: 40px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.PINK};

  > a {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Main = styled.div`
  align-items: center;
  gap: 19px;
  margin-top: 24px;

  > h1 {
    font-weight: 500;
    font-size: 36px;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin: 25px 0;
  gap: 8px;
  > img {
    height: 16px;
    width: 16px;
    border-radius: 35px;
    border: 1px solid #3e3b47;
  }

  > div {
    gap: 8px;
    display: flex;
    align-items: center;
    margin-left: 8px;

    > svg {
      color: ${({ theme }) => theme.COLORS.PINK};
      height: 16px;
      width: 16px;
    }
  }
`;

export const Tags = styled.div`
  margin-top: 25px;
`;

export const Text = styled.div`
  text-align: justify;
  margin-top: 25px;
`;

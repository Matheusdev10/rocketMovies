import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Container = styled.div`
  max-width: 1137px;
  left: 123px;
  padding: 0px 16px 0px 0px;
  margin: auto;
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
`;

export const NewMovie = styled(Link)`
  width: 207px;
  height: 48px;
  border-radius: 8px;
  font-size: 14px;
  border: none;
  background: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin-right: 16px;
  }
`;
export const Card = styled.div`
  background: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};
  padding: 32px;
  margin-top: 40px;
  overflow-y: auto;
  max-height: 200px;
  ::-webkit-scrollbar {
    background: ${({ theme }) => theme.COLORS.PINK};
    width: 10px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  > h1 {
    font-weight: 700;
    margin-bottom: 8px;
  }
  > p {
    text-align: justify;
    font-size: 16px;
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;

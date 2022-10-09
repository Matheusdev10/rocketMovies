import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  height: 56px;
  border: 0;
  padding: 16px;
  margin-top: 16px;
  border-radius: 10px;
  font-weight: 500;
  font-size: 16px;
  &:disabled {
    opacity: 0.5;
  }
`;

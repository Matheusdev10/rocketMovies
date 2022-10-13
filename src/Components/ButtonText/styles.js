import styled from 'styled-components';

export const Container = styled.button`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 207px;
  border-radius: 8px;
  padding: 32px;
  background: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border: none;
  font-weight: 400;
  > svg {
    background: transparent;
    display: flex;
    align-items: center;
  }
`;

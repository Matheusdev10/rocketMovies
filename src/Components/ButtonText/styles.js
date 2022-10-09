import styled from 'styled-components';

export const Container = styled.button`
  font-size: 16px;
  background: none;
  color: ${({ theme, isActive }) =>
    isActive ? theme.COLORS.PINK : theme.COLORS.GRAY_200};
  border: none;
  font-weight: 400;
`;

import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 116px;
  padding: 0 123px;
  gap: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BORDER};
`;

export const Text = styled.div`
  color: ${({ theme }) => theme.COLORS.PINK};
  font-size: 24px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > div {
    display: flex;
    margin-right: 10px;
    flex-direction: column;
  }

  span {
    display: flex;
    font-size: 14px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  button {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    font-size: 14px;
    border: none;
    background: transparent;
    display: flex;
    justify-content: flex-end;
  }

  > img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
`;

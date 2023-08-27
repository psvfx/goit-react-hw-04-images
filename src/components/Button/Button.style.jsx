import { styled } from 'styled-components';

export const Thumb = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonStyled = styled.button`
  padding: 8px 16px;
  border-radius: 10px;
  background-color: green;
  text-align: center;

  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 20px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 300px;

  &:hover,
  :focus {
    background-color: blue;
  }
`;

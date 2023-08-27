import styled from 'styled-components';

export const Bar = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  padding: 10px 25px;
  color: white;
  background-color: green;
  border-radius: 5px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 300px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
`;

export const Button = styled.button`
  display: inline-block;
  width: 50px;
  height: 40px;
  border: 0;

  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding: 0 4px

  &::placeholder {
    font: inherit;
    font-size: 20px;
  }
`;

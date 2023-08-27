import styled from 'styled-components';

export const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;

export const ErrorMessage = styled.p`
  margin-top: 25px;
  text-align: center;
  color: #0000ff;
  font-size: 1.42em;
  font-weight: bold;
`;

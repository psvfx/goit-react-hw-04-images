import React from 'react';

import { Thumb, ButtonStyled } from './Button.style';

export const Button = ({ onClick }) => {
  return (
    <Thumb>
      <ButtonStyled type="button" onClick={onClick}>
        Load more
      </ButtonStyled>
    </Thumb>
  );
};

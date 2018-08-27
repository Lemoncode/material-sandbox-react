import { css } from 'emotion';

export const root = css`
  && {
    margin: 2rem;
    flex-shrink: 0;
  }
`;

export const input = css`
  border: 1px solid darkgray;
  border-radius: 0;
  background-color: lightgray;
  
  &::before, &::after {
    display: none;
  }
`;

export const label = css`
  && {
    z-index: 2;
    color: white;
  }
`;

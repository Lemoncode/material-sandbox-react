import { css } from 'emotion';

export const container = css`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  margin: 2rem;
`;

export const toolbar = css`
  display: flex;
  justify-content: center;
`;

export const action = css`
  margin: 0 0.5rem;
  user-select: none;
  cursor: pointer;
`;

export const disabledAction = css`
  ${action}
  opacity: 0.2;
  cursor: none;
`;

export const collection = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const item = css`
  min-width: 300px;
  padding: 0.25rem;
  margin: 0.5rem;
  background-color: lightgray;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  user-select: none;
  cursor: pointer;
`;

export const selectedItem = css`
  ${item}
  box-shadow: 0 0 10px black;
`;

export const itemTitle = css``;
export const itemContent = css``;

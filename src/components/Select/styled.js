import styled from "styled-components";

export const SelectMenu = styled.select`
  appearance: none;
  width: 100%;
  height: var(--row-height);
  cursor: pointer;
  background: var(--white-bg);
  padding: 0 0.75rem;
  border: none;

  &:hover {
    background: var(--white-bg-hover);
  }

  option {
    background: var(--white);
    color: black;
  }
`;

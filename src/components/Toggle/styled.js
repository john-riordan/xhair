import styled from "styled-components";

export const ToggleGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const ToggleButton = styled.button`
  outline: none;
  border: none;
  background: transparent;
  color: white;
  flex: 1;
  height: var(--row-height);
  cursor: pointer;

  &:nth-child(1) {
    background: transparent;

    &:hover {
      background: var(--white-bg-hover);
    }
  }
  &:nth-child(2) {
    background: var(--white-active);
  }

  .isActive & {
    &:nth-child(1) {
      background: var(--white-active);
    }
    &:nth-child(2) {
      background: transparent;

      &:hover {
        background: var(--white-bg-hover);
      }
    }
  }
`;

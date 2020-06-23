import styled from "styled-components";

export const InputRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--row-height);
  padding-left: 0.75rem;
  font-size: 0.875rem;

  &:nth-child(odd) {
    background: var(--white-bg);
  }
  &:nth-child(even) {
    background: var(--black-bg);
  }

  &:hover {
    background: var(--white-bg-hover);
  }

  &.disabled {
    opacity: 0.15;
    pointer-events: none;
  }
`;

export const InputRowLabel = styled.label`
  flex: 1;
`;
export const InputRowControls = styled.div`
  flex: 1;
  background: var(--white-bg);
`;

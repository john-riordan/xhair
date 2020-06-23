import styled, { css } from "styled-components";

export const ShareBar = styled.div`
  display: flex;
  margin: 0 -0.5rem;
`;
export const SettingsText = styled.textarea`
  opacity: 0;
  height: 0;
  width: 0;
`;
export const Button = styled.button`
  position: relative;
  display: block;
  flex: 1;
  margin: 0 0.5rem;
  height: var(--row-height);
  background: ${props => (props.red ? "var(--red)" : "var(--white-bg-hover2)")};
  font-size: 1rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 3px;
  cursor: pointer;
  user-select: none;
  transition: 0.2s ease-in;

  &:focus {
    outline: none;
  }
  &:active {
    transform: scale(0.98);
  }
  &:hover {
    background: ${props =>
      props.red ? "var(--red-hover)" : "var(--white-active)"};
    .dots1 {
      &::before {
        top: 6px;
        left: 6px;
      }
      &::after {
        top: 6px;
        right: 6px;
      }
    }
    .dots2 {
      &::before {
        bottom: 6px;
        left: 6px;
      }
      &::after {
        bottom: 6px;
        right: 6px;
      }
    }
  }

  &.copied {
    background: var(--green);
    pointer-events: none;
  }
  .dots {
    &::before,
    &::after {
      content: "";
      height: 2px;
      width: 2px;
      background: var(--white);
      position: absolute;
      transition: 0.2s ease-in;
    }
  }
  .dots1 {
    &::before {
      top: 0;
      left: 0;
    }
    &::after {
      top: 0;
      right: 0;
    }
  }
  .dots2 {
    &::before {
      bottom: 0;
      left: 0;
    }
    &::after {
      bottom: 0;
      right: 0;
    }
  }
`;

export const Saved = styled.div`
  box-sizing: border-box;
  height: 150px;
  margin-top: 1rem;
  padding: 1rem;
  border: 1px solid var(--white);
  overflow-y: scroll;

  /* &::-webkit-scrollbar-corner,
  &::-webkit-resizer,
  &::-webkit-scrollbar-track-piece,
  &::-webkit-scrollbar-button {
    display: none;
  }
  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--white-active);
    border: 5px solid var(--bg);
  } */
`;

export const SavedItem = styled.div`
  height: 2.5rem;
  background: var(--red);
  color: white;
  margin-bottom: 0.5rem;
`;

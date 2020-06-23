import styled from "styled-components";

export const RangeFrame = styled.div`
  display: flex;
  align-items: center;
  height: var(--row-height);
  padding: 0 0.75rem;
`;

export const RangeSlider = styled.input`
  position: relative;
  appearance: none;
  height: 4px;
  flex: 1;
  background-color: var(--white);
  border-radius: 0.5rem;
  box-shadow: 0 0 0 4px var(--white-bg-hover2);
  cursor: pointer;

  &:focus {
    outline: none;
  }
  &:active {
    &::-webkit-slider-thumb {
      transform: scale(1.4);
      box-shadow: 0 0 0 4px var(--bg), 0 0 0 5px var(--white);
    }
  }

  &::-webkit-slider-thumb {
    appearance: none;
    width: 10px;
    height: 10px;
    background-color: var(--white);
    border-radius: 50%;
    position: relative;
    z-index: 10;
    transition: 0.15s ease;
  }
`;

export const TextInput = styled.input`
  background: transparent;
  text-align: center;
  font-weight: 500;
  font-size: 1rem;
  color: var(--white);
  width: 4rem;
  outline: none;
  border: none;
  appearance: none;
`;

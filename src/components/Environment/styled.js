import styled from "styled-components";

export const BackgroundImage = styled.div`
  position: relative;
  height: 0;
  padding-bottom: 100%;
  margin-bottom: 1rem;
  background-position: center;
  background-repeat: no-repeat;
  border: 6px solid var(--bg);
  box-shadow: 0 0 0 1px var(--white-active);

  .crosshair {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media screen and (max-width: 900px) {
    height: 160px;
    padding: 0;
  }
`;

export const BtnGrp = styled.div`
  margin-right: 1rem;
`;
export const ModeFrame = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0.5rem 0.5rem 2rem;
  background: linear-gradient(to top, transparent, var(--bg));
`;

export const BtnsFrame = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 2rem 0.5rem 0.5rem;
  background: linear-gradient(to bottom, transparent, var(--bg));
`;
export const Btns = styled.div`
  display: flex;
`;
export const Btn = styled.button`
  appearance: none;
  background: var(--white-bg);
  border: none;
  margin-right: 0.25rem;
  padding: 0.25rem 0.75rem 0.25rem;
  letter-spacing: 1px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  box-shadow: inset 0 0 0 1px var(--white-bg-hover);
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &.active {
    box-shadow: inset 0 0 0 1px var(--white-active);
    background: var(--white-bg-hover2);
  }
`;
export const RangeTitle = styled.span`
  display: block;
  font-size: 0.675rem;
  text-transform: uppercase;
  margin-bottom: 0.25rem;
  letter-spacing: 2px;
  text-shadow: 0 2px 4px var(--bg);
`;

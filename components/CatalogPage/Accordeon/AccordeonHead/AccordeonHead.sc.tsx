import styled from "styled-components";
import {Col} from "../../../Grid";

export const AccordeonToggle = styled.span<{active: boolean}>`
  cursor: pointer;
  transform: ${props => props.active ? 'rotate(180deg)' : null};
  position: relative;
  z-index: 2;
  width: 10px;
  height: 6px;
  display: flex;
  align-items: center;
  transition: all 0.1s;
  user-select: none;
`

export const AccordeonBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
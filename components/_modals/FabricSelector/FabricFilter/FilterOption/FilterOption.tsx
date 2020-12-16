import React from 'react';
import styled from "styled-components";
import {Colors} from "../../../../../constants/colors";
import {useDispatch} from "react-redux";

const FilterOption = (props) => {
  const {type, name, slug, hex, parameter} = props

  const [active, setActive] = React.useState(false);
  const dispatch = useDispatch();

  return (
    <Option
      onClick={() => {
        if (!active) {
          dispatch({
            type: 'ADD_FILTER_ENTITY',
            payload: {parameter, slug, name}
          })
        } else {
          dispatch({
            type: 'REMOVE_FILTER_ENTITY',
            payload: {parameter, slug}
          })
        }
        setActive(!active);
      }}
    >
      <Checkbox active={active}/>
      {type === 'color' ? <Color color={hex}/> : null}
      {name.trim().replace(/^\W/, (c) => c.toUpperCase())}
    </Option>
  );
};

const Checkbox = styled.div<{ active }>`
  display: inline-block;
  border-radius: 3px;
  border: 2px solid ${props => props.active ? Colors.PRIMARY : Colors.DIVIDER};
  height: 15px;
  width: 15px;
  background: ${props => props.active ?
  '#0086A8 url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSI3IiB2aWV3Qm94PSIwIDAgOSA3IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNOC44Njg3NCAwLjE5Mzc0MkM4LjcxNzM3IDAuMDcyMTAxNCA4LjQ5NjA4IDAuMDk2MjM2MiA4LjM3NDQ4IDAuMjQ3NTg0TDMuNjk2NjIgNi4wNjk0MUMzLjYzMzEzIDYuMTM3MzEgMy41NDczMSA2LjE3NjY1IDMuNDU0MDkgNi4xODAzOUMzLjM1ODE0IDYuMTg0MjYgMy4yNjcyNiA2LjE0OTk4IDMuMTk4ODEgNi4wODQ5M0wwLjU5NDkyNSAzLjU4ODk5QzAuNDU0NzM5IDMuNDU0NjQgMC4yMzIyMTcgMy40NTkzNyAwLjA5Nzg1MDMgMy41OTk1MkMtMC4wMzY0OTkzIDMuNzM5NjkgLTAuMDMxNzg4NCAzLjk2MjIzIDAuMTA4MzggNC4wOTY2TDIuNzEzMyA2LjU5MzUzQzIuOTExMjMgNi43ODE2NyAzLjE2NzM0IDYuODgzODMgMy40Mzg3MSA2Ljg4MzgzQzMuNDUzMjIgNi44ODM4MyAzLjQ2NzgxIDYuODgzNTQgMy40ODIzOCA2Ljg4Mjk0QzMuNzY5ODEgNi44NzEzOSA0LjAzMzgyIDYuNzQ2OTkgNC4yMjU3MiA2LjUzMjY4QzQuMjI5ODkgNi41MjgwMiA0LjIzMzkzIDYuNTIzMjQgNC4yMzc4NyA2LjUxODM3TDguOTIyNTggMC42ODgwMDRDOS4wNDQxOCAwLjUzNjYzOCA5LjAyMDA5IDAuMzE1MzY1IDguODY4NzQgMC4xOTM3NDJaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K") center/9px no-repeat'
  : '#fff'};
  margin-right: 15px;
  flex: 0 0 15px;
  
  &:hover {
    border-color: #0086A8;
  }
`

const Option = styled.div`
  padding: 8px 15px;
  border-bottom: 2px solid ${Colors.DIVIDER};
  cursor: pointer;
  display: flex;
  align-items: center;
  user-select: none;
  white-space: nowrap;
  
  &:hover {
    background: #FAFAFA;
  }
  
  &:last-of-type {
    border-bottom: none;
  }
  
  &:hover ${Checkbox} {
    border-color: #0086A8;
  }
`

const Color = styled.div<{ color }>`
  display: inline-block;
  height: 20px;
  width: 20px;
  margin-right: 15px;
  background-color: ${props => props.color};
  border-radius: 10px;
`

export default FilterOption;
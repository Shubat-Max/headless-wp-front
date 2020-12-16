import React from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";

import useOutsideClicked from '../../../../_hooks/useOutsideClick';
import {Colors} from "../../../../../constants/colors";
import FilterOption from "../FilterOption";
import {RootState} from "../../../../../redux/store";


const FilterSelect = ({options, type, parameter}) => {

  const [active, setActive] = React.useState(false);
  const selected = useSelector((state: RootState) => (state.modalFabric.filter[parameter]));

  const ref = React.useRef(null);
  useOutsideClicked(ref, () => {
    setActive(false);
  });

  return (
    <Select ref={ref}>
      <Display
        active={active}
        onClick={() => {
          setActive(state => !state);
        }}
      >
        {
          selected && selected.length ? selected.map((s, i) => parameter === 'color' ?
            <SelectedOptionColor key={i} color={s.slug} /> :
            <SelectedOption key={i}>{s.name}</SelectedOption>
          ) : 'Не выбрано'
        }

        <DropdownArrow active={active} />
      </Display>

      <Options active={active}>
        {options.map((option, index) =>
          <FilterOption
            {...option}
            key={index}
            type={type}
            parameter={parameter}
          />
        )}
      </Options>

    </Select>

  );
};


const SelectedOptionColor = styled.span<{ color }>`
  font: normal normal 400 10px/1em 'Open-Sans', sans-serif;
  height: 20px;
  width: 20px;
  background: ${p => Colors[p.color.toUpperCase()]};
  border-radius: 10px;
  margin-right: 5px;
  white-space: nowrap;
`
const SelectedOption = styled.span`
  font: normal normal 400 10px/1em 'Open-Sans', sans-serif;
  background: #e3e3e3;
  border-radius: 3px;
  padding: 5px 10px;
  margin-right: 5px;
  white-space: nowrap;
  color: #353238;
`;

const Select = styled.div`
  flex: 1;
  max-width: calc(100% - 120px);
  position: relative;
`

const Display = styled.div<{ active }>`
  border-radius: 3px;
  border: 2px solid ${props => props.active ? Colors.PRIMARY : Colors.DIVIDER};
  padding: 8px 15px;
  font: normal normal 400 14px/20px 'Open-Sans', sans-serif;
  cursor: pointer;
  user-select: none;
  position: relative;
  overflow: hidden;
  width: 100%;
  display: flex;
`;

const DropdownArrow = styled.div<{ active }>`
  position: absolute;
  top: 0;
  right: 0;
  width: 45px;
  height: 100%;
  background: #fff;
  z-index: 5;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    transition: .1s;
    background: transparent url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNiIgdmlld0JveD0iMCAwIDEwIDYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik00LjcyNTYxIDAuMTE0MTI4TDAuMTEzMDg0IDQuNzM5NDJDLTAuMDM3OTUxNCA0Ljg5MDk2IC0wLjAzNzY5NzUgNS4xMzYzMSAwLjExMzg2NSA1LjI4NzZDMC4yNjU0MDkgNS40Mzg3NyAwLjUxMDg5OCA1LjQzODM4IDAuNjYyMDUgNS4yODY4Mkw1LjAwMDA1IDAuOTM2ODRMOS4zMzgwMyA1LjI4Njk4QzkuNDg5MiA1LjQzODUyIDkuNzM0NTMgNS40Mzg5MSA5Ljg4NjEgNS4yODc3NkM5Ljk2MjA3IDUuMjExOTIgMTAuMDAwMSA1LjExMjU2IDEwLjAwMDEgNS4wMTMyMUMxMC4wMDAxIDQuOTE0MTEgOS45NjIzMyA0LjgxNTE0IDkuODg2ODggNC43Mzk0NEw1LjI3NDQ2IDAuMTE0MTI4QzUuMjAxODUgMC4wNDExNDAxIDUuMTAzMDIgMC4wMDAxODMxMDUgNS4wMDAwNSAwLjAwMDE4MzEwNUM0Ljg5NzA4IDAuMDAwMTgzMTA1IDQuNzk4MzcgMC4wNDEyNTc0IDQuNzI1NjEgMC4xMTQxMjhaIiBmaWxsPSIjMzUzMjM4Ii8+Cjwvc3ZnPgo=") center/10px no-repeat;
    ${props => props.active ? 'transform: rotateZ(0);' : 'transform: rotateZ(180deg);'}
  }
`

const Options = styled.div<{ active }>`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  z-index: 10;
  background: #fff;
  border-radius: 3px;
  border: 2px solid ${Colors.DIVIDER};
  display: ${props => props.active ? 'block' : 'none'};
  //box-shadow: 3px 3px 0 rgba(53, 50, 56, 0.05);
  min-width: 100%;
  
  @media(max-width: 768px){
    left: unset;
    right: 0;
  }
`

export default FilterSelect;
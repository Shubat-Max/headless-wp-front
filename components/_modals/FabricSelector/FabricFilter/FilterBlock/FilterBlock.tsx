import React from 'react';
import styled from "styled-components";
import FilterLabel from "../FilterLabel";
import FilterSelect from "../FilterSelect";

const FilterBlock = ({ label, type, options, param_slug }) => {
    return (
        <SCFilterBlock>
            <FilterLabel label={label} />
            { ['select', 'color'].includes(type) ? <FilterSelect type={type} parameter={param_slug} options={options}  /> : null }
        </SCFilterBlock>
    );
};

const SCFilterBlock = styled.div`
  display: flex;
  margin-bottom: 15px;
  align-items: center;
  position: relative;
  
  &:last-of-type {
    margin-bottom: 0;
  }
`

export default FilterBlock;
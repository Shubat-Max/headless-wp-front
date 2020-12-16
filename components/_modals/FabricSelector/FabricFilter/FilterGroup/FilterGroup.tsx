import React from 'react';
import FilterBlock from "../FilterBlock";
import styled from "styled-components";

const FilterGroup = ({ filters }) => {
    return (
        <SCFilterGroup>
            {filters.map(( filter, index ) => <FilterBlock key={index} {...filter} /> )}
        </SCFilterGroup>
    );
};

const SCFilterGroup = styled.div``;

export default FilterGroup;
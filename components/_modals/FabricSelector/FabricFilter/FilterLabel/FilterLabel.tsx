import React from 'react';
import styled from "styled-components";
import {Colors} from "../../../../../constants/colors";

const FilterLabel = ({ label }) => {
    return (
        <SCFilterLabel>{label}</SCFilterLabel>
    );
};

const SCFilterLabel = styled.label`
  color: ${Colors.SECONDARY_TEXT};
  font: normal normal 400 14px/1.5em 'Open-Sans', sans-serif;
  flex: 0 0 105px;
  margin-right: 15px;
`;

export default FilterLabel;
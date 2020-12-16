import * as React from 'react';
import {ListName, ListNameWrapper } from './VariatorListName.sc';

const VariatorListName = ({ value }) => {
    return (
        <ListNameWrapper>
            <ListName>{value}</ListName>
        </ListNameWrapper>
    );
};

export default VariatorListName;



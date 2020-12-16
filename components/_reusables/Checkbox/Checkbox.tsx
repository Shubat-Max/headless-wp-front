import * as React from 'react';
import styled from "styled-components";

const Checkbox = ({children, type, label}:any) => {

  if( children ){
    return children
  }
  
  return (
    <>
      <label htmlFor="2">{label}</label>
      <input type={type} id="2"/>
    </>
  );
};



export default Checkbox;
import React from 'react';
import Checkbox from "../components/_reusables/Checkbox";
import styled from "styled-components";

const Test3Route = ( props ) => {

  console.log( props );

  return (
    <div>
      <Checkbox onClick={() => {}}>
        <label htmlFor="1" style={{backgroundColor: 'red', height: '31px', width: '31px', display: 'inline-block', borderRadius: '50%'}}/>
        <input type="checkbox" id="1" style={{display:'none'}}/>
      </Checkbox>
      <Checkbox type="checkbox" label="200 см"/>
    </div>
  );
};

const Test = styled.input`

`

export async function getStaticProps(context) {
  const res = await fetch(`http://130.193.62.187/wp-json/rest/v1/menus/header_bottom_menu/`)
  const data = await res.json()
  return {
    props: { data }, // will be passed to the page component as props
  }
}


// http://130.193.62.187/wp-json/rest/v1/menus/header_bottom_menu/

export default Test3Route;
import styled from "styled-components";

export const Item = styled.div<{ active: boolean }>`
  display: inline-block;
  border: 2px solid #e3e3e3;
  background: #fff;
  color: #353238;
  padding: 8px 10px;
  border-radius: 30px;
  cursor: pointer;
  margin-right: 5px;
  margin-bottom: 5px;
  user-select: none;
  line-height: 1em;
  font: normal normal 400 14px/1em 'Open-Sans', sans-serif;
  
  /* If option is active */
  ${ props => (props?.active ? `border-color: #0086A8; background: #0086A8; color: #fff;`: ``)}
  
  &:hover {
    border-color: #0086A8;
  }
`;
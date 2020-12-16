import styled from "styled-components";
import {Colors} from "../../../constants/colors";


export  const ForDesignersContainer = styled.div`
  width: 100%;
  padding: 67px 0;
  background-color: #EFEFEF;
  overflow: hidden;
  position:relative;
  z-index: 0;
`

export const ForDesignerTextBlock = styled.div`
  margin-left:120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 582px;
  z-index: 4;
  position: relative;
`

export const ForDesignersTitle = styled.span`
  border-radius: 3px;
  padding: 7px 25px;
  color: #fff;
  background: ${Colors.PRIMARY_TEXT};
`

export const ForDesignersText = styled.p`
  color: ${Colors.SECONDARY_TEXT};
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
`

export const ForDesignersButton = styled.button`
  padding: 0 0 10px 0;
  border:none;
  border-bottom: 2px solid ${Colors.PRIMARY_TEXT};
  background: none;
  font:normal normal 400 18px/150% 'Lato',sans-serif;
  cursor: pointer;
  
  &:focus {
    outline: none;
  }
 
`

export const ForDesignersLogoText = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 123px;
  color: #FFF;
  opacity: 0.35;
  font:normal normal 400 216px/100% 'Lato',sans-serif;
  z-index: 2;
`

export const ForDesignersAdditionalImg = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url("https://s3-alpha-sig.figma.com/img/5e33/ac9a/feb7ded3d3e4a9a81fe5f8c0cba81982?Expires=1606694400&Signature=dbCQxl-5~ybFgm7XOTtshFpzITV4Np1yTUvLwP89cPyoZrfZ5OSKtxLrfDGIxsjyyV3H6UZHLg1Lgto6L437zW6aZ0jgDGxye6kT5b8bvyqC94IzW9ucQUV4HtbfHvFnAvPjWnB1S2-1D5OJ4IJu~Fp1dxsubLGOXL4FYlwakZF-MXxfLO95bVWmJmhcvGyerQAk2zqWNgMVyhgmHTw5C71jKr7BdJ0N9I4QZ91CtPFn~d7zaY8kiCaFOYMu~3eiXKVoLEVN7Lut96qy-jjlw8WZwCgthhcqdG14TX8kT5SayGl85AqFw0~7zIYtwJ8AOo4tzBQ-rF60qQ-z~olfdw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA");
  background-position: 858px center;
  background-size: 460px 555px;
  background-repeat: no-repeat;
  z-index: 3;
`


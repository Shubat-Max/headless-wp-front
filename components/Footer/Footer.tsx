import * as React from "react"
import {Col, Container, Row} from "../Grid"
import styled from "styled-components"
import Link from "next/link";
import {Colors} from "../../constants/colors";


const Footer = () => {
  return (
    <>
      <FooterBlock>
          <Container>
            <Row>
              <Col xs={12}>
                <Navigation>
                  FOOTER
                </Navigation>
              </Col>
            </Row>
          </Container>
      </FooterBlock>
    </>
  )
}

export const Navigation = styled.div`
  & > a {
    display: inline-block;
    border-radius: 3px;
    border: 1px solid #e3e3e3;
    padding: 5px 10px;
    cursor: pointer;
    margin-right: 15px;
  }
  
  & > a:hover {
    border-color: ${Colors.PRIMARY};
  }

  max-width: 1440px;
`
export const FooterBlock = styled(Row)`
  border-top: 1px solid #e3e3e3;
  padding-top: 30px;
  margin-top: 30px;
  padding-bottom: 30px;
  background: #fafafa;
  
  @media (max-width: 768px){
    padding-bottom: 80px;
  }
`
export const Test = styled.div`
  background: #ffffff;
`


export default Footer;
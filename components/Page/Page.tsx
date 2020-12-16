import * as React from "react"
import {Col, Container, Row} from "../Grid";
import styled from "styled-components";
import {Colors} from "../../constants/colors";


interface IPage {
  content: string;
  slug: string;
  title: string;
  id: number;
  status: 'publish' | 'future' | 'draft' | 'private' | 'trash' | 'auto-draft' | 'inherit'
}


const Page = ({content, title}: IPage) => {
  return (
    <>
      <Heading>
        <Row>
          <Col
            xs={12}
          >
            {title}
          </Col>
        </Row>
      </Heading>

      <Content>
        <Row>
          <Col
            xs={12}
            dangerouslySetInnerHTML={{__html: content}}
          />
        </Row>
      </Content>
    </>
  );
};


const Content = styled(Container)`
  margin-top: 20px;
  font: normal normal 400 14px/1.5em 'Open-Sans', sans-serif;
  color: ${Colors.PRIMARY_TEXT};
  
  & a {
    color: ${Colors.PRIMARY};
    border-bottom: 1px dashed ${Colors.PRIMARY};
  }
  
  & ul, & ol {
    padding-left: 20px;
  }
  
  & ul li, & ol li {
    margin-bottom: 3px;
  }
`
const Heading = styled(Container)`
  margin-top: 40px;
  font: normal normal 600 24px/1em 'Lato', sans-serif;
  color: ${Colors.PRIMARY_TEXT};
  text-transform: uppercase;
`


export default Page;
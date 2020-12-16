import * as React from "react"
import SuperiorSlider from "./SuperiorSlider"
import PopularSlider from "./PopularSlider"
import {Col, Container, Row} from "../Grid"
import InteriorsSlider from "./InteriorsSlider"
import InstagramMain from "./InstagramMain"
import ProjectsSlider from "./ProjectsSlider";
import ForDesigners from "./ForDesigners";
import OwnProduction from "./OwnProduction";


const IndexPage = () => {

  return (
      <Container>

        <Row style={{marginTop: '60px'}}>
          <Col>
            <SuperiorSlider />
          </Col>

        </Row>

        <Row style={{marginTop: '60px'}}>
          <Col>
            <PopularSlider />
          </Col>
        </Row>

        <Row style={{marginTop: '60px'}}>
          <Col>
            <OwnProduction />
          </Col>
        </Row>

        <Row style={{marginTop: '60px'}}>
          <Col>
            <InteriorsSlider />
          </Col>
        </Row>

        {/*<Row style={{marginTop: '60px'}}>*/}
        {/*  <Col>*/}
        {/*    <InstagramMain />*/}
        {/*  </Col>*/}
        {/*</Row>*/}

        <Row style={{marginTop: '60px'}}>
          <Col>
            <ProjectsSlider />
          </Col>
        </Row>

        <Row style={{marginTop: '60px'}}>
          <Col>
            <ForDesigners />
          </Col>
        </Row>

        <Row style={{marginTop: '60px'}}>
          <Col>
            <del>Здесь что-то ещё</del>
            {/*{catalog.map(item => <CatalogItemVariable key={item.id} item={item}/>)}*/}
          </Col>
        </Row>
      </Container>
  );
};

export default IndexPage;
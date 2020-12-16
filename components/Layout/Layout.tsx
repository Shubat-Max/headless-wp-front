import * as React from "react"
import Footer from "../Footer";
import Header from "../Header";
import styled from "styled-components";

const Layout = ({children}) => {
  return (
    <PageWrapper>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>

      <ContentWrapper>
        {children}
      </ContentWrapper>

      <FooterWrapper>
        <Footer />
      </FooterWrapper>

    </PageWrapper>
  );
};


export const ContentWrapper = styled.div`
  flex: 1;
`
export const FooterWrapper = styled.div`
  flex: 0 0;
`
export const HeaderWrapper = styled.div`
  flex: 0 0;
`
export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  min-height: 100vh;
`


export default Layout;
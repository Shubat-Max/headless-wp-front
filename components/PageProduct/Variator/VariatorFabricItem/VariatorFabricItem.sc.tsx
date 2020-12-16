import styled from "styled-components";

export const SCVariatorFabricItem = styled.div`
  margin-bottom: 20px;
`;
export const FabricAttribute = styled.div`
  display: flex;
  align-items: center;
`;
export const FabricImage = styled.div<{ image: string | null; alt: string | null; }>`
  height: 31px;
  width: 31px;
  flex: 0 0 31px;
  margin-right: 10px;
  cursor: pointer;
  border: ${props => props.image ? '0px' : '1px'} solid #e3e3e3;
  border-radius: 50%;
  background: ${props => props.image ?
        'url("' + props.image + '") center/cover no-repeat' :
        '#fff url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxNSAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjQxNDEgNi45MTQwNkg4LjA4NTk0VjAuNTg1OTM4QzguMDg1OTQgMC4yNjIzMjQgNy44MjM2MSAwIDcuNSAwQzcuMTc2MzkgMCA2LjkxNDA2IDAuMjYyMzI0IDYuOTE0MDYgMC41ODU5MzhWNi45MTQwNkgwLjU4NTkzOEMwLjI2MjMyNCA2LjkxNDA2IDAgNy4xNzYzOSAwIDcuNUMwIDcuODIzNjEgMC4yNjIzMjQgOC4wODU5NCAwLjU4NTkzOCA4LjA4NTk0SDYuOTE0MDZWMTQuNDE0MUM2LjkxNDA2IDE0LjczNzcgNy4xNzYzOSAxNSA3LjUgMTVDNy44MjM2MSAxNSA4LjA4NTk0IDE0LjczNzcgOC4wODU5NCAxNC40MTQxVjguMDg1OTRIMTQuNDE0MUMxNC43Mzc3IDguMDg1OTQgMTUgNy44MjM2MSAxNSA3LjVDMTUgNy4xNzYzOSAxNC43Mzc3IDYuOTE0MDYgMTQuNDE0MSA2LjkxNDA2WiIgZmlsbD0iIzM1MzIzOCIvPgo8L3N2Zz4K") center/15px no-repeat'
};
  
  &:hover {
    border-color: #0086A8;
  }
`
export const FabricInformation = styled.div`
  flex: 1;
`
export const FabricName = styled.div`
  color: #353238;
  font: normal normal 400 14px/1em 'Open-Sans', sans-serif;
`
export const FabricAction = styled.span`
  color: #828282;
  font: normal normal 400 14px/1.5em 'Open-Sans', sans-serif;
  cursor: pointer;
  border-bottom: 1px dashed #828282;
  user-select: none;
  
  &:hover {
    color: #0086A8;
    border-color: #0086A8;
  }
`
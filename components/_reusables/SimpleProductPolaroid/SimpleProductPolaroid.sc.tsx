import styled from "styled-components"
import {Colors} from "../../../constants/colors"

export const SnapshotRegularPrice = styled.span`
  margin-left: 5px;
  font: normal normal 400 12px/1.5em 'Open-Sans', sans-serif;
  color: ${Colors.SECONDARY_TEXT};
  text-decoration: line-through;
`
export const SnapshotPrice = styled.span`
  font: normal normal 400 14px/1.5em 'Open-Sans', sans-serif;
  color: ${Colors.PRIMARY_TEXT};
`
export const SnapshotPrices = styled.div`
  margin-top: 5px;
  text-align: center;
`
export const SnapshotSubtitle = styled.div`
  margin-top: 5px;
  max-height: 3em;
  height: 3em;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  font: normal normal 400 14px/1.5em 'Open-Sans', sans-serif;
  color: ${Colors.SECONDARY_TEXT};
`
export const SnapshotTitle = styled.div`
  margin-top: 15px;
  text-align: center;
  white-space: nowrap;
  max-height: 1.5em;
  height: 1.5em;
  overflow: hidden;
  text-overflow: ellipsis;
  font: normal normal 400 14px/1.5em 'Open-Sans', sans-serif;
  color: ${Colors.PRIMARY_TEXT};
`
export const Snapshot = styled.img`
  width: 100%;
  border-radius: 3px;
  user-select: none;
  -webkit-user-drag: none;
`
export const SnapshotInner = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 3px;
`
export const SnapshotOuter = styled.div`
  width: 100%;
  padding-bottom: 100%;
  position: relative;
  border-radius: 3px;
`
export const PolaroidCard = styled.div<{innerIndent}>`
  padding: ${props => props.innerIndent}px;
  border: 1px solid ${Colors.DIVIDER};
  border-radius: 3px;
  background: #fff;
  cursor: pointer;
  
  &:hover {
    background: #f5f5f5;
  }
  
  &:hover ${SnapshotOuter} {
    box-shadow: 3px 3px 0 rgba(53, 50, 56, 0.05);
  }
`
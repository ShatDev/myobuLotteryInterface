import styled from 'styled-components'
import { unselectable } from '../Utils/index'

export const StyledLeftImage = styled.img`
  ${unselectable}
  position: absolute;
  z-index: 1;
  top: 10%;
  left: -30%;
  @media only screen and (max-width: 700px) {
    transform: scale(0.75);
    left: -35%;
  }
`

export const StyledRightImage = styled.img`
  ${unselectable}
  position: absolute;
  z-index: 1;
  top: 15%;
  right: -23%;
`

export const StyledLotteryImage = styled.img`
  ${unselectable}
  position: absolute;
  z-index: -1;
  width: 325.6px;
  height: 376.6px;
  left: -45%;
  top: -18%;
  @media only screen and (max-width: 700px) {
    display: none;
  }
`

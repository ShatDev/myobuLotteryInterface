import styled from 'styled-components'

export const DescriptionText = styled.span`
  margin-top: 2vh;
  display: block;
  clear: both;
  width: 100%;
  font-family: MerriweatherSansRoman;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: bold;
  line-height: 1.88;
  letter-spacing: normal;
  color: #ece7f2;
  @media only screen and (max-width: 700px) {
    font-size: 13px;
  }
`

export const BigText = styled.span`
  font-family: MerriweatherSansRoman;
  font-size: 60px;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.97;
  letter-spacing: normal;
  color: #ffffff;
  @media only screen and (max-width: 700px) {
    text-align: center;
    font-size: 50px;
    display: block;
  }
`

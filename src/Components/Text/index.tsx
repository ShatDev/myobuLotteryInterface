import styled from 'styled-components'

interface textProps {
  marginTop?: string
  marginLeft?: string
  float?: string
  centered?: boolean
}

export const LargeText = styled.span<textProps>`
  font-family: MerriweatherSansRoman;
  font-size: 30px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  margin-top: ${(props) => props.marginTop};
  margin-left: ${(props) => props.marginLeft};
  float: ${(props) => props.float};
  text-align: ${(props) => (props.centered === false ? '' : 'center')};
  color: ${(props) => props.color || '#ffffff'};
  display: block;
`

export const SmallText = styled.span<textProps>`
  display: block;
  color: ${(props) => props.color || '#f7e7ff'};
  font-family: MerriweatherSansRoman;
  font-weight: bold;
  margin-top: ${(props) => props.marginTop || 'calc(10px + 1vh)'};
  margin-left: ${(props) => props.marginLeft || '0'};
  float: ${(props) => props.float || 'left'};
  text-align: ${(props) => (props.centered === true ? 'center' : 'left')};
  width: ${(props) => (props.centered === true ? '100%' : 'auto')};
`

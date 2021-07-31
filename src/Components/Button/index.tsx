import styled from 'styled-components'

interface ButtonProps {
  marginTop?: string
}
export const LargeButton = styled.button<ButtonProps>`
  width: 87.5%;
  height: 50px;
  border-radius: 10px;
  margin: 0;
  cursor: pointer;
  box-shadow: 0 12px 34px 0 rgba(0, 189, 142, 0.26);
  background-color: #00d2ab;
  border: none;
  font-family: MerriweatherSansRoman;
  font-size: 16px;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  margin-top: ${(props) => props.marginTop};
  &:hover {
    box-shadow: 0 12px 34px 0 rgba(0, 189, 142, 0.4);
  }
  &:focus {
    background-color: #02b896;
  }
`

export const MediumButton = styled.button<ButtonProps>`
  width: 40%;
  height: 50px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  LotteryRound-shadow: 0 12px 34px 0 rgba(0, 189, 142, 0.26);
  background-color: #00d2ab;
  font-family: MerriweatherSansRoman;
  font-size: 16px;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  margin-top: ${(props) => props.marginTop}
  &:hover {
    LotteryRound-shadow: 0 12px 34px 0 rgba(0, 189, 142, 0.4);
  }
  &:focus {
    background-color: #02b896;
  }
`

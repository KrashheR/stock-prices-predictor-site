import styled from "styled-components";
import { TitleSize, TitleColor } from "./title";

export const StyledTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: 700;
  font-size: ${(props) => {
    let fontSize = props.theme.fontSizes.medium;
    if (props.$size === TitleSize.BIG) {
      fontSize = props.theme.fontSizes.big;
    }
    if (props.$size === TitleSize.SMALL) {
      fontSize = props.theme.fontSizes.small;
    }
    return fontSize;
  }};

  color: ${(props) => {
    let textColor = props.theme.colors.text;
    if (props.$color === TitleColor.GRAY) {
      textColor = props.theme.colors.textGray;
    }
    return textColor;
  }};

  @media (max-width: ${(props) => props.theme.deviceSizes.laptop}) {
    font-size: ${(props) => {
      let fontSize = props.theme.fontSizes.laptopMedium;
      if (props.$size === TitleSize.BIG) {
        fontSize = props.theme.fontSizes.laptopBig;
      }
      if (props.$size === TitleSize.SMALL) {
        fontSize = props.theme.fontSizes.laptopSmall;
      }
      return fontSize;
    }};
  }
`;

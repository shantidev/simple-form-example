import styled from "styled-components";
import colors from "../../constants/colors";

const TypographyCommon = {
  color: `rgba(${colors.marineBrightRGB}, 0.7)`,
  fontFamily: `'Raleway', sans-serif`,
};

export const TypographyH1 = styled.h1`
  font-size: 48px;
  line-height: 58px;
  font-weight: bold;
  
  ${TypographyCommon}  
  ${props => props.styles}
`;

export const TypographyH2 = styled.h2`
  font-size: 32px;
  line-height: 48px;
  font-weight: bold;
  
  ${TypographyCommon}  
  ${props => props.styles}
`;

export const TypographyH3 = styled.h2`
  font-size: 24px;
  line-height: 32px;
  font-weight: bold;
  
  ${TypographyCommon}  
  ${props => props.styles}
`;

import styled from "styled-components";
import { media } from "../../helpers/mixins";
import colors from "../../constants/colors";

export default styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${colors.dark};
`;

export const MainContainer = styled.div`
  min-width: 320px;
  margin: 0 auto;
  padding-right: 24px;
  padding-left: 24px;
  
  ${media.tablet`
    padding-right: 32px;
    padding-left: 32px;
    padding-top: 64px;
  `}
  
  ${
  media.desktop`
    width: 1208px;
    padding-right: 0;
    padding-left: 0;
    padding-top: 104px;
  `}
`;
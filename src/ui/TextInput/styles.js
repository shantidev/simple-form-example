import styled, {keyframes, css} from "styled-components";
import colors from "../../constants/colors";

/**
 * Styles are calculated automatically!
 * Please, set styles HERE.
 */

const heights = {
  valueHeight: 24,
  smallHeight: 28,
  borderHeight: 2
};

const indents = {
  valueBottom: 8,
  errorMarginTop: 4
};

const typography = {
  valueFontSize: 16,
  valueLineHeight: heights.valueHeight,
  smallFontSize: 12,
  smallLineHeight: heights.smallHeight,
  focusValueColor: colors.marineUltraLight,
  unFocusValueColor: colors.marineBright,
  focusValueShadow: 2,
  unFocusValueShadow: 2,
  errorColor: colors.error,
  focusBorderColor: colors.marineUltraLight,
  unFocusBorderColor: colors.marineBright,
  focusBorderShadow: 6,
  unFocusBorderShadow: 2,
};

const wrapperHeight =
  heights.smallHeight +
  heights.valueHeight +
  heights.borderHeight +
  indents.valueBottom;
const containerHeight =
  wrapperHeight + heights.smallHeight + indents.errorMarginTop;

/* Animation for border */

const blinkingPulse = keyframes`
  0% {
    opacity: 0;
  }
  39% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  43% {
    opacity: 0;
  }
  46% {
    opacity: 1;
  }
  49% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const borderAnimation = () => css`
  ${blinkingPulse} 1s linear 1;
`;

export const InputContainer = styled.div`
  height: ${containerHeight}px;
  width: 100%;
  overflow: hidden;
`;

export const InputWrapper = styled.div`
  position: relative;
  height: ${wrapperHeight}px;
  width: 100%;
  padding-bottom: ${indents.valueBottom}px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  box-sizing: border-box;

  /* Border bottom animation */
  &::before {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    height: ${heights.borderHeight}px;
    width: 100%;
    background-color: ${props =>
      props.invalid ? typography.errorColor : typography.unFocusBorderColor};
    box-shadow: ${props => props.invalid ? 'none' : `0 0 ${typography.unFocusBorderShadow}px ${typography.unFocusBorderColor}`};
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    height: ${heights.borderHeight}px;
    width: 100%;
    background-color: ${props =>
      props.invalid ? typography.errorColor : typography.focusBorderColor};
    box-shadow: ${props => props.invalid ? 'none' : `0 0 ${typography.focusBorderShadow}px ${typography.focusBorderColor}`};
    opacity: ${props => (props.focus ? 1 : 0)};
    
    ${props => props.focus && css`
      animation: ${borderAnimation};
    `}
  }
`;

export const InputError = styled.div`
  width: 100%;
  height: ${heights.smallHeight}px;
  margin-top: ${indents.errorMarginTop}px;
  font-size: ${typography.smallFontSize}px;
  line-height: ${typography.smallLineHeight}px;
  color: ${typography.errorColor};
`;

export const InputIcon = styled.div`
  height: 24px;
  width: 24px;
  background-image: url(${props => props.url});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  opacity: ${props => (props.focus ? 1 : 0.4)};
  transition: opacity ease-in-out 0.3s;
`;

export const InputLabel = styled.label`
  position: absolute;
  bottom: ${props =>
    props.focus
      ? indents.valueBottom + heights.valueHeight
      : indents.valueBottom}px;
  width: 100%;
  height: ${props =>
    props.focus ? heights.smallHeight : heights.valueHeight}px;
  font-size: ${props =>
    props.focus ? typography.smallFontSize : typography.valueFontSize}px;
  line-height: ${props =>
    props.focus ? typography.smallLineHeight : typography.valueLineHeight}px;
  text-shadow: 0 0 ${typography.unFocusValueShadow}px ${typography.unFocusValueColor};
  text-transform: uppercase;
  color: ${typography.unFocusValueColor};
  transition: all ease-in-out 0.3s;
  cursor: text;
  z-index: 0;
`;

export const Input = styled.input`
  width: 100%;
  height: ${heights.valueHeight}px;
  font-size: ${typography.valueFontSize}px;
  line-height: ${typography.valueLineHeight}px;
  color: ${typography.unFocusValueColor};
  text-shadow: 0 0 ${typography.unFocusValueShadow}px ${typography.unFocusValueColor};
  transition: all ease-in-out 0.4s;
  
  /* For unset default input styles */
  padding: 0;
  outline: none;
  border: none;
  z-index: 1;
  
  &:focus {
    color: ${typography.focusValueColor};
    text-shadow: 0 0 ${typography.focusValueShadow}px ${typography.focusValueColor};
  }
`;

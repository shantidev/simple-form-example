import styled, { keyframes } from 'styled-components';
import colors from '../../../../constants/colors';

const rotateStart = keyframes`
  from {
    stroke-dashoffset: 0;
  }
  
  to {
    stroke-dashoffset: 400px;
  }
`;

const rotateStartAlternate = keyframes`
  from {
    stroke-dashoffset: 0;
  }
  
  to {
    stroke-dashoffset: -400px;
  }
`;

const fillAnimation = keyframes`
  from {
		stroke-dashoffset: 339.292;
	}
	to {
		stroke-dashoffset: 0;
	}
`;

export const Circle1 = styled.circle`
  cx: 34;
  cy: 34;
  r: 32;
  fill: none;
  stroke: rgb(0, 194, 184);
  stroke-width: 2px;
  stroke-dasharray: 339.292;
  transition: all ease-in-out 0.3s;
`;

export const Circle2 = styled.circle`
  cx: 34;
  cy: 34;
  r: 28;
  fill: none;
  stroke: rgb(0, 194, 184);
  stroke-width: 2px;
  stroke-dasharray: 339.292;
  transition: all ease-in-out 0.3s;
`;

export const Circle3 = styled.circle`
  cx: 34;
  cy: 34;
  r: 24;
  fill: none;
  stroke: rgb(0, 194, 184);
  stroke-width: 2px;
  stroke-dasharray: 339.292;
  transition: all ease-in-out 0.3s;
`;

export const Circle4 = styled.circle`
  cx: 34;
  cy: 34;
  r: 10;
  stroke: none;
  fill: none;
  transition: all ease-in-out 0.3s;
`;

export const Svg = styled.svg``;

export const ButtonContainer = styled.button`
  position: relative;
  height: 68px;
  width: 68px;
  padding: 0;
  background-color: ${colors.transparent};
  border: none;
  cursor: pointer;
  outline: none;
  
  &:hover {
    ${Circle1} {
      stroke-dasharray: 100;
      animation: ${rotateStartAlternate} 2s 0.3s linear infinite;
    }
    
    ${Circle2} {
      stroke-dasharray: 100;
      animation: ${rotateStart} 2s 0.3s linear infinite;
    }
    
    ${Circle3} {
      stroke-dasharray: 100;
      animation: ${rotateStartAlternate} 2s 0.3s linear infinite;
    }
  }
  
  &:active {
    ${Svg} {
      transform: rotate(-90deg);
    }
  
    ${Circle1} {
      stroke-dasharray: 339.292;
	    stroke-dashoffset: 339.292;
      r: 29;
      stroke-width: 10px;
      stroke: ${colors.marineUltraLight};
      stroke-opacity: 0.6;
      animation: ${fillAnimation} 4s infinite;
      transition: none;
    }
    
    ${Circle2} {
      stroke-dasharray: 339.292;
      r: 24;
      animation: none;
    }
    
    ${Circle3} {
      stroke-dasharray: 339.292;
      r: 20;
      animation: none;
    }
    
    ${Circle4} {
      fill: ${colors.marineUltraLight};
    }
  }
`;
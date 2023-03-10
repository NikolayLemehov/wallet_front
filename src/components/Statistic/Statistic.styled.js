import styled from "styled-components";
import { device } from "styles/Media.variables";
import { font } from '../../styles/Variables';

export const Title = styled.h1`
  font-family: ${font.title};
  font-weight: 400;
  font-size: 30px;
  line-height: 45px;
  color: ${props => props.theme.title};


  margin-top: 40px; 
  margin-bottom: 8px; 

  @media ${device.tablet} {
    margin-top: 20px; 
    margin-bottom: 20px; 
  }

  @media ${device.desktop} {
    margin-top: 32px; 
    margin-left: 20px;
  }
`;

export const StatisticContainer = styled.div`
  padding-bottom: 48px;

  @media ${device.tablet} {
    display: flex;
    gap: 32px;
    padding-bottom: 28px;
  }

  @media ${device.desktop} {
    margin-left: 70px;
    padding-bottom: 44px;
  }
`;

export const Diagram = styled.div`
  @media ${device.tablet} {
    margin-top: 40px;
  }
`;

export const ChartContainer = styled.div`
`;

export const TableContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 280px;

  @media ${device.tablet} {
    width: 336px;
    margin-top: 40px;
  }

  @media ${device.desktop} {
    width: 395px;
    margin-top: 97px;
  }
`;
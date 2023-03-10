import styled from 'styled-components';
import Switch from 'react-switch';
import Datetime from 'react-datetime';
import { device } from 'styles/Media.variables';

import { ReactComponent as Plus } from 'images/svgs/add.svg';
import { ReactComponent as Minus } from 'images/svgs/minus.svg';

export const Conteiner = styled.div`
  padding: 20px 9px 60px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    padding: 40px 73px 60px;
  }
`;

export const WrapCheckbox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;
  color: #e0e0e0;
`;

export const CheckIncome = styled.h3`
  color: ${props => (props.isChecked ? '#24CCA7' : '#e0e0e0')};
`;

export const CheckExpense = styled.h3`
  color: ${props => (props.isChecked ? '#e0e0e0' : '#FF6596')};
`;

export const Choice = styled(Switch)`
  border: 1px solid #e0e0e0;
  border-radius: 30px !important;
`;

export const CheckedHand = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  box-shadow: 0px 6px 15px rgba(255, 101, 150, 0.5);
  background-color: #ff6596;
  border-radius: 50%;
`;

export const UncheckedHandle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
  background-color: #24cca7;
  border-radius: 50%;
`;

export const StyledPlusIcon = styled(Plus)`
  width: 20px;
  height: 20px;
  stroke: #fff;
`;

export const StyledMinusIcon = styled(Minus)`
  width: 20px;
`;

export const FormAddTrans = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
  }
`;
export const Checkbox = styled.input``;

export const LableSelect = styled.label`
  width: 280px;
  height: 32px;
  margin-bottom: 40px;

  &:focus {
    border-color: #24cca7;
  }

  @media ${device.tablet} {
    width: 394px;
  }
`;

export const Lable = styled.label`
  width: 280px;
  height: 32px;
  margin-bottom: 40px;

  &:focus {
    border-color: #24cca7;
  }

  @media ${device.tablet} {
    width: 181px;
    margin-right: 32px;
  }
`;

export const Inpput = styled.input`
  border: none;
  border-bottom: 1px solid #e0e0e0;
  width: 100%;
  padding: 8px 20px;
  font-size: 18px;
  outline: none;
  color: ${props => props.theme.reverseBlack};
  background-color: ${props => props.theme.bgPrimary2};

  ::placeholder {
    font-size: 18px;
    color: ${props => props.theme.txtGrey};
  }

  :focus {
    border-color: #24cca7;
  }

  @media ${device.tablet} {
    text-align: center;
  }
`;

export const CalendarDatetime = styled(Datetime)`
  .form-control {
    border: none;
    border-bottom: 1px solid #e0e0e0;
    width: 280px;
    outline: none;
    padding: 8px 20px;
    font-size: 18px;
    color: ${props => props.theme.reverseBlack};

    :focus {
      border-color: #24cca7;
    }

    @media ${device.tablet} {
      width: 181px;
    }
  }
`;

export const LableComment = styled.label`
  height: 80px;
  width: 280px;
  margin-bottom: 40px;
  margin-top: 40px;
  border: none;

  @media ${device.tablet} {
    height: 32px;
    width: 394px;
  }
`;

export const InpputComment = styled.textarea`
  border: none;
  border-bottom: 1px solid #e0e0e0;
  width: 100%;
  padding: 8px 20px;
  font-size: 18px;
  height: 100%;
  outline: none;
  resize: none;
  font-family: inherit;
  line-height: 1.2;

  color: ${props => props.theme.reverseBlack};
  background-color: ${props => props.theme.bgPrimary2};

  ::placeholder {
    font-size: 18px;
    color: ${props => props.theme.txtGrey};
  }

  :focus {
    border-color: #24cca7;
  }

  @media ${device.tablet} {
    padding: 0px 8px 8px 8px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-family: 'Poppins', 'Montserrat';
  font-style: normal;
  font-weight: 400;

  margin-bottom: 42px;
  color: ${props => props.theme.reverseBlack};

  @media screen and (min-width: 768px) {
    font-size: 30px;
    line-height: 45px;
  }
`;

export const ButtonAdd = styled.button`
  width: 300px;
  height: 50px;
  background: #ffffff;
  border: 1px transparent;
  border-radius: 20px;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #ffffff;
  background: #24cca7;
  transition: 0.2s ease-in-out;

  &:hover:not(:disabled),
  &:focus {
    border: 2px solid transparent;
    transform: scale(1.05);
    outline: transparent;

    background-color: #ffffff;
    color: #24cca7;
    border: 1px solid #24cca7;
  }

  &:disabled {
    filter: grayscale(1);
  }
`;

export const ButtonCancel = styled.button`
  width: 300px;
  height: 50px;
  background: #ffffff;
  border: 1px solid #4a56e2;
  border-radius: 20px;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #4a56e2;
  margin-top: 20px;
  transition: 0.2s ease-in-out;

  &:hover,
  &:focus {
    border: 2px solid transparent;
    transform: scale(1.05);
    outline: transparent;

    background-color: #4a56e2;
    color: #ffffff;
  }
`;

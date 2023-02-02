import { signout } from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';

import { Button } from 'styles/Shared.styled';
import { ButtonWrapper, Container, Title } from './ModalLogout.styled';

const ModalLogout = ({ toggleModalCancel, isDeleteIn }) => {
  const dispatch = useDispatch();
  const onLogoutButtonClick = () => {
    dispatch(signout());
  };
  return (
    <Container>
      {isDeleteIn ? (
        <>
          <Title>Are you sure you want to delete transaction?</Title>
          <ButtonWrapper>
            <Button
              primary="true"
              marginBotom="20px"
              // onClick={onLogoutButtonClick}
              type="submit"
            >
              YES
            </Button>
            <Button
              outlined="true"
              onClick={() => toggleModalCancel()}
              type="button"
            >
              NO
            </Button>
          </ButtonWrapper>
        </>
      ) : (
        <>
          <Title>Are you sure you want to exit?</Title>
          <ButtonWrapper>
            <Button
              primary="true"
              marginBotom="20px"
              onClick={onLogoutButtonClick}
              type="submit"
            >
              YES
            </Button>
            <Button
              outlined="true"
              onClick={() => toggleModalCancel()}
              type="button"
            >
              NO
            </Button>
          </ButtonWrapper>
        </>
      )}
    </Container>
  );
};

export default ModalLogout;
